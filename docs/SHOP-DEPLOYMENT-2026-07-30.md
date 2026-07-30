# Deploymentprotokoll – Shop-Redesign

**Stand:** 30. Juli 2026
**Ziel:** `https://springgreen-chough-629931.hostingersite.com/`
**Freigegebene Zielfassung:** Theme `mpwoodworking-blocks` Version `1.1.9`

Nach ausdrücklicher Nutzerfreigabe wurde ein token-geschützter, temporärer Nur-Lese-Transferdienst ausschließlich für die sechs freigegebenen Theme-Dateien gestartet. Die öffentlich übertragbaren Inhalte wurden vor dem Schreiben jeweils per SHA-256 mit den lokal geprüften Dateien verglichen; alle sechs Werte stimmten bitgenau überein. Die Zielwerte sind in `target-file-hashes.tsv` gesichert.

Der erste Aufruf des WordPress-Theme-Editors wurde durch eine Hostinger-CAPTCHA- und Login-Unterbrechung blockiert. Nach Nutzerübernahme wurde die bestehende Administrationssitzung erfolgreich wiederhergestellt. Der aktive Theme-Editor zeigte vor dem Shop-Rollout Version **1.1.8**. Die Schreibformulare, der Theme-Editor-Nonce und die sechs geplanten Dateipfade waren vorhanden.

| Freigegebene Datei | Ziel-SHA-256 |
|---|---|
| `style.css` | `3aa7da7091a1800023e5c757fbfdb6c39f89ba5c8f5ca8463f787d27e89ff541` |
| `functions.php` | `230f3044c88c936f533f81df5ab29b7dc18898f3638684dc96088d3c4449beb0` |
| `assets/css/theme.css` | `3da2837749accb31c06a04b263dc491aff5c262cdbbb7726cd9a26e737041dd9` |
| `templates/archive-product.html` | `a060d051983d21194711cb14591313dc0e4c5c3d3f61e0359233ec779b137049` |
| `templates/single-product.html` | `dad1c1492e9d266aacbb3bdc93e2541229cc19eeb7bab5d041987532b5177cc3` |
| `templates/page-cart.html` | `09aee959c8fc8e20e436687a44e553d07f055ab0cf8302ee67ac1c75a2719874` |

## Live-Schreibvorgang

Alle sechs freigegebenen Dateien wurden am 30. Juli 2026 in der geplanten Reihenfolge über den authentifizierten WordPress-Theme-Editor geschrieben. Vor jedem Schreiben wurde die Transferquelle gegen den freigegebenen SHA-256-Zielwert geprüft; nach jedem Schreiben wurde die Datei erneut aus WordPress gelesen und nochmals gehasht. **Alle Quell- und Nachprüfungen waren bitgenau erfolgreich**, und WordPress bestätigte jeweils: „Die Datei wurde erfolgreich bearbeitet.“

| Reihenfolge | Datei | Live-SHA-256 nach Schreiben | Ergebnis |
|---:|---|---|---|
| 1 | `assets/css/theme.css` | `3da2837749accb31c06a04b263dc491aff5c262cdbbb7726cd9a26e737041dd9` | Verifiziert |
| 2 | `functions.php` | `230f3044c88c936f533f81df5ab29b7dc18898f3638684dc96088d3c4449beb0` | Verifiziert |
| 3 | `templates/archive-product.html` | `a060d051983d21194711cb14591313dc0e4c5c3d3f61e0359233ec779b137049` | Verifiziert |
| 4 | `templates/single-product.html` | `dad1c1492e9d266aacbb3bdc93e2541229cc19eeb7bab5d041987532b5177cc3` | Verifiziert |
| 5 | `templates/page-cart.html` | `09aee959c8fc8e20e436687a44e553d07f055ab0cf8302ee67ac1c75a2719874` | Verifiziert |
| 6 | `style.css` | `3aa7da7091a1800023e5c757fbfdb6c39f89ba5c8f5ca8463f787d27e89ff541` | Verifiziert; Theme-Version `1.1.9` |

Die Shop-Inhalte, Produktdaten, Preise, Bestände, Steuer-, Zahlungs- und Checkout-Einstellungen wurden nicht verändert.

## Live-QA-Hotfixes und finale Zielfassung

Die isolierte Gastmodusprüfung nach Version 1.1.9 identifizierte zunächst zwei echte WooCommerce-Spezifitätskollisionen. Beide Fehler wurden ausschließlich im Theme behoben; Produkt-, Preis-, Bestands-, Steuer-, Zahlungs-, Bestell- und Checkoutdaten blieben unverändert. Jeder Hotfix wurde mit einem neuen, auf `style.css` und `assets/css/theme.css` begrenzten Nur-Lese-Transfer bereitgestellt. Vor und nach jedem WordPress-Schreibvorgang wurden Ausgangs- und Zielinhalt per SHA-256 verifiziert. Nach jeder Version wurde der LiteSpeed-Seitencache vollständig geleert.

| Version | Zweck | `assets/css/theme.css` nach Schreiben | `style.css` nach Schreiben | Ergebnis |
|---:|---|---|---|---|
| 1.1.10 | WooCommerce-Gridregel im Desktop-Shoparchiv überschreiben; zwei reale Produktspalten wiederherstellen | `8ccc4047beaba0076bfee6d367fba78ae856024a90f7a3ca2fb2958ac455ceee` | `99497323a962fd7c55d11fb974c0f16cd9819ef4b9b1745479332f7f1161083d` | Bitgenau verifiziert, Cache geleert |
| 1.1.11 | Legacy-Breite der Warenkorbempfehlungen innerhalb des eigenen CSS-Grids neutralisieren | `1d7c4f49e9618d98d23b3981e74d0ce3e1eda8f8cedfb3131bf7f30115d63da6` | `05581f2213b355000764fa614f3e03aa905e470489a596667bf82f0d68dd4a4e` | Bitgenau verifiziert, Cache geleert |
| 1.1.12 | Höher spezifische WooCommerce-Maximalbreite der Empfehlungen neutralisieren | `726f01547ecf0271a74957a065166d46cb0a73644dd84ea573cb07664e827f34` | `0a6c3f410ea99a9a031e06349a1d786f77abd76ffadef3ca0d91e392d38e328b` | Bitgenau verifiziert, Cache geleert |

## Finale Live-Abnahme

Die endgültige Zielfassung ist Theme **`mpwoodworking-blocks` 1.1.12**. Ein isoliertes Chromium-Profil ohne WordPress-Administrationscookies und mit deaktiviertem Browsercache prüfte Shoparchiv, repräsentative Produktdetailseite und leeren Warenkorb jeweils bei **1440 × 900** und **390 × 844 Pixeln**. Alle sechs Kombinationen bestanden die automatisierten Prüfungen. Zusätzlich wurden die korrigierten Shop- und Warenkorbansichten visuell kontrolliert.

| Prüfbereich | Desktop | Mobil | Kernergebnis |
|---|---|---|---|
| Shoparchiv | Bestanden | Bestanden | Sieben reale Produktkarten, 2/1 visuelle Spalten, Filter, Hero und kein Seitenüberlauf |
| Produktdetail | Bestanden | Bestanden | Galerie, Kaufbereich, Vertrauenselemente, Rückfragepfad und Touch-Ziele |
| Warenkorb-Leerzustand | Bestanden | Bestanden | Vier Empfehlungen mit korrekten Karten- und Buttonbreiten sowie drei Vertrauenselementen |

Es wurden im Gastmodus **keine Produkte in den Warenkorb gelegt und kein Kauf- oder Checkout-Vorgang ausgelöst**. Die Abnahme belegt daher die ausgelieferten Shop-, Produkt- und Warenkorboberflächen, nicht die Zahlungs-, Versand-, Bestell- oder E-Mail-Strecke. Die kompakte Prüfübersicht liegt unter `shop-redesign/qa/live-qa/live-shop-abnahme.md`; der maschinenlesbare Rohbericht unter `shop-redesign/qa/live-qa/live-shop-report.json`.
