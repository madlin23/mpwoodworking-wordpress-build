import base64
import json
import time
import urllib.request
from pathlib import Path

import websocket

BASE_URL = "https://springgreen-chough-629931.hostingersite.com"
DEBUG_URL = "http://127.0.0.1:9226/json/list"
OUT_DIR = Path("/home/ubuntu/mpwoodworking-work/shop-redesign/qa/live-qa")
OUT_DIR.mkdir(parents=True, exist_ok=True)

THEME_VERSION = "1.1.12"
VIEWPORTS = [
    ("desktop", 1440, 900, False),
    ("mobile", 390, 844, True),
]
PAGES = {
    "shop": "/shop/",
    "product": "/shop/accessoires/unikat-schale-zwetschge/",
    "cart": "/warenkorb/",
}


class CDP:
    def __init__(self, ws_url):
        self.ws = websocket.create_connection(ws_url, timeout=30, suppress_origin=True)
        self.next_id = 1

    def call(self, method, params=None, timeout=120):
        call_id = self.next_id
        self.next_id += 1
        self.ws.send(json.dumps({"id": call_id, "method": method, "params": params or {}}))
        deadline = time.time() + timeout
        while time.time() < deadline:
            payload = json.loads(self.ws.recv())
            if payload.get("id") != call_id:
                continue
            if "error" in payload:
                raise RuntimeError(f"{method}: {payload['error']}")
            return payload.get("result", {})
        raise TimeoutError(method)

    def close(self):
        self.ws.close()


def targets():
    with urllib.request.urlopen(DEBUG_URL, timeout=10) as response:
        return json.load(response)


def evaluate(cdp, expression):
    result = cdp.call("Runtime.evaluate", {"expression": expression, "returnByValue": True})
    exception = result.get("exceptionDetails")
    if exception:
        raise RuntimeError(exception)
    return result.get("result", {}).get("value")


def set_viewport(cdp, width, height, mobile):
    cdp.call(
        "Emulation.setDeviceMetricsOverride",
        {
            "width": width,
            "height": height,
            "deviceScaleFactor": 1,
            "mobile": mobile,
            "screenWidth": width,
            "screenHeight": height,
            "screenOrientation": {
                "type": "portraitPrimary" if mobile else "landscapePrimary",
                "angle": 0,
            },
        },
    )


def readiness_expression(page):
    page_checks = {
        "shop": "document.querySelectorAll('.mp-product-grid .mp-product-card').length === 7",
        "product": "Boolean(document.querySelector('.mp-product-layout') && document.querySelector('.mp-product-summary h1'))",
        "cart": "Boolean(document.querySelector('.mp-cart-shell') && (document.querySelector('.wc-block-cart__empty-cart__title, .mp-cart-empty-title, .wp-block-woocommerce-empty-cart-block') || document.querySelector('.wc-block-cart')))",
    }
    return f"""(() => ({{
        ready: document.readyState,
        href: location.href,
        h1: document.querySelectorAll('main h1').length,
        pageReady: {page_checks[page]},
        imagesReady: [...document.images].every(img => img.complete),
        incompleteImages: [...document.images].filter(img => !img.complete).map(img => img.currentSrc || img.src)
    }}))()"""


def wait_ready(cdp, page):
    deadline = time.time() + 90
    last = {}
    lazy_triggered = False
    stable_count = 0
    while time.time() < deadline:
        last = evaluate(cdp, readiness_expression(page)) or {}
        if last.get("ready") == "complete" and last.get("h1") == 1 and last.get("pageReady") and not lazy_triggered:
            evaluate(
                cdp,
                "document.documentElement.style.scrollBehavior='auto'; document.querySelectorAll('img[loading=lazy]').forEach(img => img.loading='eager'); window.scrollTo(0, document.documentElement.scrollHeight); true",
            )
            time.sleep(1.25)
            lazy_triggered = True
        if last.get("ready") == "complete" and last.get("h1") == 1 and last.get("pageReady") and last.get("imagesReady"):
            stable_count += 1
            if stable_count >= 3:
                evaluate(cdp, "document.documentElement.style.scrollBehavior='auto'; window.scrollTo(0, 0); true")
                time.sleep(0.75)
                return last
        else:
            stable_count = 0
        time.sleep(0.35)
    raise RuntimeError(f"Live-Seite nicht bereit ({page}): {last}")


COMMON_JS = r"""((page, expectedVersion) => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    const root = document.documentElement;
    const rect = (el) => el ? {
        x: Math.round(el.getBoundingClientRect().x),
        y: Math.round(el.getBoundingClientRect().y),
        width: Math.round(el.getBoundingClientRect().width),
        height: Math.round(el.getBoundingClientRect().height),
        right: Math.round(el.getBoundingClientRect().right),
        bottom: Math.round(el.getBoundingClientRect().bottom),
    } : null;
    const columnCount = (el) => {
        if (!el) return 0;
        const value = getComputedStyle(el).gridTemplateColumns;
        return value && value !== 'none' ? value.trim().split(/\s+/).length : 0;
    };
    const visualColumnCount = (elements) => {
        const boxes = elements.map(el => el.getBoundingClientRect()).filter(box => box.width > 0 && box.height > 0);
        if (!boxes.length) return 0;
        const firstY = Math.min(...boxes.map(box => box.y));
        const tolerance = Math.max(8, Math.min(...boxes.map(box => box.height)) * 0.25);
        return new Set(boxes.filter(box => Math.abs(box.y - firstY) <= tolerance).map(box => Math.round(box.x))).size;
    };
    const visible = (el) => Boolean(el && el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden');
    const themeCss = [...document.querySelectorAll('link[rel="stylesheet"]')].map(el => el.href).filter(href => href.includes('/assets/css/theme.css'));
    const sourceCss = [...document.querySelectorAll('link[rel="stylesheet"]')].map(el => el.href).filter(href => href.includes('/assets/css/source-match.css'));
    const sourceJs = [...document.scripts].map(el => el.src).filter(src => src.includes('/assets/js/source-match.js'));
    const versionToken = `ver=${expectedVersion}`;
    const base = {
        page,
        href: location.href,
        title: document.title,
        readyState: document.readyState,
        viewport: {width: innerWidth, height: innerHeight, dpr: devicePixelRatio},
        guestMode: !document.body.classList.contains('logged-in') && !document.querySelector('#wpadminbar'),
        h1Count: document.querySelectorAll('main h1').length,
        h1Text: document.querySelector('main h1')?.textContent.trim() || null,
        h1Rect: rect(document.querySelector('main h1')),
        horizontalOverflow: root.scrollWidth > root.clientWidth + 1,
        scrollWidth: root.scrollWidth,
        clientWidth: root.clientWidth,
        skipLink: Boolean(document.querySelector('a[href^="#"]')),
        brokenImages: [...document.images].filter(img => img.complete && img.naturalWidth === 0).map(img => img.currentSrc || img.src),
        mainImagesMissingAlt: [...document.querySelectorAll('main img')].filter(img => !img.alt.trim() && !img.classList.contains('zoomImg') && img.getAttribute('aria-hidden') !== 'true').map(img => img.currentSrc || img.src),
        themeCss,
        sourceCss,
        sourceJs,
        assetVersionCorrect: themeCss.length === 1 && sourceCss.length === 1 && sourceJs.length === 1 && [...themeCss, ...sourceCss, ...sourceJs].every(url => url.includes(versionToken)),
        overflowElements: [...document.querySelectorAll('body *')].map(el => {
            const r = el.getBoundingClientRect();
            return {tag: el.tagName.toLowerCase(), className: typeof el.className === 'string' ? el.className : '', x: Math.round(r.x), width: Math.round(r.width), right: Math.round(r.right), scrollWidth: el.scrollWidth};
        }).filter(item => item.x < -1 || item.right > root.clientWidth + 1).slice(0, 25),
    };
    if (page === 'shop') {
        const layout = document.querySelector('.mp-shop-layout');
        const grid = document.querySelector('.mp-product-grid .wc-block-product-template, .mp-product-grid ul.products');
        const cards = [...document.querySelectorAll('.mp-product-grid .mp-product-card')];
        const sidebar = document.querySelector('.mp-shop-sidebar');
        const catalog = document.querySelector('.mp-product-grid');
        const actionRects = cards.map(card => rect(card.querySelector('.wp-block-button__link, a.button, .wp-block-woocommerce-product-button a'))).filter(Boolean);
        return {...base,
            heroVisible: visible(document.querySelector('.mp-shop-hero')),
            heroFacts: document.querySelectorAll('.mp-shop-fact').length,
            layoutColumns: columnCount(layout),
            productGridColumns: columnCount(grid),
            productCardCount: cards.length,
            productTitles: cards.map(card => card.querySelector('h2, h3')?.textContent.trim() || null),
            sidebarRect: rect(sidebar),
            catalogRect: rect(catalog),
            productActionRects: actionRects,
            filterBlockPresent: Boolean(sidebar?.querySelector('.wp-block-mpwoodworking-shop-filters, [data-mpw-shop-filters], form')),
            commissionVisible: visible(document.querySelector('.mp-shop-commission')),
        };
    }
    if (page === 'product') {
        const gallery = document.querySelector('.mp-product-gallery');
        const summary = document.querySelector('.mp-product-summary');
        const image = gallery?.querySelector('img');
        const button = document.querySelector('.single_add_to_cart_button, .wp-block-add-to-cart-form button[type="submit"]');
        const question = document.querySelector('.mp-product-question a, a[href*="/kontakt/"]');
        return {...base,
            galleryRect: rect(gallery),
            summaryRect: rect(summary),
            productImage: image ? {loaded: image.complete && image.naturalWidth > 0, naturalWidth: image.naturalWidth, naturalHeight: image.naturalHeight, alt: image.alt, rect: rect(image)} : null,
            buyButtonRect: rect(button),
            buyButtonText: button?.textContent.trim() || null,
            uniqueBadgeCount: document.querySelectorAll('.mp-product-summary .mp-unique-badge, .mp-product-summary [class*="unique-badge"]').length,
            trustItems: document.querySelectorAll('.mp-product-assurance').length,
            questionHref: question?.href || null,
            descriptionVisible: visible(document.querySelector('.mp-product-details')),
            productMetaVisible: visible(document.querySelector('.wp-block-woocommerce-product-meta')),
        };
    }
    const recommendationGrid = document.querySelector('.mp-cart-shell .wc-block-grid__products');
    const recommendationCards = [...document.querySelectorAll('.mp-cart-shell .wc-block-grid__product')];
    const emptyTitle = document.querySelector('.wc-block-cart__empty-cart__title, .mp-cart-empty-title, .wp-block-woocommerce-empty-cart-block h2, .wp-block-woocommerce-empty-cart-block h3');
    return {...base,
        heroVisible: visible(document.querySelector('.mp-commerce-hero')),
        emptyHeadingVisible: visible(emptyTitle),
        emptyHeadingText: emptyTitle?.textContent.trim() || null,
        recommendationCount: recommendationCards.length,
        recommendationGridRect: rect(recommendationGrid),
        recommendationCardRects: recommendationCards.map(card => rect(card)).filter(Boolean),
        recommendationColumns: columnCount(recommendationGrid),
        recommendationVisualColumns: visualColumnCount(recommendationCards),
        recommendationActionRects: recommendationCards.map(card => rect(card.querySelector('.wp-block-button__link, a.button'))).filter(Boolean),
        assuranceCount: document.querySelectorAll('.mp-cart-assurance').length,
        cartShellVisible: visible(document.querySelector('.mp-cart-shell')),
        filledCartVisible: visible(document.querySelector('.wc-block-cart')) && !visible(document.querySelector('.wp-block-woocommerce-empty-cart-block')),
    };
})"""


def inspect(cdp, page):
    return evaluate(cdp, f"{COMMON_JS}({json.dumps(page)}, {json.dumps(THEME_VERSION)})") or {}


def screenshot(cdp, path):
    metrics = cdp.call("Page.getLayoutMetrics")
    content_size = metrics.get("cssContentSize", {})
    width = max(1, int(content_size.get("width", 1)))
    height = max(1, int(content_size.get("height", 1)))
    shot = cdp.call(
        "Page.captureScreenshot",
        {
            "format": "png",
            "fromSurface": True,
            "captureBeyondViewport": True,
            "clip": {"x": 0, "y": 0, "width": width, "height": height, "scale": 1},
        },
        timeout=180,
    )
    path.write_bytes(base64.b64decode(shot["data"]))


def actions_large_enough(rects, min_width=0):
    return bool(rects) and all(
        item.get("height", 0) >= 44 and item.get("width", 0) >= min_width
        for item in rects
    )


def recommendation_cards_fill_tracks(metrics, expected_columns):
    grid_width = (metrics.get("recommendationGridRect") or {}).get("width", 0)
    card_rects = metrics.get("recommendationCardRects") or []
    if grid_width <= 0 or len(card_rects) != 4 or expected_columns <= 0:
        return False
    minimum_card_width = (grid_width / expected_columns) * 0.72
    return all(item.get("width", 0) >= minimum_card_width for item in card_rects)


def assess(page, width, metrics):
    common = (
        metrics.get("guestMode") is True
        and metrics.get("h1Count") == 1
        and metrics.get("horizontalOverflow") is False
        and metrics.get("brokenImages") == []
        and metrics.get("mainImagesMissingAlt") == []
        and metrics.get("viewport", {}).get("width") == width
        and metrics.get("skipLink") is True
        and metrics.get("assetVersionCorrect") is True
    )
    if page == "shop":
        expected_layout = 1 if width <= 900 else 2
        expected_grid = 1 if width <= 720 else 2
        return common and (
            metrics.get("h1Text") == "Der Unikat-Shop"
            and metrics.get("heroVisible") is True
            and metrics.get("heroFacts") == 3
            and metrics.get("layoutColumns") == expected_layout
            and metrics.get("productGridColumns") == expected_grid
            and metrics.get("productCardCount") == 7
            and len(set(metrics.get("productTitles", []))) == 7
            and actions_large_enough(metrics.get("productActionRects", []))
            and metrics.get("commissionVisible") is True
        )
    if page == "product":
        gallery = metrics.get("galleryRect") or {}
        summary = metrics.get("summaryRect") or {}
        stacked = summary.get("y", 0) >= gallery.get("bottom", 0) - 2
        expected_stacked = width <= 781
        return common and (
            metrics.get("h1Text") == "Unikat-Schale aus Zwetschge"
            and metrics.get("productImage", {}).get("loaded") is True
            and metrics.get("buyButtonRect", {}).get("height", 0) >= 44
            and metrics.get("trustItems") == 2
            and str(metrics.get("questionHref", "")).rstrip("/").endswith("/kontakt")
            and metrics.get("descriptionVisible") is True
            and metrics.get("productMetaVisible") is True
            and stacked == expected_stacked
            and (metrics.get("h1Rect") or {}).get("right", width + 1) <= width + 1
        )
    expected_recommendation_columns = 1 if width <= 600 else (2 if width <= 1024 else 4)
    minimum_recommendation_action_width = 160 if width <= 600 else 96
    return common and (
        metrics.get("h1Text") == "Warenkorb"
        and metrics.get("heroVisible") is True
        and metrics.get("emptyHeadingVisible") is True
        and metrics.get("recommendationCount") == 4
        and metrics.get("recommendationVisualColumns") == expected_recommendation_columns
        and recommendation_cards_fill_tracks(metrics, expected_recommendation_columns)
        and actions_large_enough(
            metrics.get("recommendationActionRects", []),
            minimum_recommendation_action_width,
        )
        and metrics.get("assuranceCount") == 3
        and metrics.get("cartShellVisible") is True
        and metrics.get("filledCartVisible") is False
    )


def write_markdown(report):
    rows = []
    for viewport, page_results in report["results"].items():
        for page, metrics in page_results.items():
            rows.append(
                f"| {viewport} | {page} | {'Bestanden' if metrics.get('ok') else 'Fehlgeschlagen'} | "
                f"{metrics.get('viewport', {}).get('width')} × {metrics.get('viewport', {}).get('height')} | "
                f"{'Nein' if not metrics.get('horizontalOverflow') else 'Ja'} | "
                f"{THEME_VERSION if metrics.get('assetVersionCorrect') else 'abweichend'} |"
            )
    text = "# Live-Gastmodus-Abnahme – WooCommerce-Shop\n\n"
    text += f"**Ziel:** `{BASE_URL}`  \n**Theme-Version:** `{THEME_VERSION}`  \n**Gesamtergebnis:** **{'Bestanden' if report.get('ok') else 'Fehlgeschlagen'}**\n\n"
    text += "Die Prüfung erfolgte in einem isolierten Chromium-Profil ohne WordPress-Administrationssitzung und mit deaktiviertem Browsercache. Es wurden keine Produkte in den Warenkorb gelegt und kein Kauf- oder Checkout-Vorgang ausgelöst.\n\n"
    text += "| Viewport | Seite | Ergebnis | Größe | Horizontaler Überlauf | Asset-Version |\n|---|---|---|---:|---|---|\n"
    text += "\n".join(rows) + "\n\n"
    text += "Geprüft wurden die Einmaligkeit der Hauptüberschrift, das Werkstatt-Hero, alle sieben realen Produktkarten, das responsive Filter-/Produktlayout, Produktgalerie und Kaufbereich, Vertrauenselemente, Rückfragepfad, der responsive Warenkorb-Leerzustand mit vier Empfehlungen einschließlich tatsächlicher Karten- und Buttonbreiten, Bildintegrität, Alt-Texte, Touch-Zielhöhen sowie das Fehlen horizontaler Überläufe.\n"
    (OUT_DIR / "live-shop-abnahme.md").write_text(text, encoding="utf-8")


def main():
    pages = [target for target in targets() if target.get("type") == "page" and target.get("webSocketDebuggerUrl")]
    if not pages:
        raise RuntimeError("Kein isolierter Gastbrowser-Tab für die Live-Shop-QA gefunden.")
    preferred = next((target for target in pages if target.get("url") in {"about:blank", "chrome://newtab/"}), pages[0])
    cdp = CDP(preferred["webSocketDebuggerUrl"])
    report = {
        "scope": "Live-Gastmodus-Abnahme WooCommerce-Shop",
        "baseUrl": BASE_URL,
        "themeVersion": THEME_VERSION,
        "isolatedGuestProfile": True,
        "results": {},
    }
    try:
        cdp.call("Page.enable")
        cdp.call("Runtime.enable")
        cdp.call("Network.enable")
        cdp.call("Network.setCacheDisabled", {"cacheDisabled": True})
        cdp.call("Network.clearBrowserCache")
        cdp.call("Network.clearBrowserCookies")
        for label, width, height, mobile in VIEWPORTS:
            report["results"][label] = {}
            set_viewport(cdp, width, height, mobile)
            for page, path in PAGES.items():
                url = f"{BASE_URL}{path}?qa={label}-{page}-{int(time.time() * 1000)}"
                cdp.call("Page.navigate", {"url": url})
                wait_ready(cdp, page)
                metrics = inspect(cdp, page)
                metrics["ok"] = assess(page, width, metrics)
                screenshot(cdp, OUT_DIR / f"live-{page}-{label}-{width}x{height}.png")
                report["results"][label][page] = metrics
        report["ok"] = all(item.get("ok") for group in report["results"].values() for item in group.values())
        report_path = OUT_DIR / "live-shop-report.json"
        report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        write_markdown(report)
        print(json.dumps(report, ensure_ascii=False, indent=2))
        if not report["ok"]:
            raise RuntimeError("Mindestens eine Live-Gastmodus-Shopprüfung ist fehlgeschlagen.")
    finally:
        try:
            cdp.call("Emulation.clearDeviceMetricsOverride")
        except Exception:
            pass
        cdp.close()


if __name__ == "__main__":
    main()
