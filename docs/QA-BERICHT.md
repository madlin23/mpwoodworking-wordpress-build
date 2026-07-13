# MP Woodworking – Qualitätsbericht

**Prüfstand:** 13. Juli 2026

**Zielinstallation:** [springgreen-chough-629931.hostingersite.com][1]

**Aktiver Stand:** Theme `mpwoodworking-blocks` 1.0.2, Core-Plugin `mpwoodworking-core` 1.0.1

## Gesamtergebnis

Die WordPress-Implementierung ist **technisch funktionsfähig und live installiert**, aber bewusst noch nicht für den öffentlichen Verkauf freigegeben. Das aktive Blank-Block-Theme, das getrennte Core-Plugin, die kuratierte Navigation, saubere Permalinks, vier WooCommerce-Produkte, drei Projekte, vier Holzarten sowie die Projekt-Produkt-Beziehungen wurden auf der Zielinstallation verifiziert. Der WooCommerce-Modus **„Coming soon“** bleibt aktiv, bis Originalmedien, vollständige Rechtstexte und die betriebliche Shopkonfiguration vorliegen.

Die öffentliche Startseite darf weiterhin als Marken- und Portfolio-Vorschau erscheinen. Theme 1.0.2 ersetzt dort Kaufsteuerungen für nicht berechtigte Besucher durch **„Shop bald verfügbar“** und blockiert zusätzlich manipulierte direkte `add-to-cart`-Aufrufe. Ein unauthentifizierter Test erzeugte weder Warenkorb- noch WooCommerce-Sitzungscookies.

| Live-Prüfbereich | Ergebnis | Verifizierter Stand |
|---|---:|---|
| Theme und Plugin | Bestanden | `mpwoodworking-blocks` 1.0.2 aktiv; `mpwoodworking-core` 1.0.1 aktiv |
| WordPress und WooCommerce | Bestanden | WordPress 7.0.1; WooCommerce 10.9.4 |
| Marken- und Systemeinstellungen | Bestanden | Titel „MP Woodworking“, Untertitel und Zeitzone `Europe/Berlin` gespeichert |
| Navigation | Bestanden | Atelier, Shop, Projekte, Holzarten und Kontakt; rechtliche Ziele im Footer |
| URL-Struktur | Bestanden | `/%postname%/`, Produktbasis `produkt/`, sprechende Projekt- und Produkt-Slugs |
| Produktkatalog | Bestanden | Vier veröffentlichte Produkte mit SKU, EUR-Preis, Bestand, Kategorien und Unikatregeln |
| Projekte | Bestanden | Drei veröffentlichte Projekte mit Holzart, Jahr, Dauer, Maßen, Ort und Produktbeziehungen |
| Holzarten | Bestanden | Eibe, Walnuss, Zwetschge und Eiche veröffentlicht |
| Währung und Region | Bestanden | EUR im deutschen Zahlenformat; WooCommerce-Basisland Deutschland |
| Kontakt | Bestanden | Direkte E-Mail-Anfrage, vorbelegter Betreff und Datenschutzhinweis; kein öffentlich sichtbarer Redaktionsplatzhalter |
| Shop-Schutz | Bestanden | Shop- und Produktseiten geschützt; Startseiten-Kaufbuttons deaktiviert; direkte Kaufparameter wirkungslos |
| Responsive Darstellung | Bestanden | Mobile Prüfung bei 390 px ohne sichtbaren horizontalen Überlauf |

## Technische und funktionale Prüfungen

Die Quellen wurden statisch und in einer frischen WordPress-/WooCommerce-Laufzeitumgebung geprüft. Anschließend erfolgte die Live-Prüfung der repräsentativen Archive und Einzelansichten auf der Zielinstallation.[1]

| Prüfbereich | Ergebnis | Nachweis |
|---|---:|---|
| PHP-Syntax | Bestanden | Sämtliche PHP-Dateien in Theme und Plugin ohne Syntaxfehler |
| `theme.json` | Bestanden | Gültiges JSON und mit WordPress-Block-Theme-Struktur kompatibel |
| Block-Markup | Bestanden | Templates, Template-Parts und Patterns ohne fehlerhafte Blockverschachtelung |
| Aktivierung und Updates | Bestanden | Frischinstallation sowie Live-Updates auf Plugin 1.0.1 und Theme 1.0.2 erfolgreich |
| Shoparchiv | Bestanden | Vier Produkte, EUR-Preise, Sortierung sowie Kategorie-, Preis- und Bestandsfilter |
| Produktdetail | Bestanden | Preis, SKU, Beschreibung, Unikatstatus, Kategorien und Schutzstatus korrekt |
| Projektarchiv und -detail | Bestanden | Drei Projekte; dynamische Metadaten und Produktverknüpfungen vollständig |
| Warenkorb und Checkout | Lokal bestanden | Native WooCommerce-Blöcke laden; Shop bleibt live bis zur Betriebskonfiguration geschützt |
| Unikatlogik | Bestanden | Serverseitige Begrenzung verhindert mehr als ein Exemplar eines markierten Unikats |
| Kontaktlösung | Bestanden | Datensparsame `mailto:`-Anfrage statt nicht konfiguriertem Formular |
| Cache | Bestanden | LiteSpeed-Seitencache nach Währungs- und Theme-Updates gezielt geleert |
| Öffentlicher Kaufversuch | Bestanden | Kein Redirect, kein Cart-Cookie und keine Erfolgsmeldung bei direktem `add-to-cart` im Coming-soon-Modus |
| Mobile Darstellung | Bestanden | 390 × 844 px und 390 × 2.200 px ohne sichtbare Layoutüberläufe |
| Zugangsdaten und Schlüssel | Bestanden | Keine Zugangsdaten, privaten Schlüssel oder Zahlungsdaten im versionierten Quellstand |

## Verbleibende Launchblocker

> **Die Shop-Sichtbarkeit darf nicht auf öffentlich gestellt werden, bevor alle kritischen Punkte durch den Betreiber beziehungsweise fachlich zuständige Stellen abgeschlossen und getestet wurden.**

| Priorität | Bereich | Offener Punkt | Erforderlicher Abschluss |
|---|---|---|---|
| Kritisch | Impressum | Anbieterkennzeichnung ist unvollständig | Betreiberangaben und Pflichtinformationen fachlich geprüft ergänzen |
| Kritisch | Datenschutz | Die veröffentlichte Datenschutzerklärung enthält noch keinen belastbaren Inhalt | Datenschutzinformationen einschließlich Hosting, WooCommerce, Kontakt und Betroffenenrechten fachlich prüfen und veröffentlichen |
| Kritisch | AGB und Verbraucherinformationen | Die veröffentlichte AGB-Seite enthält noch keinen belastbaren Inhalt | AGB, Widerruf, Rückgabe und Verbraucherinformationen fachlich prüfen und veröffentlichen |
| Kritisch | Originalmedien | Produkt-, Projekt-, Hero- und Atelierbilder fehlen; WooCommerce zeigt Platzhalter | Freigegebene Originalfotografie hochladen, zuweisen, beschriften und responsive prüfen |
| Kritisch | Shopbetrieb | Steuern, Versandzonen, Zahlungsarten und vollständige Geschäftsadresse sind nicht abschließend konfiguriert | Reale Unternehmens- und Versanddaten pflegen; mindestens eine Zahlungsart im Testmodus konfigurieren |
| Kritisch | Testbestellung | Kein vollständiger Live-Zielfluss mit finaler Shopkonfiguration ausgeführt | Testbestellung von Produkt bis Bestell-E-Mail, Zahlung, Steuer und Versand abschließen |
| Hoch | E-Mail-Betrieb | Absender, Empfänger und Zustellbarkeit der WooCommerce-E-Mails sind nicht bestätigt | Domain-E-Mail und Transaktions-E-Mails mit realem Postfach testen |
| Hoch | Produktionsdomain | Die Website läuft weiterhin auf der technischen Hostinger-Domain | Gewünschte Produktionsdomain, HTTPS, Redirects und Search-Engine-Sichtbarkeit vor Launch abstimmen |
| Niedrig | Wartung | Für Hostinger Reach war ein Plugin-Update verfügbar | Update nach Backup und getrenntem Regressionstest einspielen |

Rechtliche oder kaufmännische Angaben wurden bewusst **nicht erfunden**. Die aktuelle Shop-Sperre ist deshalb Teil des geprüften Sicherheitszustands und kein Fehler.

## Prüfscreenshots

Die folgenden Repository-Dateien dokumentieren die lokale reproduzierbare Laufzeitprüfung. Die zusätzlichen mobilen Live-Aufnahmen verbleiben im Übergabepaket, da sie keine Produktionsmedien sind.

| Ansicht | Repository-Datei |
|---|---|
| Startseite | `docs/qa-screenshots/01-startseite.webp` |
| Shoparchiv | `docs/qa-screenshots/02-shop.webp` |
| Produktdetail | `docs/qa-screenshots/03-produkt.webp` |
| Projektansicht | `docs/qa-screenshots/04-projekt.webp` |
| Warenkorb | `docs/qa-screenshots/05-warenkorb.webp` |
| Checkout | `docs/qa-screenshots/06-checkout.webp` |

## Referenzen

[1]: https://springgreen-chough-629931.hostingersite.com/ "MP-Woodworking-Zielinstallation"
[2]: https://developer.woocommerce.com/docs/theming/block-theme-development/theming-woo-blocks/ "WooCommerce Developer Docs – Theming for Woo blocks"
[3]: https://developer.wordpress.org/themes/core-concepts/theme-structure/ "WordPress Theme Handbook – Theme Structure"
