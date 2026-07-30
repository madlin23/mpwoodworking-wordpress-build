# MP Woodworking Blocks 1.1.12

## Shop-Redesign

Version **1.1.12** veröffentlicht das freigegebene WooCommerce-Oberflächenredesign für die produktive MP-Woodworking-Website. Shoparchiv, Produktdetail und Warenkorb-Leerzustand wurden als zusammenhängende, responsive Werkstattoberfläche neu strukturiert.

| Bereich | Änderung |
|---|---|
| Shoparchiv | Werkstatt-Hero, Filter-/Produktaufteilung, sieben dynamische Produktkarten, Vertrauenselemente und responsive 2/1-Spaltenanordnung |
| Produktdetail | Überarbeitete Galerie- und Kaufbereichsstruktur, Verfügbarkeit, Vertrauen, Detailinformationen und Rückfragepfad |
| Warenkorb | Neuer Leerzustand mit vier dynamischen Empfehlungen, klarer Rückführung zum Shop und Vertrauenselementen |
| Theme-Integration | Versionierte Asset-Auslieferung sowie WooCommerce-kompatible Filter-, Preis- und Add-to-cart-Darstellung |
| Live-QA-Hotfixes | Höher spezifische WooCommerce-Grid- und Legacy-Breitenregeln für Desktop-Shop und Warenkorb gezielt neutralisiert |

## Qualitätssicherung

Die finale Theme-Fassung wurde bitgenau auf der Zielinstallation verifiziert und nach dem LiteSpeed-Cache-Purge in einem isolierten Chromium-Gastprofil ohne Administrationscookies geprüft.

| Seite | Desktop 1440 × 900 | Mobil 390 × 844 |
|---|---|---|
| Shoparchiv | Bestanden | Bestanden |
| Produktdetail | Bestanden | Bestanden |
| Warenkorb-Leerzustand | Bestanden | Bestanden |

Der deterministische Theme-Strukturaudit meldet **0 Fehler und 0 Warnungen**. Der Livebericht bestätigt die Asset-Version 1.1.12, genau eine Hauptüberschrift je Seite, Bildintegrität, relevante Alt-Texte, Touch-Zielhöhen und fehlende horizontale Seitenüberläufe. Maschinenbericht, sechs Screenshots und visuelle Schlusskontrolle liegen unter `docs/qa-live-2026-07-30-shop/`.

## Wichtige Abgrenzung

Die Gastmodusabnahme hat **keine Produkte in den Warenkorb gelegt** und keinen Checkout, keine Zahlung, keine Versand- oder Steuerberechnung, keine Bestellung und keine Transaktions-E-Mail ausgelöst. Diese betrieblichen Strecken sind separat im vorgesehenen Zahlungs-Testmodus zu prüfen. Die Veröffentlichung ändert keine vorhandenen Produkt-, Preis-, Bestands-, Zahlungs-, Steuer- oder Bestelldaten.

## Dokumentation

Die Übergabe umfasst den vollständigen Abnahmebericht, eine Pflegematrix, ein projektspezifisches Redakteurshandbuch sowie aktualisierte Backup-, Deployment-, Cache- und Rollbackhinweise.
