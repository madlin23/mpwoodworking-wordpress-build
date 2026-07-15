# MP Woodworking – Qualitätsbericht

**Prüfstand:** 15. Juli 2026

**Zielinstallation:** [springgreen-chough-629931.hostingersite.com][1]

**Aktiver Theme-Stand:** `mpwoodworking-blocks` 1.1.2

## Gesamtergebnis

Die öffentliche WordPress-Website wurde inhaltlich und visuell überarbeitet. Das bisher ungeeignete Foto auf **Über mich** ist durch ein professionell zugeschnittenes, farblich optimiertes und für das Web komprimiertes Porträt von Marco Paul ersetzt. Die Hauptmenü-Seiten **Über mich**, **Produkte**, **Galerie**, **Videos** und **Kontakt** besitzen nun jeweils eigenständige, markengerechte Inhalte mit klarer Abschnittshierarchie, aussagekräftigen Handlungsaufforderungen und konsistentem Responsive Design.[1]

Die finale Live-Abnahme umfasst alle fünf überarbeiteten Seiten in zwei Zielansichten. Sämtliche **zehn Prüfungen wurden bestanden**. Der automatisierte Bericht verzeichnet keine JavaScript-Fehler, keine defekten Bilder, keine leeren Bildquellen und keinen horizontalen Überlauf. Die visuelle Endkontrolle bestätigt darüber hinaus konsistente Kopfbereiche, lesbare Inhaltseinstiege, saubere mobile Umbrüche sowie die korrekte Darstellung des Porträts und der fünf authentischen Galerieaufnahmen.

| Live-Prüfbereich | Ergebnis | Verifizierter Stand |
|---|---:|---|
| Über mich | Bestanden | Optimiertes Porträt, persönliche Vorstellung, Arbeitsweise und Qualitätsversprechen |
| Produkte | Bestanden | Drei Produktlinien, Material- und Pflegehinweise sowie Anfrageführung |
| Galerie | Bestanden | Fünf echte Werkstatt- und Produktaufnahmen mit individuellem Alternativtext |
| Videos | Bestanden | Inhaltliche Video-Roadmap, Themenformate und abonnierbare Kontaktführung |
| Kontakt | Bestanden | Klarer Anfrageprozess, Projektinformationen und direkter E-Mail-Einstieg |
| Desktop | Bestanden | Fünf Seiten bei 1440 × 900 Pixeln ohne offensichtliche Layoutfehler |
| Mobile | Bestanden | Fünf Seiten bei 390 × 844 Pixeln ohne horizontalen Überlauf |
| Bildintegrität | Bestanden | Keine leeren oder fehlgeschlagenen Bildquellen |
| Laufzeit | Bestanden | Keine erfassten JavaScript-Fehler in den zehn Prüfläufen |
| Navigation | Bestanden | Einheitliches Branding, Hauptmenü und aktive Seitenmarkierung |

## Fotoüberarbeitung

Das neue Porträt wurde aus dem bereitgestellten Original abgeleitet, auf das Seitenverhältnis **4:5** zugeschnitten, auf **1200 × 1500 Pixel** ausgegeben und als WebP komprimiert. Die Bearbeitung verbessert Belichtung, Kontrast und Schärfewirkung, ohne die Person oder den Werkstattkontext künstlich zu verändern. Auf Desktop steht das Bild ausgewogen neben der Vorstellung; auf Mobil nutzt es die verfügbare Breite ohne unvorteilhaften Anschnitt.

| Eigenschaft | Finaler Wert |
|---|---|
| Repository-Datei | `wordpress-content/media/marco-paul-about-portrait.webp` |
| Ausgabeformat | WebP |
| Abmessungen | 1200 × 1500 Pixel |
| Seitenverhältnis | 4:5 |
| WordPress-Medien-ID | 183 |
| Live-Einsatz | Seite „Über mich“ |

## Inhaltsumfang

Die neuen Seiteninhalte sind nicht als kurze Platzhalter, sondern als vollständige Block-Inhalte umgesetzt. Sie verwenden die bestehende visuelle Sprache aus dunklen Flächen, grünen Akzenten, kondensierten Überschriften, klaren Trennlinien und handwerklich ausgerichteter Bildsprache. Die versionierte Blockquelle liegt unter `wordpress-content/expanded-pages-blocks.json` und enthält auch die finale statische Galerie mit fünf verifizierten Medienkarten.

| Seite | Inhaltliche Schwerpunkte | Nutzerführung |
|---|---|---|
| Über mich | Marco Paul, Werkstattbezug, Werte, Arbeitsprozess | Projektanfrage und Galerie |
| Produkte | Schneidebretter, Wohnaccessoires, Kleinmöbel, Material und Pflege | Individuelle Produktanfrage |
| Galerie | Einzelstücke, Kollektionen, Gebrauchsobjekte, Fertigung und Finish | Inspiration und Kontakt |
| Videos | Werkstattprozesse, Materialwissen, Pflege und geplante Formate | Benachrichtigung per E-Mail |
| Kontakt | Anfragebriefing, Ablauf, Orientierung und Rückmeldung | Direkter E-Mail-Start |

## Reproduzierbare Live-Abnahme

Der automatisierte Prüflauf ist unter `qa/qa_content_photo_pages.py` versioniert. Er lädt jede Zielseite mit Cache-Busting, wiederholt seltene unvollständige Hostinger-Antworten automatisch und prüft Seitentitel, erwartete Inhaltsmarker, Bildquellen, Galerie-Medien, JavaScript-Fehler und horizontalen Überlauf. Die Kontaktbögen wurden aus den zehn unveränderten Prüfscreenshots mit `qa/build_qa_contact_sheets.py` erzeugt.

| Nachweis | Repository-Datei |
|---|---|
| Maschinenlesbarer Prüfbericht | `docs/qa-live-2026-07-15/content-photo-report.json` |
| Schriftliche visuelle Kontrolle | `docs/qa-live-2026-07-15/visual-final-review.md` |
| Desktop-Kontaktbogen | `docs/qa-live-2026-07-15/final-desktop-contact-sheet.png` |
| Mobile-Kontaktbogen | `docs/qa-live-2026-07-15/final-mobile-contact-sheet.png` |

## Abgrenzung zum Shop-Launch

> Die erfolgreiche Inhalts- und Designabnahme ersetzt keine rechtliche oder kaufmännische Freigabe eines öffentlichen WooCommerce-Verkaufs.

Der Shop-Schutz und die bisherigen Launch-Vorbehalte bleiben unverändert: Rechtstexte, reale Unternehmensangaben, Steuern, Versandzonen, Zahlungsarten, Transaktions-E-Mails und eine vollständige Testbestellung müssen vor einer öffentlichen Verkaufsfreigabe durch die jeweils verantwortlichen Stellen abgeschlossen werden. Für die hier beauftragte Überarbeitung von Foto und Hauptmenü-Inhalten bestehen hingegen **keine offenen Qualitätsfehler**.

## Referenzen

[1]: https://springgreen-chough-629931.hostingersite.com/ "MP-Woodworking-Zielinstallation"
[2]: https://github.com/madlin23/mpwoodworking-wordpress-build/releases/tag/v1.1.2 "MP Woodworking – Theme-Release v1.1.2"
