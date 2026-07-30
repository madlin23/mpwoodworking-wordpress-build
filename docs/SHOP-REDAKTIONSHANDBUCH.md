# Redakteurshandbuch: MP-Woodworking-Shop

**Gültig für:** Theme `mpwoodworking-blocks` 1.1.12 auf der aktuellen WordPress-/WooCommerce-Zielinstallation
**Stand:** 30. Juli 2026
**Rollen:** Administrator; sofern eingerichtet zusätzlich Shop-Manager für Produkt- und Bestellpflege

## Zweck und Zuständigkeiten

Dieses Handbuch beschreibt die sichere Pflege des live ausgelieferten Shops. **Produktdaten gehören in WooCommerce.** Die Struktur von Shoparchiv, Produktdetail und Warenkorb liegt im versionierten Block-Theme und wird nicht im laufenden Betrieb durch CSS-Einfügungen oder das Auflösen geschützter Blöcke verändert.

| Aufgabe | Zuständige Rolle | Bereich im Backend |
|---|---|---|
| Produkte, Bilder, Preise und Bestand pflegen | Administrator oder eingerichteter Shop-Manager | **Produkte** |
| Kategorien, Marken und Attribute pflegen | Administrator oder eingerichteter Shop-Manager | **Produkte → Kategorien / Marken / Attribute** |
| Lieferzeiten und weitere Produktzusätze pflegen | Administrator oder eingerichteter Shop-Manager | **Produkte → Lieferzeiten / Einheiten / Hersteller / Preishinweise** |
| Bestellungen bearbeiten | Administrator oder eingerichteter Shop-Manager | **WooCommerce → Bestellungen** |
| Navigation und globale Website-Bereiche pflegen | Administrator nach Freigabe | **Design → Editor** |
| Zahlungen, Versand, Steuern, Plugins und Nutzer ändern | Ausschließlich Administrator beziehungsweise fachlich benannte Verantwortung | **WooCommerce → Einstellungen**, **Zahlungen**, **Plugins**, **Benutzer** |
| Shoplayout oder Theme-Dateien ändern | Technische Betreuung | Versioniertes Repository und kontrolliertes Theme-Deployment |

## Sicher arbeiten

Vor größeren Änderungen ist ein aktuelles Hostinger-Backup von Dateien und Datenbank anzulegen. Ein Produkt zunächst als Entwurf oder in der Vorschau prüfen. Personenbezogene Kunden-, Zahlungs- oder Bestelldaten dürfen nicht in Seiteninhalte, Medienbeschreibungen oder öffentliche Notizen kopiert werden.

Die Live-Templates `archive-product.html`, `single-product.html` und `page-cart.html` sowie `functions.php`, `style.css` und `assets/css/theme.css` werden nicht direkt als redaktioneller Inhalt gepflegt. Technische Änderungen benötigen eine neue Theme-Version, eine dokumentierte Dateiübertragung, einen LiteSpeed-Cache-Purge und eine erneute Gastmodusprüfung.

## Produkte pflegen

### Bestehendes Produkt bearbeiten

1. **Produkte → Alle Produkte** öffnen und das Produkt auswählen.
2. Titel, Kurzbeschreibung und Langbeschreibung inhaltlich prüfen.
3. Unter **Produktdaten** Preis, gegebenenfalls Angebotspreis, Bestand, Versandwerte und weitere produktspezifische Angaben kontrollieren.
4. Hauptbild und Produktgalerie aktualisieren. Nicht dekorative Bilder erhalten einen aussagekräftigen Alternativtext.
5. Kategorien, Marken, Attribute, Lieferzeit, Einheit, Hersteller und Preishinweise nur verwenden, wenn die Angaben fachlich bestätigt sind.
6. Die Vorschau öffnen und Produktdetail, Shopkarte sowie Mobilansicht prüfen.
7. Erst danach aktualisieren oder veröffentlichen.

### Neues Produkt anlegen

| Pflichtbereich | Prüffrage vor Veröffentlichung |
|---|---|
| Titel und Beschreibung | Sind Produktart, Holz, Maße, Oberfläche und Besonderheiten verständlich beschrieben? |
| Preis | Ist der Endpreis fachlich bestätigt und passt der Preishinweis? |
| Bestand | Ist klar, ob es sich um ein Einzelstück handelt und darf ein Rückstand entstehen? |
| Versand | Sind Gewicht, Maße, Lieferzeit und Versandfähigkeit korrekt? |
| Bilder | Sind Hauptbild und Galerie scharf, konsistent zugeschnitten und mit sinnvollen Alt-Texten versehen? |
| Taxonomien | Sind Kategorie, Marke und relevante Attribute korrekt zugeordnet? |
| Sichtbarkeit | Erscheint das Produkt im vorgesehenen Katalogkontext und nicht versehentlich als privat oder verborgen? |

Die sieben bei der Abnahme vorhandenen Produktkarten stammen direkt aus WooCommerce. Deshalb dürfen Produkttitel, Preise oder Bilder nicht zusätzlich im Shop-Template als statische Kopien angelegt werden.

## Produktbilder und Medien

Aussagekräftige Dateinamen verwenden, Motive vor dem Upload passend zuschneiden und unnötig große Originaldateien vermeiden. Das Hauptbild muss das Produkt eindeutig zeigen; ergänzende Ansichten gehören in die Produktgalerie. Nach einem Bildwechsel sowohl die Shopkarte als auch die Galerie auf Desktop und Mobil kontrollieren.

| Bildtyp | Pflegeort | Kontrolle |
|---|---|---|
| Produkt-Hauptbild | Produkt bearbeiten → Produktbild | Zuschnitt in Shopkarte und Produktdetail |
| Produktgalerie | Produkt bearbeiten → Produktgalerie | Reihenfolge, Zoomdarstellung und Mobilstapel |
| Allgemeine Medien | Medien → Mediathek | Dateiname, Alternativtext und ungenutzte Dubletten |

## Kategorien, Filter und Zusatzangaben

Die Shopfilter beziehen ihre Begriffe aus den WooCommerce-Produktzuordnungen. Neue Kategorien, Marken oder Attribute daher nur anlegen, wenn sie dauerhaft gebraucht werden. Schreibvarianten und Dubletten vermeiden. Nach Änderungen an Taxonomien den Shop im Gastmodus öffnen und prüfen, ob Filter, Trefferzahl und Produktkarten weiterhin sinnvoll zusammenspielen.

## Bestellungen

Bestellstatus nur entsprechend dem tatsächlichen Bearbeitungsstand ändern. Interne Notizen und kundenbezogene Notizen unterscheiden. Eine Bestellung bei unklarem Zahlungsstatus nicht manuell als bezahlt markieren, bevor der Zahlungsanbieter geprüft wurde. Rückerstattungen und Stornos nur nach dem intern freigegebenen Prozess ausführen.

> Die Abnahme vom 30. Juli 2026 hat keine Bestellung, Zahlung, Versandberechnung oder Transaktions-E-Mail ausgelöst. Vor produktiver Nutzung beziehungsweise nach Änderungen an diesen Bereichen ist eine vollständige Testbestellung im vorgesehenen Zahlungs-Testmodus erforderlich.

## Wiederkehrende Aufgaben

| Intervall | Aufgabe | Verantwortlich |
|---|---|---|
| Laufend | Produktdaten, Preise, Bestand und Bestellungen aktuell halten | Shop-Verantwortung |
| Wöchentlich | Bestellhinweise, Lagerwarnungen und E-Mail-Zustellung kontrollieren | Shop-Verantwortung |
| Monatlich | Updates, Nutzerkonten, Backupstatus und Fehlerprotokolle prüfen | Technischer Administrator |
| Vor Aktionen | Angebotspreise, Laufzeiten, Bestand, Shopkarte und Mobilansicht testen | Shop-Verantwortung |
| Nach Theme-Update | LiteSpeed-Seitencache leeren und Shop, Produktdetail sowie Warenkorb als Gast prüfen | Technischer Administrator |

## Häufige Probleme

| Problem | Erste Prüfung | Sichere Maßnahme |
|---|---|---|
| Änderung erscheint nicht | Veröffentlichungsstatus, Vorschau und Browsercache prüfen | Als technischer Administrator **LiteSpeed Cache → Toolbox → Purge All** verwenden |
| Produkt fehlt im Shop | Status, Katalogsichtbarkeit, Bestand, Kategorie und Preis prüfen | Produkt als Entwurf sichern und Angaben vervollständigen |
| Bild wirkt falsch zugeschnitten | Hauptbild, Galeriereihenfolge und Quelldatei prüfen | Passend zugeschnittenes Bild ersetzen; Theme-CSS nicht spontan ändern |
| Filter liefert unerwartete Ergebnisse | Kategorien, Marken und Attribute des Produkts prüfen | Falsche oder doppelte Zuordnungen korrigieren |
| Layout wirkt beschädigt | Letzte Produkt- oder Editoränderung eingrenzen | Änderung zurücknehmen; keine Blocksperre lösen; technische Betreuung informieren |
| Zahlung oder Bestellung ist unklar | Bestellnotizen und Zahlungsstatus prüfen | Nicht mehrfach auslösen und nicht manuell als bezahlt markieren |
| E-Mail fehlt | Bestellnotizen und Zustellprotokoll prüfen | Technische Betreuung einschalten; Nachricht nicht unkontrolliert mehrfach senden |

## Projektspezifische Pflegeorte

Die verbindliche Zuordnung sämtlicher sichtbarer Shopkomponenten steht in `docs/SHOP-PFLEGEMATRIX.md`. Der technische Live- und Prüfstatus steht in `docs/SHOP-ABNAHME-2026-07-30.md`; Backup-, Update- und Rollbackschritte stehen in `WORDPRESS-BEREITSTELLUNG.md`.
