# MP Woodworking – WordPress-Bereitstellung und Übergabe

## Ziel und aktueller Stand

Diese Anleitung gilt für die WordPress-Installation unter [springgreen-chough-629931.hostingersite.com][1]. Die MP-Woodworking-Komponenten sind dort installiert und aktiv. Die öffentliche Shopoberfläche wurde am 30. Juli 2026 mit Theme-Version **1.1.12** abgenommen. Diese Oberflächenfreigabe ersetzt keine separate betriebliche Freigabe von Checkout, Zahlung, Versand, Steuern, Transaktions-E-Mails oder Rechtstexten.

| Komponente | Live-Version | Zweck |
|---|---:|---|
| `mpwoodworking-blocks` | 1.1.12 | Block-Theme mit Designsystem sowie live geprüftem Shoparchiv, Produktdetail und Warenkorb-Leerzustand |
| `mpwoodworking-core` | 1.0.1 | Projekte, Holzarten, REST-fähige Metadaten, dynamische Blöcke und WooCommerce-Unikatlogik |

Das Core-Plugin ist bewusst vom Theme getrennt. Projektdaten, Produktbeziehungen und Geschäftslogik bleiben dadurch auch bei einem späteren Theme-Wechsel erhalten. Das vorherige Hostinger-Theme und die WordPress-Standardthemes bleiben als Rückfalloption installiert.

## Verifizierter Live-Bestand

Die Website verwendet den Titel **„MP Woodworking“**, den Untertitel **„Holzobjekte und Möbelunikate aus Berlin“** und die Zeitzone `Europe/Berlin`. WordPress nutzt die Permalinkstruktur `/%postname%/`; WooCommerce-Produkte liegen unter `produkt/`. Die Navigation führt zu Atelier, Shop, Projekten, Holzarten und Kontakt. Rechtliche Seiten sind im Footer verlinkt.

| Inhalt | Verifizierter Bestand |
|---|---:|
| WooCommerce-Produkte im geprüften Shoparchiv | 7 |
| Projekte | 3 |
| Holzarten | 4 |
| Projekt-Produkt-Beziehungen | 2 |
| Shopwährung | EUR, deutsches Zahlenformat |
| WooCommerce-Basisland | Deutschland |
| Shop-Sichtbarkeit | Öffentlich erreichbar; vollständiger Kaufweg in dieser Abnahme nicht erneut getestet |

Die Kontaktseite verwendet eine direkte, datensparsame E-Mail-Anfrage an `hallo@mp-woodworking.de` mit vorbelegtem Betreff und Datenschutzhinweis. Vor Veröffentlichung ist zu bestätigen, dass dieses Postfach aktiv ist und zuverlässig empfangen wird.

## Sichere Aktualisierung von Theme und Plugin

Vor jeder Aktualisierung ist über Hostinger ein vollständiges Backup von Dateien und Datenbank anzulegen. Vorhandene Themes, Plugins, Produkte, Projekte und Rechtstextseiten dürfen nicht gelöscht werden.

1. Erzeugen beziehungsweise verwenden Sie das geprüfte ZIP-Paket der neuen Komponente. Das ZIP muss den Plugin- oder Theme-Ordner genau einmal als Stammverzeichnis enthalten.
2. Laden Sie Plugin-Updates unter **Plugins → Plugin hinzufügen → Plugin hochladen** und Theme-Updates unter **Design → Themes → Theme hinzufügen → Theme hochladen** hoch.
3. Prüfen Sie in der WordPress-Versionsgegenüberstellung sorgfältig den identischen Komponenten-Namen sowie die alte und neue Versionsnummer.
4. Führen Sie **„Installiertes durch Hochgeladenes ersetzen“** nur nach dieser Prüfung aus.
5. Verifizieren Sie anschließend die aktive Versionsnummer in der Plugin- oder Theme-Verwaltung.
6. Leeren Sie ausschließlich den normalen LiteSpeed-Seitencache über **LiteSpeed Cache → Toolbox → Purge All**. Datenbank-, Opcode- und vollständige Server-Cache-Funktionen sind dafür nicht erforderlich.
7. Prüfen Sie Startseite, Shop, eine repräsentative Produktdetailseite, Warenkorb, Projekte und Kontakt erneut. Bei betriebsrelevanten Änderungen zusätzlich den vollständigen Kaufweg im vorgesehenen Testmodus prüfen.

Ein Theme-Update darf die aktive Shop-Sichtbarkeit nicht verändern. Plugin-Updates dürfen keine vorhandenen Projekt- oder Produktdaten löschen.

## Noch erforderliche redaktionelle und betriebliche Pflege

> **Die öffentliche Shopoberfläche ist technisch abgenommen. Der vollständige Verkaufsbetrieb darf daraus nicht ohne separate Prüfung von Checkout, Zahlung, Versand, Steuern, E-Mail und Rechtstexten abgeleitet werden.**

| Bereich | Offene redaktionelle oder betriebliche Prüfung |
|---|---|
| Originalmedien | Werkstatt-, Hero-, Atelier-, Produkt- und Projektfotos hochladen; Alt-Texte, Zuschnitt und responsive Darstellung prüfen |
| Produkte | Bilder, finale Beschreibungen, Preise, Maße, Gewicht, Kategorien, Bestand und Lieferinformationen durch den Betreiber bestätigen |
| Projekte | Originalfotos ergänzen und alle veröffentlichten Angaben redaktionell abnehmen |
| Kontakt | Verfügbarkeit von `hallo@mp-woodworking.de` sowie Antwortprozess testen |
| Impressum | Vollständige Anbieterkennzeichnung mit realen Betreiberangaben fachlich geprüft veröffentlichen |
| Datenschutz | Belastbare Datenschutzerklärung für Hosting, WooCommerce, Kontakt und eingesetzte Dienste fachlich geprüft veröffentlichen |
| AGB und Verbraucherinformationen | AGB, Widerruf, Rückgabe und weitere Pflichtinformationen fachlich geprüft veröffentlichen |
| Geschäftsadresse | Reale Laden-/Unternehmensadresse in WooCommerce hinterlegen |
| Steuern | Steuerstatus und gegebenenfalls Kleinunternehmerregelung verbindlich klären und konfigurieren |
| Versand | Zonen, Methoden, Kosten, Liefergebiete und Lieferzeiten konfigurieren |
| Zahlungen | Mindestens eine Zahlungsart zunächst im Test- oder Sandboxmodus einrichten |
| E-Mails | Absenderdomain, Empfänger, Bestell-E-Mails und Zustellbarkeit testen |
| Produktionsdomain | Gewünschte Domain, HTTPS, Redirects und Suchmaschinen-Sichtbarkeit abstimmen |

Rechtliche, steuerliche, kaufmännische oder personenbezogene Angaben dürfen nicht aus Platzhaltern abgeleitet oder erfunden werden. Der detaillierte Status steht in `docs/QA-BERICHT.md`.

## Betriebsfreigabe des vollständigen Kaufwegs

| Schritt | Freigabekriterium |
|---:|---|
| 1 | Vollständiges Backup erstellt und Wiederherstellungspfad geprüft |
| 2 | Originalmedien zugewiesen; keine generischen Produkt- oder Projektplatzhalter mehr sichtbar |
| 3 | Impressum, Datenschutz, AGB, Widerruf und Rückgabe fachlich abgenommen |
| 4 | Geschäftsadresse, Steuerlogik, Versand und Zahlungsart vollständig konfiguriert |
| 5 | Transaktions-E-Mails mit realem Postfach erfolgreich getestet |
| 6 | Vollständige Testbestellung einschließlich Steuer, Versand, Zahlung und Bestell-E-Mail erfolgreich |
| 7 | Desktop- und Mobilprüfung von Startseite, Shop, Produkt, Warenkorb, Kasse, Kontakt und Rechtstexten bestanden |
| 8 | Betreiber erteilt ausdrückliche Freigabe für den vollständigen Verkaufsbetrieb |
| 9 | Konfiguration freigeben, LiteSpeed-Seitencache leeren und den vollständigen öffentlichen Kaufweg erneut prüfen |

## Rollback

Falls nach einem Update oder der späteren Freischaltung ein unerwarteter Fehler auftritt, ist zunächst der WooCommerce-Modus **„Coming soon“** wieder zu aktivieren. Danach kann unter **Design → Themes** das zuvor verwendete Hostinger-Theme aktiviert werden. Das Core-Plugin darf bei Bedarf deaktiviert werden; eine Deaktivierung löscht keine Projekt- oder Produktdaten. Anschließend ist der LiteSpeed-Seitencache zu leeren.

Wenn der Administrationsbereich nicht erreichbar ist oder Daten beschädigt erscheinen, ist die Hostinger-Sicherung von Dateien und Datenbank wiederherzustellen. Vor einem Rollback sollten keine weiteren Bestellungen angenommen werden.

## Qualitätsstatus

Das Shop-Redesign wurde als Theme-Version **1.1.12** bitgenau auf die Zielinstallation übertragen und nach jedem Versionsschritt per LiteSpeed-Cache-Purge aktualisiert. Ein isoliertes Gastprofil prüfte Shoparchiv, repräsentative Produktdetailseite und leeren Warenkorb jeweils bei 1440 × 900 und 390 × 844 Pixeln. Alle sechs Fälle bestanden; sieben reale Produktkarten, Bildintegrität, relevante Alt-Texte, Touch-Zielhöhen und das Fehlen horizontaler Überläufe wurden bestätigt. Warenkorbänderung, Checkout, Zahlung, Versand, Bestellung und E-Mail waren ausdrücklich nicht Bestandteil dieses Gasttests. Details stehen in `docs/SHOP-ABNAHME-2026-07-30.md`.

## Referenzen

[1]: https://springgreen-chough-629931.hostingersite.com/ "MP-Woodworking-Zielinstallation"
[2]: https://developer.woocommerce.com/docs/theming/block-theme-development/theming-woo-blocks/ "WooCommerce Developer Docs – Theming for Woo blocks"
[3]: https://developer.wordpress.org/themes/core-concepts/theme-structure/ "WordPress Theme Handbook – Theme Structure"
