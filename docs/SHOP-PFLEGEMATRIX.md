# MP Woodworking – Pflegematrix für den WooCommerce-Shop

**Stand:** 30. Juli 2026
**Gültig für:** Theme `mpwoodworking-blocks` 1.1.12
**Zielinstallation:** `springgreen-chough-629931.hostingersite.com`

## Zweck

Diese Matrix trennt **redaktionell pflegbare Produktdaten** von **geschützter Theme-Struktur** und **betrieblicher Shopkonfiguration**. Produkt-, Preis- und Bestandsangaben werden aus WooCommerce bezogen. Das Layout des Shoparchivs, der Produktdetailseite und des Warenkorb-Leerzustands liegt dagegen in versionierten Theme-Dateien und darf nicht durch spontane Block- oder CSS-Änderungen im Live-System aufgelöst werden.

| Sichtbare Komponente | Datenquelle | Backend-Pfad | Vorgesehene Rolle | Pflegeumfang | Layoutschutz / Wiederverwendung | Prüfnachweis |
|---|---|---|---|---|---|---|
| Produkttitel | WooCommerce-Produkt | **Produkte → Alle Produkte → Produkt bearbeiten** | Administrator; gegebenenfalls Shop-Manager | Titel ändern | Karte und Detailseite verwenden denselben Produktdatensatz | Live-Gastmodusprüfung 1.1.12 |
| Produktpreis und Angebotspreis | WooCommerce-Produktdaten | **Produkte → Produkt bearbeiten → Produktdaten → Allgemein** | Administrator; gegebenenfalls Shop-Manager | Regulären Preis, Angebotspreis und Zeitraum pflegen | Darstellung wird vom Theme formatiert; keine Preise im Template duplizieren | Live-Gastmodusprüfung 1.1.12 |
| Hauptbild und Galerie | WordPress-Mediathek / WooCommerce-Produkt | **Produkte → Produkt bearbeiten → Produktbild / Produktgalerie** | Administrator; gegebenenfalls Shop-Manager | Bilder, Reihenfolge und Alternativtexte pflegen | Galerieaufbau liegt im Produktdetail-Template | Live-Gastmodusprüfung 1.1.12; keine defekten Bilder oder fehlenden relevanten Alt-Texte |
| Kurz- und Langbeschreibung | WooCommerce-Produkt | **Produkte → Produkt bearbeiten** | Administrator; gegebenenfalls Shop-Manager | Produkttext pflegen | Typografie und Abstände werden durch das Theme geschützt | Live-Gastmodusprüfung 1.1.12 |
| Bestand und Verfügbarkeit | WooCommerce-Produktdaten | **Produkte → Produkt bearbeiten → Produktdaten → Lagerbestand** | Administrator; gegebenenfalls Shop-Manager | Bestandsstatus und, falls verwendet, Menge pflegen | Produktkarte und Kaufbereich greifen auf denselben Status zu | Oberfläche geprüft; Bestellabbuchung nicht Teil dieser Abnahme |
| Kategorien, Marken und Attribute | WooCommerce-Taxonomien | **Produkte → Kategorien / Marken / Attribute** | Administrator; gegebenenfalls Shop-Manager | Zuordnungen und Begriffe pflegen | Filter und Produktlisten beziehen Werte dynamisch | Filteroberfläche im Gastmodus geprüft |
| Lieferzeiten, Einheiten, Hersteller und Preishinweise | Installierte WooCommerce-Erweiterungen / Produkttaxonomien | **Produkte → Lieferzeiten / Einheiten / Hersteller / Preishinweise** | Administrator; gegebenenfalls Shop-Manager | Produktbezogene Zusatzwerte pflegen | Ausgabe erfolgt über WooCommerce und Theme-Funktionen | Darstellung im Shop und auf der repräsentativen Produktdetailseite geprüft |
| Zusätzliche Produkt-Eingabefelder | Installierte Product-Input-Fields-Erweiterung | **WooCommerce → Product Input Fields** | Administrator | Feldgruppen und Zuordnung pflegen | Geschäftslogik nicht im Theme duplizieren | Nicht in einer Bestellung getestet |
| Shop-Hero, Intro und Struktur | Block-Theme-Template | Datei `templates/archive-product.html` | Technischer Administrator / Entwicklung | Nur über versioniertes Theme-Update | Geschützte Struktur; global für das Shoparchiv | Live-Gastmodusprüfung 1.1.12 |
| Filter-/Produkt-Layout | WooCommerce-Blöcke plus Theme-CSS | `templates/archive-product.html`, `assets/css/theme.css` | Technischer Administrator / Entwicklung | Keine redaktionelle Layoutpflege | Desktop zwei Produktspalten, mobil eine visuelle Spalte | Automatisiert und visuell geprüft |
| Produktdetail-Struktur und Vertrauenselemente | Block-Theme-Template | Datei `templates/single-product.html` | Technischer Administrator / Entwicklung | Nur über versioniertes Theme-Update | Global für Produktdetailseiten | Desktop und Mobil geprüft |
| Rückfragepfad auf Produktseiten | Block-Theme-Template / Kontaktziel | Datei `templates/single-product.html` | Technischer Administrator für Struktur; Redakteur nur am verlinkten Kontaktinhalt | Linkziel und Text kontrolliert ändern | Bestandteil des globalen Produktdetail-Templates | Sichtbarkeit im Gastmodus geprüft; E-Mail-Zustellung nicht Teil dieser Abnahme |
| Warenkorb-Leerzustand | Block-Theme-Template | Datei `templates/page-cart.html` | Technischer Administrator / Entwicklung | Nur über versioniertes Theme-Update | Global für die Warenkorbseite | Desktop und Mobil geprüft |
| Vier Empfehlungen im leeren Warenkorb | WooCommerce-Produktkollektion | Produktbestand aus **Produkte**; Auswahlregel in `templates/page-cart.html` | Produktpflege: Administrator/Shop-Manager; Auswahlregel: Entwicklung | Produktdaten pflegen; Auswahlregel nicht live umstellen | Karten und Buttons responsiv geschützt | Tatsächliche Karten- und Buttonbreiten geprüft |
| Navigation, Header und Footer | Block-Theme-Template-Parts / Navigation | **Design → Editor** | Administrator; nur nach Freigabe | Links und freigegebene Inhalte pflegen | Globale Änderung wirkt auf Shop, Produkt und Warenkorb | Im Gastmodus sichtbar; keine vollständige Rollenprüfung |
| Zahlungen, Versand, Steuern und Checkout | WooCommerce-Konfiguration und Erweiterungen | **WooCommerce → Einstellungen** / **Zahlungen** | Ausschließlich Administrator bzw. ausdrücklich benannte Shop-Verantwortung | Nur nach fachlicher Freigabe und im Testmodus ändern | Nicht Bestandteil des Theme-Redesigns | In dieser Abnahme nicht getestet |
| Cache nach Theme-Update | LiteSpeed Cache | **LiteSpeed Cache → Toolbox → Purge All** | Technischer Administrator | Nach kontrolliertem Update Seitencache leeren | Keine Datenbank- oder Produktdatenänderung erforderlich | Nach jedem Live-Hotfix erfolgreich ausgeführt |

## Verbindliche Redaktionsgrenzen

Produktinhalte werden im jeweiligen WooCommerce-Produkt gepflegt. Änderungen an `archive-product.html`, `single-product.html`, `page-cart.html`, `functions.php`, `style.css` oder `assets/css/theme.css` erfolgen ausschließlich als versioniertes Theme-Update mit Backup, Cache-Purge und anschließender Gastmodusprüfung. Zahlungs-, Steuer-, Versand- und Rechtsthemen benötigen eine separate fachliche Freigabe; die bestandene Oberflächenabnahme ersetzt diese Freigaben nicht.

## Nachweise

| Nachweis | Repository-Pfad |
|---|---|
| Abschließender Shop-Abnahmebericht | `docs/SHOP-ABNAHME-2026-07-30.md` |
| Maschinenlesbarer Gastmodusbericht | `docs/qa-live-2026-07-30-shop/live-shop-report.json` |
| WordPress-Bereitstellung und Rollback | `WORDPRESS-BEREITSTELLUNG.md` |
