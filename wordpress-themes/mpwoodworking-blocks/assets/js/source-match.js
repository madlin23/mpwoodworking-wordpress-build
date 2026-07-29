(() => {
	"use strict";

	const menuButton = document.querySelector(".mpw-source-menu-toggle");
	const menu = document.querySelector(".mpw-source-nav");

	if (menuButton && menu) {
		const normalizePath = (path) => {
			const normalized = path.replace(/\/{2,}/g, "/").replace(/\/$/, "");
			return normalized || "/";
		};
		const currentPath = normalizePath(window.location.pathname);

		menu.querySelectorAll("a[href]").forEach((link) => {
			const linkPath = normalizePath(new URL(link.href, window.location.origin).pathname);
			const isProjectDetail = linkPath === "/galerie" && currentPath.startsWith("/projekt/");
			const isShopDetail = linkPath === "/shop" && (
				currentPath.startsWith("/produkt/") ||
				currentPath.startsWith("/product/") ||
				currentPath.startsWith("/produkt-kategorie/") ||
				currentPath.startsWith("/product-category/")
			);
			const isActive = currentPath === linkPath || isProjectDetail || isShopDetail;

			link.classList.toggle("is-active", isActive);
			if (isActive) {
				link.setAttribute("aria-current", "page");
			} else {
				link.removeAttribute("aria-current");
			}
		});

		const closeMenu = () => {
			menuButton.setAttribute("aria-expanded", "false");
			menu.classList.remove("is-open");
			const label = menuButton.querySelector(".screen-reader-text");
			if (label) {
				label.textContent = "Menü öffnen";
			}
		};

		menuButton.addEventListener("click", () => {
			const isOpen = menuButton.getAttribute("aria-expanded") === "true";
			menuButton.setAttribute("aria-expanded", String(!isOpen));
			menu.classList.toggle("is-open", !isOpen);
			const label = menuButton.querySelector(".screen-reader-text");
			if (label) {
				label.textContent = isOpen ? "Menü öffnen" : "Menü schließen";
			}
		});

		menu.addEventListener("click", (event) => {
			if (event.target.closest("a")) {
				closeMenu();
			}
		});

		document.addEventListener("keydown", (event) => {
			if (event.key === "Escape") {
				closeMenu();
			}
		});

		window.addEventListener("resize", () => {
			if (window.innerWidth > 900) {
				closeMenu();
			}
		});
	}

	const mailForms = document.querySelectorAll("[data-mpw-mail-form]");

	mailForms.forEach((mailForm) => {
		const status = mailForm.querySelector(".mpw-source-form-status");
		const setStatus = (message) => {
			if (status) {
				status.textContent = message;
			}
		};

		mailForm.addEventListener("submit", (event) => {
			event.preventDefault();
			setStatus("");

			if (!mailForm.reportValidity()) {
				setStatus("Bitte füllen Sie die markierten Pflichtfelder vollständig aus.");
				return;
			}

			const data = new FormData(mailForm);
			const recipient = String(mailForm.dataset.recipient || "woodworking.mp@gmail.com")
				.trim()
				.replace(/[\r\n]/g, "");
			const subject = String(data.get("subject") || "").trim() || "Anfrage über die Website";
			const lines = [
				`Name: ${String(data.get("name") || "").trim()}`,
				`E-Mail: ${String(data.get("email") || "").trim()}`,
				`Telefon: ${String(data.get("phone") || "").trim() || "–"}`,
				"",
				String(data.get("message") || "").trim(),
			];
			const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

			setStatus("Ihr E-Mail-Programm wird geöffnet. Senden Sie die Nachricht dort bitte noch ab.");
			window.location.href = mailto;
		});
	});
})();
