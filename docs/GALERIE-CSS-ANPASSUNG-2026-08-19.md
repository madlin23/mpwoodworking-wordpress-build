# Galerie-CSS-Anpassung – 19. August 2026

## Abgrenzung

Der Auftrag beschränkt sich auf den Bildrasterbereich **unterhalb** des bestehenden Header- und Hero-Bereichs der Seite `/galerie/`. Header, Navigation, Hero, Kennzahlen, Scroll-Hinweis, CTA und Footer werden nicht verändert.

## Verifizierter DOM-Anker

Die öffentliche Galerie verwendet den folgenden Blockaufbau:

```text
.wp-block-group.alignfull.mpw-gal-page
  └── ul.filebird-block-filebird-gallery.layout-grid.columns-4.is-cropped.wp-block-filebird-block-filebird-gallery
        └── li.blocks-gallery-item
              └── figure > a > img
```

Die neuen Regeln in `assets/css/source-match.css` sind ausschließlich auf `.mpw-gal-page .filebird-block-filebird-gallery` und dessen Galerieelemente begrenzt. Dadurch greifen sie nicht in andere Bildraster, den Shop, Projekte oder Header-/Hero-Komponenten ein.

## Geänderte Wirkung

Das bisher uniforme Raster wird als asymmetrisches, dichtes 12-Spalten-Portfolio ausgegeben. Ausgewählte Bilder erhalten mehr Fläche; Hochformate und breite Arbeiten bilden einen klaren Rhythmus. Ein sehr zurückhaltender dunkler Verlauf verbessert die Bildtiefe. Hover und Tastaturfokus heben Details leicht hervor, ohne zusätzliche Inhalte oder JavaScript einzuführen.

Für Tablet und Mobil werden die Rasterregeln auf sechs beziehungsweise zwei Spalten reduziert. Die Galerie bleibt damit ohne horizontalen Überlauf bedienbar. Eine `prefers-reduced-motion`-Regel reduziert die optionalen Übergänge.

## Visuelle CSS-Prüfung

Die lokale Prüfung wurde mit dem tatsächlichen FileBird-Markup und den Produktionsbild-URLs durchgeführt. Das neue Raster wird korrekt aufgebaut: ein großflächiger Leitstein links, ein hochformatiger Werkstatt-/Prozessstein daneben und eine schmale Detailspalte schaffen den gewünschten kuratierten Bildrhythmus. Die Kachelabstände, Bildausschnitte und der dunkle Rahmenbereich sind sichtbar; es treten im geprüften Desktop-Ausschnitt keine Überläufe auf.

Die CSS-Regeln sind ausschließlich durch den Seitenanker `.mpw-gal-page` begrenzt. Die unveränderten Header- und Hero-Bereiche sind deshalb nicht Teil des CSS-Eingriffs.

## Produktionsumsetzung

Die endgültige CSS-Anpassung wurde direkt in `assets/css/source-match.css` des aktiven Themes gespeichert und nach jeder Änderung über **LiteSpeed Purge All – LSCache** neu ausgeliefert. Die Auslieferung wurde danach anhand der öffentlichen CSS-Datei verifiziert.

| Prüfaspekt | Ergebnis |
|---|---|
| Header und Navigation | Unverändert |
| Hero-Bereich | Unverändert; die finale Regel hebt die übergeordnete Container-Padding explizit wieder auf |
| Galerie | Asymmetrisches, dichtes 12-Spalten-Raster auf Desktop mit zwei großflächigen Leitmotiven und unterschiedlichen Detailformaten |
| Bildinteraktion | Zurückhaltende Vergrößerung, Kontrast- und Sättigungsanpassung bei Hover/Fokus |
| Tastaturzugänglichkeit | Sichtbarer Fokusrahmen auf Bildlinks |
| Responsive Regeln | Sechs Spalten bis 900 px, zweispaltiges Raster bis 560 px |
| Cache | Normaler LiteSpeed-Seitencache geleert |

Die Produktions-CSS vor und nach der Anpassung liegen als Rückfallkopien unter `backups/`. Der direkte mobile Headless-Prüfaufruf wurde durch eine vorgeschaltete Browserprüfung geblockt; die mobile Rasterregel selbst ist gezielt auf 390 px ausgelegt und der Desktop-Livecheck wurde visuell bestanden.

## Versionsstand

Die lokale Theme-Quelle wurde mit Commit `1cca101` unter dem Titel `style: refine gallery layout without changing hero` in den Branch `main` übertragen. Der finale Livecheck bestätigte den unveränderten Header und Hero sowie das neue asymmetrische Bildraster unterhalb des Hero-Bereichs.

## Grüner Bilderrahmen

Auf Wunsch wurde ein **2 px starker grüner Rahmen** (`#12a852`) ausschließlich an den 21 Galeriekacheln ergänzt. Bei Hover oder Tastaturfokus wird der Rahmen auf ein helleres Grün (`#52d67d`) angehoben. Die Umsetzung verwendet `box-sizing: border-box`, sodass sich weder Rastermaße noch Bildausschnitte verschieben. Der öffentliche Livecheck bestätigte einheitlich `2px rgb(18, 168, 82)` für alle Galeriekacheln; Header und Hero sind weiterhin vorhanden und unverändert.
