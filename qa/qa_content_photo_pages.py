#!/usr/bin/env python3
import base64
import json
import os
import time
import urllib.request
from pathlib import Path

import websocket

ROOT = Path(__file__).resolve().parents[1]
BASE = os.environ.get('MPW_QA_BASE_URL', 'https://springgreen-chough-629931.hostingersite.com').rstrip('/')
OUT_DIR = Path(os.environ.get('MPW_QA_OUT_DIR', str(ROOT / 'qa-output'))).expanduser().resolve()
OUT_DIR.mkdir(parents=True, exist_ok=True)
REPORT = OUT_DIR / 'content-photo-report.json'

PAGES = [
    {'label': 'Über mich', 'path': '/ueber-mich/', 'marker': 'Ihr Holz. Ihre Idee. Ein Unikat.'},
    {'label': 'Produkte', 'path': '/produkte/', 'marker': 'Handwerkliche Produktlinien'},
    {'label': 'Galerie', 'path': '/galerie/', 'marker': 'Haben Sie eine Idee?'},
    {'label': 'Videos', 'path': '/videos/', 'marker': 'Direkt aus der Werkstatt'},
    {'label': 'Kontakt', 'path': '/kontakt/', 'marker': 'Lassen Sie uns über Holz sprechen.'},
]
EXPECTED_NAV = ['/', '/ueber-mich/', '/produkte/', '/galerie/', '/shop/', '/videos/', '/kontakt/']
PHOTO_URL_FRAGMENT = '/wp-content/uploads/2026/07/marco-paul-about-portrait'
GALLERY_MEDIA_FRAGMENTS = [
    '0963E57E-93E1-4F6E-A96E-D569CA657EE6',
    '2057e31e-76ee-4825-8d15-60db2b12949e',
    '595B304B-3268-4E45-93DA-E8CE5F4D7387',
    '385D7B3E-9B5A-4ED0-A198-569F471AE059-1',
    '285E016A-BFCE-4932-AA14-65C5AB560037',
]


def targets():
    with urllib.request.urlopen('http://127.0.0.1:9222/json/list', timeout=10) as response:
        return json.load(response)


class CDP:
    def __init__(self, ws_url):
        self.ws = websocket.create_connection(ws_url, timeout=30, suppress_origin=True)
        self.next_id = 1

    def call(self, method, params=None, timeout=30):
        call_id = self.next_id
        self.next_id += 1
        self.ws.send(json.dumps({'id': call_id, 'method': method, 'params': params or {}}))
        deadline = time.time() + timeout
        while time.time() < deadline:
            payload = json.loads(self.ws.recv())
            if payload.get('id') != call_id:
                continue
            if 'error' in payload:
                raise RuntimeError(f"{method}: {payload['error']}")
            return payload.get('result', {})
        raise TimeoutError(method)

    def close(self):
        self.ws.close()


def normalize(path):
    if path == '/':
        return '/'
    return path if path.endswith('/') else f'{path}/'


def wait_for_page(cdp, expected_path):
    deadline = time.time() + 45
    last = {}
    while time.time() < deadline:
        result = cdp.call('Runtime.evaluate', {
            'expression': "({ready:document.readyState,path:location.pathname,captcha:document.body && document.body.innerText.includes('Verifying that you are not a robot')})",
            'returnByValue': True,
        })
        last = result.get('result', {}).get('value', {})
        if last.get('ready') == 'complete' and normalize(last.get('path', '')) == expected_path:
            time.sleep(2)
            return
        time.sleep(0.4)
    raise RuntimeError(f'Seite {expected_path} wurde nicht vollständig geladen: {last}')


def set_viewport(cdp, width, height, mobile):
    cdp.call('Emulation.setDeviceMetricsOverride', {
        'width': width,
        'height': height,
        'deviceScaleFactor': 1,
        'mobile': mobile,
        'screenWidth': width,
        'screenHeight': height,
        'screenOrientation': {'type': 'portraitPrimary' if mobile else 'landscapePrimary', 'angle': 0},
    })


def inspect_page(cdp, page, viewport, attempt=1):
    url = f"{BASE}{page['path']}?qa=content-photo-{int(time.time() * 1000)}"
    cdp.call('Page.navigate', {'url': url})
    wait_for_page(cdp, page['path'])
    expression = f"""(() => {{
        const normalize = (value) => {{
            const url = new URL(value, location.origin);
            let path = url.pathname.replace(/\\/{{2,}}/g, '/');
            if (path !== '/' && !path.endsWith('/')) path += '/';
            return path;
        }};
        const adminBar = document.getElementById('wpadminbar');
        if (adminBar) adminBar.remove();
        const style = document.createElement('style');
        style.textContent = 'html{{margin-top:0!important}}body{{margin-top:0!important}}';
        document.head.appendChild(style);
        window.scrollTo(0, 0);
        const navLinks = [...document.querySelectorAll('.mpw-source-nav a[href]')];
        const activeLinks = navLinks.filter((link) => link.classList.contains('is-active'));
        const images = [...document.images];
        const brokenImages = images.filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.currentSrc || img.src);
        const portrait = images.find((img) => (img.currentSrc || img.src).includes('{PHOTO_URL_FRAGMENT}'));
        const text = document.body.innerText.replace(/\\s+/g, ' ').trim();
        return {{
            title: document.title,
            path: normalize(location.href),
            header: !!document.querySelector('.mpw-source-header'),
            footer: !!document.querySelector('.mpw-source-footer'),
            brand: !!document.querySelector('.mpw-source-brand__text'),
            menuToggle: !!document.querySelector('.mpw-source-menu-toggle'),
            navPaths: navLinks.map((link) => normalize(link.href)),
            activePaths: activeLinks.map((link) => normalize(link.href)),
            ariaCurrentCount: navLinks.filter((link) => link.getAttribute('aria-current') === 'page').length,
            h1: [...document.querySelectorAll('h1')].map((node) => node.textContent.replace(/\\s+/g, ' ').trim()),
            markerFound: text.toLocaleLowerCase('de-DE').includes({json.dumps(page['marker'])}.toLocaleLowerCase('de-DE')),
            bodyCharacterCount: text.length,
            imageCount: images.length,
            brokenImages,
            portrait: portrait ? {{
                src: portrait.currentSrc || portrait.src,
                alt: portrait.alt,
                naturalWidth: portrait.naturalWidth,
                naturalHeight: portrait.naturalHeight,
                displayWidth: Math.round(portrait.getBoundingClientRect().width),
                displayHeight: Math.round(portrait.getBoundingClientRect().height)
            }} : null,
            galleryMedia: images
                .map((img) => img.currentSrc || img.src)
                .filter((src) => {json.dumps(GALLERY_MEDIA_FRAGMENTS)}.some((fragment) => src.includes(fragment))),
            helloWorldFound: text.includes('Hello world!'),
            captcha: text.includes('Verifying that you are not a robot'),
            horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
            viewport: {{width: innerWidth, height: innerHeight, dpr: devicePixelRatio}}
        }};
    }})()"""
    result = cdp.call('Runtime.evaluate', {'expression': expression, 'returnByValue': True})
    checks = result.get('result', {}).get('value', {})
    technical_load_ok = (
        checks.get('header')
        and checks.get('bodyCharacterCount', 0) >= 900
        and checks.get('viewport') == viewport
    )
    if not technical_load_ok and attempt < 3:
        time.sleep(2)
        set_viewport(cdp, viewport['width'], viewport['height'], viewport['width'] < 600)
        return inspect_page(cdp, page, viewport, attempt + 1)
    portrait_ok = True
    if page['path'] == '/ueber-mich/':
        portrait = checks.get('portrait') or {}
        portrait_ok = (
            portrait.get('naturalWidth', 0) >= 768
            and portrait.get('naturalHeight', 0) >= 960
            and 'Marco Paul' in portrait.get('alt', '')
        )
    gallery_ok = True
    if page['path'] == '/galerie/':
        gallery_ok = len(set(checks.get('galleryMedia', []))) == len(GALLERY_MEDIA_FRAGMENTS) and not checks.get('helloWorldFound')
    checks['portraitExpected'] = page['path'] == '/ueber-mich/'
    checks['portraitOk'] = portrait_ok
    checks['galleryExpected'] = page['path'] == '/galerie/'
    checks['galleryOk'] = gallery_ok
    checks['markerExpected'] = page['marker']
    checks['ok'] = (
        checks.get('path') == page['path']
        and checks.get('header')
        and checks.get('footer')
        and checks.get('brand')
        and checks.get('menuToggle')
        and checks.get('navPaths') == EXPECTED_NAV
        and checks.get('activePaths') == [page['path']]
        and checks.get('ariaCurrentCount') == 1
        and checks.get('markerFound')
        and checks.get('bodyCharacterCount', 0) >= 900
        and not checks.get('brokenImages')
        and portrait_ok
        and gallery_ok
        and not checks.get('captcha')
        and not checks.get('horizontalOverflow')
        and checks.get('viewport') == viewport
    )
    return checks


def screenshot(cdp, output):
    shot = cdp.call('Page.captureScreenshot', {
        'format': 'png',
        'fromSurface': True,
        'captureBeyondViewport': False,
    }, timeout=60)
    output.write_bytes(base64.b64decode(shot['data']))


def main():
    page_targets = [target for target in targets() if target.get('type') == 'page' and target.get('webSocketDebuggerUrl')]
    if not page_targets:
        raise RuntimeError('Keine bestehende Chromium-Seite für die Live-QA gefunden.')
    cdp = CDP(page_targets[0]['webSocketDebuggerUrl'])
    report = {'site': BASE, 'desktop': {}, 'mobile': {}}
    try:
        cdp.call('Page.enable')
        cdp.call('Runtime.enable')
        cdp.call('Network.enable')
        cdp.call('Network.setCacheDisabled', {'cacheDisabled': True})

        desktop_viewport = {'width': 1440, 'height': 900, 'dpr': 1}
        set_viewport(cdp, 1440, 900, False)
        for page in PAGES:
            checks = inspect_page(cdp, page, desktop_viewport)
            report['desktop'][page['label']] = checks
            name = page['path'].strip('/')
            screenshot(cdp, OUT_DIR / f'desktop-{name}-1440x900.png')

        mobile_viewport = {'width': 390, 'height': 844, 'dpr': 1}
        set_viewport(cdp, 390, 844, True)
        for page in PAGES:
            checks = inspect_page(cdp, page, mobile_viewport)
            report['mobile'][page['label']] = checks
            name = page['path'].strip('/')
            screenshot(cdp, OUT_DIR / f'mobile-{name}-390x844.png')

        report['ok'] = all(
            result.get('ok')
            for group in (report['desktop'], report['mobile'])
            for result in group.values()
        )
        REPORT.write_text(json.dumps(report, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
        print(json.dumps({
            'ok': report['ok'],
            'report': str(REPORT),
            'desktop': {key: value['ok'] for key, value in report['desktop'].items()},
            'mobile': {key: value['ok'] for key, value in report['mobile'].items()},
        }, indent=2, ensure_ascii=False))
        if not report['ok']:
            raise RuntimeError(f'Mindestens eine Prüfung ist fehlgeschlagen. Details: {REPORT}')
    finally:
        try:
            cdp.call('Emulation.clearDeviceMetricsOverride')
            cdp.call('Page.navigate', {'url': 'about:blank'})
        except Exception:
            pass
        cdp.close()


if __name__ == '__main__':
    main()
