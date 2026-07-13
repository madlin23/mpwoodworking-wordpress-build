# MP Woodworking – Zielarchitektur

**Autor:** Manus AI

**Stand:** 13. Juli 2026

## Zielbild

Die neue Umsetzung besteht aus einem bewusst schlanken **Blank-Block-Theme** namens `mpwoodworking-blocks` und einem ergänzenden Funktions-Plugin `mpwoodworking-core`. Das Theme verantwortet ausschließlich Darstellung, globale Design-Tokens, Templates, Template-Parts und Patterns. Dauerhafte Geschäfts- und Inhaltslogik – insbesondere Projekt-Datentyp, Metadaten, Produktbeziehungen und Unikat-Regeln – liegt im Plugin. Dadurch bleiben Inhalte und Shop-Regeln beim späteren Theme-Wechsel erhalten.

WordPress erkennt ein Block-Theme anhand von `style.css` und `templates/index.html`; die standardisierten Verzeichnisse `parts/`, `patterns/`, `styles/` und `templates/` werden für Template-Parts, Patterns, Stilvarianten und Seitentemplates verwendet.[1] Das Theme verwendet `theme.json` Version 3 und setzt damit WordPress 6.6 oder neuer voraus.[2]

| Ebene | Verantwortung | Artefakte |
|---|---|---|
| Theme | Visuelles System, Layout, responsive Darstellung, Site-Editor-Kompatibilität | `theme.json`, HTML-Templates, Template-Parts, Pattern-PHP, CSS |
| Core-Plugin | Projekt-CPT, Holzarten-Taxonomie, Metadaten, Produkt-Projekt-Beziehungen, Unikat-Logik | PHP-Klassen, registrierte Post-Meta-Felder, dynamische Blöcke, WooCommerce-Hooks |
| WooCommerce | Produkte, Warenkorb, Kasse, Bestellungen, Bestand, E-Mails | WooCommerce Core und Block-Templates |
| Redaktionsdaten | Produkte, Projekte, Holzarten, Seiteninhalte | WooCommerce-CSV, Projekt-/Holzarten-Importer, Medienbibliothek |

## Designsystem

Das visuelle System wird aus dem React-Referenzbuild übernommen und in `theme.json` als kontrollierte Palette, Typografie, Layoutbreiten und Abstände abgebildet. WooCommerce empfiehlt für Block-Themes ausdrücklich globale Stile in `theme.json`, da Woo-Blöcke darauf aufbauen und die Einstellungen im Site Editor anpassbar bleiben.[4]

| Token | Wert | Verwendung |
|---|---:|---|
| Hintergrund | `#010101` | Seitenfläche |
| Oberfläche | `#11110f` | Karten, Panels, Header |
| Oberfläche 2 | `#1a1a19` | Inputs, sekundäre Flächen |
| Text | `#f8f8f7` | Überschriften und Primärtext |
| Gedämpfter Text | `#a8a8a3` | Fließtext und Metadaten |
| Rahmen | `#2a2a28` | Karten, Trennlinien, Felder |
| Signalrot | `#d40924` | Hauptaktionen und Preise |
| Lime-Akzent | `#a3e635` | Präzisionslinien, Statuspunkte, Hover |
| Radius | `0` | Kantiger handwerklicher Charakter |
| Inhaltsbreite | `760px` | Lesetext |
| Weite Breite | `1280px` | Grids und Hero-Bereiche |

Die Überschriften erhalten eine schmale, kraftvolle Display-Schrift mit Versalien; Fließtext verwendet eine robuste Serifenschrift. Beide Schriften werden lokal im Theme ausgeliefert, damit keine externen Schriftanfragen und damit keine unnötigen Datenschutz- oder Verfügbarkeitsabhängigkeiten entstehen.

## Template-Landschaft

WooCommerce liefert Block-Templates unter anderem für Produktdetail, Produktkatalog, Produktkategorien, Warenkorb, Kasse und Bestellbestätigung. Ein Block-Theme kann sie durch gleichnamige Dateien im eigenen `templates/`-Verzeichnis überschreiben.[4]

| Öffentlicher Bereich | WordPress-Ziel | Template beziehungsweise Pattern |
|---|---|---|
| Atelier `/` | Statische Startseite | `front-page.html` mit Hero-, Werte-, Atelier-, Produkt- und CTA-Patterns |
| Shop | WooCommerce-Produktarchiv | `archive-product.html` mit Product Collection und Filterbereich |
| Produkt | WooCommerce-Produkt | `single-product.html` mit Galerie, Zusammenfassung, Details und Vertrauensmerkmalen |
| Projekte | CPT-Archiv `projekt` | `archive-projekt.html` mit Query Loop und Projektkarten |
| Projekt | CPT-Einzelansicht | `single-projekt.html` plus dynamische Detail- und Produktbeziehungsblöcke |
| Holzarten | Taxonomie-/Lexikonseite | Statische Seite mit Holzarten-Pattern und Query Loop |
| Kontakt | Statische Seite | Seitenkopf und datensparsames Kontakt-Pattern mit direkter E-Mail-Projektanfrage und Datenschutzhinweis |
| Warenkorb | WooCommerce-Seite | `page-cart.html`, Inhalt über `core/post-content` |
| Kasse | WooCommerce-Seite | `page-checkout.html`, Inhalt über `core/post-content` |
| Rechtliches | Statische Seiten | `page.html` beziehungsweise schmales Inhalts-Template |

Bei Warenkorb und Kasse bleiben die eigentlichen Cart- und Checkout-Blöcke im Seiteninhalt. WooCommerce warnt davor, sie direkt in die Theme-Templates zu verschieben, weil dadurch Editoransicht und Frontend auseinanderlaufen und WooCommerce die zugewiesenen Seiten unter Umständen nicht korrekt erkennt.[4]

## Wiederverwendbare Patterns und Blöcke

Block-Patterns sind vordefinierte Block-Layouts, die nach dem Einfügen redaktionell angepasst werden können.[3] Deshalb werden statische beziehungsweise überwiegend redaktionelle Sections als Patterns umgesetzt. Datenabhängige Bereiche werden als dynamische Blöcke im Core-Plugin implementiert.

| Baustein | Umsetzung | Begründung |
|---|---|---|
| Header und Footer | Template-Parts | Globale Website-Struktur |
| Startseiten-Hero | Pattern | Text, Bild und CTAs bleiben editierbar |
| Werte-Karten | Pattern | Wiederholbare redaktionelle Section |
| Abschnitts-Intro mit Lime-Linie | Pattern | Konsistente Seiteneinstiege |
| Premium-CTA | Pattern | Auf mehreren Seiten wiederverwendbar |
| Produkt-Raster | WooCommerce Product Collection | Echte Produkt-, Preis- und Bestandsdaten |
| Produkt-Karte | Verschachtelte Woo-Blöcke plus Block-Stile | Keine parallele Shop-Logik |
| Projekt-Raster | Query Loop plus Projektkarten-Pattern | Native WordPress-Abfrage |
| Projekt-Details | Dynamischer Block | Ausgabe registrierter Projektmetadaten |
| Verwandte Unikate | Dynamischer Block | Sichere Produkt-Projekt-Verknüpfung und aktuelle Preise |
| Holzarten-Lexikon | Query Loop beziehungsweise Pattern | Datengetriebene, redaktionell pflegbare Darstellung |
| Unikat-Hinweis | Dynamischer Block oder Woo-Block-Stil | Bestand und Kaufstatus müssen aktuell bleiben |

## Inhaltsmodell

Der CPT `projekt` verwendet den Block-Editor und unterstützt Titel, Inhalt, Auszug und Beitragsbild. Die Felder `Holzart`, `Maße`, `Oberfläche`, `Herstellungsdauer`, `Besonderheiten` und `Projektjahr` werden als typisierte und REST-fähige Post-Metadaten registriert. Die Beziehung `verknuepfte_produkte` speichert ausschließlich gültige WooCommerce-Produkt-IDs. Ein eigener Holzarten-Datentyp beziehungsweise eine hierarchische Taxonomie bildet Eibe, Walnuss, Zwetschge und Eiche ab; Produktattribute verwenden parallel das globale WooCommerce-Attribut `Holzart`.

| Entität | Kerndaten | Quelle |
|---|---|---|
| Produkt | SKU, Preis, Bestand, Gewicht, Kategorien, Holzart, Maße, Oberfläche, Texte | Bestehende WooCommerce-CSV |
| Projekt | Titel, Jahr, Holzart, Maße, Oberfläche, Beschreibung, Dauer, Besonderheiten, Galerie | Bestehende JSON-/CSV-Exporte |
| Holzart | Deutscher und wissenschaftlicher Name, Farbe, Härte, Herkunft, Beschreibung, Eigenschaften | Bestehende JSON-/CSV-Exporte |

## WooCommerce- und Unikat-Regeln

WooCommerce bleibt alleinige Quelle für Warenkorb, Kasse, Bestellungen und Bestand. Für echte Einzelstücke setzt der Import den Lagerbestand auf `1`, aktiviert Bestandsverwaltung und deaktiviert Nachbestellungen. Das Core-Plugin begrenzt zusätzlich die käufliche Menge für gekennzeichnete Unikate auf `1`, verhindert Mengenänderungen oberhalb von `1` im Warenkorb und zeigt den Status „Einzelstück“ beziehungsweise „Verkauft“ konsistent an. Diese Regeln ergänzen WooCommerce, ersetzen dessen Bestandsprüfung jedoch nicht.

Das Theme überschreibt nur die notwendigen Block-Templates. Produktlisten verwenden den WooCommerce Product Collection Block; Produktpreise, Warenkorb-Schaltflächen und Bestandsstatus bleiben WooCommerce-Blöcke. Solange WooCommerce im Modus „Coming soon“ läuft, markiert das Theme öffentliche Produktkarten als nicht käuflich, ersetzt Kaufsteuerungen durch den Status „Shop bald verfügbar“ und verhindert auch direkte Add-to-cart-Aufrufe. Nach Freigabe der Shop-Sichtbarkeit greift automatisch wieder die native WooCommerce-Kauflogik. Damit werden keine separaten React-Zustände oder Mock-Kassen übernommen.

## Medienstrategie

Im Repository und in der ZIP-Datei fehlen die vier im React-Build referenzierten `/manus-storage/`-Bilddateien. Das Theme liefert daher visuell passende, eindeutig gekennzeichnete Platzhalterflächen und dokumentiert die vorgesehenen Medien-Slots. Die vorhandene öffentliche Logo-Datei kann als Referenz dienen; eine produktive Übernahme erfolgt erst nach Prüfung der Originaldatei und der gewünschten Logo-Variante. Sobald Originalbilder bereitstehen, werden sie über die WordPress-Mediathek zugewiesen und nicht hart im Theme verdrahtet.

## Qualitäts- und Sicherheitsgrenzen

Alle Frontend-Ausgaben dynamischer PHP-Blöcke werden kontextgerecht escaped. IDs und numerische Metawerte werden validiert, Beziehungen auf existierende Produkte beschränkt und Schreibzugriffe über WordPress-Capabilities abgesichert. Es werden keine Zugangsdaten, Zahlungsdaten oder personenbezogenen Formulardaten im Repository gespeichert. Die Templates verwenden semantische Überschriften, sichtbare Fokuszustände, ausreichende Kontraste, Tastaturbedienbarkeit und reduzierte Bewegung bei `prefers-reduced-motion`.

## Referenzen

[1]: https://developer.wordpress.org/themes/core-concepts/theme-structure/ "WordPress Theme Handbook – Theme Structure"
[2]: https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/ "WordPress Block Editor Handbook – theme.json Version 3"
[3]: https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/ "WordPress Block Editor Handbook – Patterns"
[4]: https://developer.woocommerce.com/docs/theming/block-theme-development/theming-woo-blocks/ "WooCommerce Developer Docs – Theming for Woo blocks"
