# Design-Brainstorming für MP Woodworking

Dieses Dokument entwirft drei eigenständige gestalterische Ansätze für den Neuaufbau der Website von **MP Woodworking** (Marco Paul, Berlin-Köpenick). Jeder Ansatz verfolgt eine eigene Designphilosophie, Farbwelt und typografische Hierarchie, um dem Charakter von edlem Massivholz und echtem Handwerk gerecht zu werden.

---

<response>
<text>
## Ansatz 1: "Warm Minimalist Atelier" (Wabi-Sabi & Premium Craft)

### Design Movement
**Wabi-Sabi-Ästhetik gepaart mit modernem Premium-Minimalismus**. Dieser Ansatz feiert die Schönheit des Unperfekten, die natürliche Textur von Holzmaserungen und die Ruhe eines aufgeräumten Ateliers. Er bricht mit dem typischen, lauten E-Commerce-Raster und setzt auf großzügigen Leerraum (Whitespace), asymmetrische Kompositionsraster und organische Formen.

### Core Principles
1. **Materiality First**: Jedes Element lenkt das Auge auf die Haptik und Struktur des Holzes.
2. **Atmospheric Space**: Whitespace wird als aktives Gestaltungsmittel genutzt, um den Unikaten "Raum zum Atmen" zu geben.
3. **Asymmetric Rhythm**: Die Layouts wirken handgezeichnet und atmen durch ungleiche Spalten und organische Überlagerungen.
4. **Typographic Contrast**: Ein Wechselspiel aus einer charakterstarken Serifenschrift für Geschichten und einer funktionalen, feinen Sans-Serif für Maße und Fakten.

### Color Philosophy
Die Farbpalette basiert auf den natürlichen Nuancen von Holz, Werkstattstaub und Leinen. Sie vermittelt Wärme, Ruhe und handwerkliche Tiefe, ohne altbacken zu wirken.
- **Hintergrund**: Warmes Off-White / Sand (`#FBF9F6`) für eine natürliche, weiche Atmosphäre.
- **Primärton**: Tiefes Walnuss-Schwarzbraun (`#1E1611`) für maximalen, edlen Kontrast bei Texten und Rahmen.
- **Sekundärton**: Sanftes Eichen-Beige (`#D4C5B9`) für feine Linien, Hintergründe und sekundäre Flächen.
- **Akzentton**: Gedämpftes Werkstatt-Moosgrün (`#4A5343`) für dezente Akzente, Badges oder Interaktionen.

### Layout Paradigm
Asymmetrische Raster, die sich an klassischen Ausstellungs-Katalogen orientieren. Textblöcke und Bilder überlagern sich leicht. Breite Linien (`0.5px` bis `1px` in Eichen-Beige) trennen die Sektionen wie feine Fugen im Möbelbau. Es gibt keine standardmäßigen zentrierten Boxen, sondern linksbündige, elegante Spaltenstrukturen.

### Signature Elements
- **"Die Fuge"**: Sehr feine, helle Trennlinien, die an handwerkliche Holzverbindungen erinnern.
- **Material-Badges**: Kleine, feine Badges mit der Holzart (z. B. "Eibe Maser" oder "Pflaumenholz") in dezenter Serifenschrift.
- **Handwerkliche Signatur**: Eine feine, dezente Vektorgrafik des Logos oder Marco Pauls Signatur als Gütesiegel im Footer und bei Projekt-Abschlüssen.

### Interaction Philosophy
Fließende, extrem ruhige Übergänge. Hover-Effekte auf Produktkarten skalieren das Bild nicht hart, sondern blenden Details (wie die Rückseite oder die Holzfaser im Makro) sanft ein. Buttons haben feine Linien, die sich bei Interaktion elegant füllen.

### Animation
- **Transitions**: Sanftes Einblenden von Sektionen mit einem weichen Ease-Out-Verhalten (`cubic-bezier(0.23, 1, 0.32, 1)` über `400ms`).
- **Scroll-Reveal**: Asymmetrisches, leicht zeitversetztes Aufsteigen von Text und Bild (Staggered Entrance), um den handwerklichen Rhythmus zu betonen.
- **Hover-Active**: Mikro-Skalierung bei Klick auf Buttons (`scale(0.98)`), die sofortiges haptisches Feedback gibt.

### Typography System
- **Headlines (H1, H2, H3)**: *Playfair Display* oder *Cormorant Garamond* (serif) – elegant, charakterstark, mit großzügigem Letter-Spacing bei Großbuchstaben.
- **Body & UI**: *Plus Jakarta Sans* oder *Satoshi* (sans-serif) – hochgradig lesbar, modern, in feinen Schnitten (Light und Regular), um dem Text Leichtigkeit zu verleihen.
</text>
<probability>0.08</probability>
</response>

---

<response>
<text>
## Ansatz 2: "The Industrial Joinery" (Robust, Urban & Konstruktiv)

### Design Movement
**Industrial Bauhaus & Modernist Carpentry**. Dieser Ansatz betont die Konstruktion, das Werkzeug und die Werkstatt selbst. Er ist urban, geradlinig und funktional. Inspiriert von Berliner Loft-Architektur und technischer Präzision, nutzt er starke Kontraste, klare Linien, feste Raster und technische Details wie Millimeter-Angaben als Gestaltungselement.

### Core Principles
1. **Constructive Logic**: Das Layout zeigt seine Struktur offen – ähnlich wie eine sichtbare Holzverbindung.
2. **Technical Precision**: Maße, SKUs und Holzmerkmale werden wie technische Zeichnungen prominent inszeniert.
3. **High Contrast**: Harte Schnitte und klare Abgrenzungen statt sanfter Verläufe.
4. **Authentic Rawness**: Bilder zeigen die Werkstatt ungeschönt – mit Spänen, Maschinen und rohen Holzbohlen.

### Color Philosophy
Kontrastreich, maskulin und klar strukturiert. Erinnert an Gusseisen, Stahl, Hobelspäne und Kreidezeichnungen.
- **Hintergrund**: Klares, helles Werkstatt-Grau (`#F2F2F2`) oder reines Weiß (`#FFFFFF`).
- **Primärton**: Eisen-Schwarz (`#111111`) für Texte, fette Rahmen und konstruktive Linien.
- **Sekundärton**: Rost-Orange / Kupfer (`#D35400`) für CTA-Elemente, Fokus-Punkte und technische Markierungen.
- **Akzentton**: Schiefer-Blaugrau (`#34495E`) für technische Tabellen, Filterhintergründe und sekundäre Informationen.

### Layout Paradigm
Ein strenges, rasterbasiertes Layout, das an technische Konstruktionszeichnungen erinnert. Sektionen sind durch fette, schwarze Linien (`2px`) klar getrennt. Spaltenbreiten orientieren sich an festen Rastern. Tabellarische Darstellungen dominieren bei Produkt- und Projektdaten.

### Signature Elements
- **Konstruktions-Linien**: Sichtbare Raster-Führungen und Rahmen um alle Module.
- **Maßband-Skala**: Eine feine, dekorative Millimeter-Skala am Rand von Sektionen oder Produktkarten als Hommage an das präzise Messen.
- **Stempel-Badge**: Ein kreisförmiges "Handmade in Berlin-Köpenick"-Badge, das wie ein echter Werkstattstempel wirkt.

### Interaction Philosophy
Direkt, haptisch und mechanisch. Buttons wirken wie physische Schalter (beim Hovern verschieben sie sich leicht nach unten rechts und werfen einen harten Schatten). Filter reagieren ohne Verzögerung.

### Animation
- **Transitions**: Schnelle, mechanische Übergänge (`150ms` bis `200ms` mit einem linearen oder leicht federnden Ease-Out).
- **Hard Reveal**: Kein sanftes Fading, sondern schnelles Aufklappen (Slide-Down) von Akkordeons und Menüs.
- **Haptic Buttons**: Knallhartes haptisches Feedback bei Klick – der Button senkt sich physisch ab (`translate-x-[2px] translate-y-[2px] shadow-none`).

### Typography System
- **Headlines (H1, H2, H3)**: *Space Grotesk* oder *DM Sans* (sans-serif, bold/medium) – geometrisch, modern, technisch, fast architektonisch.
- **Body & UI**: *JetBrains Mono* oder *Space Mono* (monospace) für Maße, Tabellen und technische Daten; *Inter* für längere Fließtexte zur Sicherung der Lesbarkeit.
</text>
<probability>0.05</probability>
</response>

---

<response>
<text>
## Ansatz 3: "The Forest Legacy" (Deep Nature & Heritage)

### Design Movement
**Organic Heritage & Editorial Storytelling**. Dieser Ansatz verbindet die tiefe Natur des Waldes mit klassischem, editorialem Buchdesign. Er erzählt die Geschichte des Baumes vor seiner Verarbeitung. Es ist ein sehr edler, fast akademischer Stil, der an hochwertige Fachbücher, Naturdokumentationen und traditionelle Forstkultur erinnert.

### Core Principles
1. **Narrative Focus**: Jedes Produkt hat eine Geschichte – vom Wald über den Stamm bis zum fertigen Unikat.
2. **Organic Flow**: Weiche Übergänge, geschwungene Linien und florale/organische Details.
3. **Heritage Feeling**: Vermittlung von Generationenwissen, Nachhaltigkeit und tiefem Respekt vor dem Rohstoff Holz.
4. **Visual Depth**: Nutzung von Tiefenunschärfe, Waldlicht-Atmosphäre und dunklen, satten Farbflächen.

### Color Philosophy
Satt, tief und waldig. Erinnert an schattige Nadelwälder, feuchtes Moos, Baumrinde und das warme Licht, das durch das Blätterdach bricht.
- **Hintergrund**: Tiefes Waldgrün (`#121F17`) für atmosphärische Sektionen, abgewechselt mit feinstem Buchseiten-Creme (`#F9F6F0`) für Lesebereiche.
- **Primärton**: Rinden-Dunkelbraun (`#2A1A12`) für Texte auf hellem Grund.
- **Sekundärton**: Moos-Grün (`#2E4A3F`) für strukturgebende Elemente.
- **Akzentton**: Warmes Bernstein-Gold (`#D4A373`) für edle Highlights, Zitate und besondere Icons.

### Layout Paradigm
Klassisches Buch- und Magazinlayout. Großzügige, zentrierte Textspalten für Geschichten, unterbrochen von ganzseitigen, stimmungsvollen Naturbildern. Produktkarten sind wie Buchcover gestaltet – mit feinen Rahmen und edler Typografie.

### Signature Elements
- **Blatt- & Baumringe**: Subtile, organische Hintergrundgrafiken (z. B. feine Vektoren von Jahresringen), die die Herkunft des Holzes symbolisieren.
- **Initialen & Zitate**: Große, kunstvolle Anfangsbuchstaben (Initialen) bei Textabschnitten und prominent platzierte Zitate über die Seele des Holzes.
- **Klassische Exlibris-Badges**: Ein feines heraldisches Siegel-Symbol für MP Woodworking.

### Interaction Philosophy
Sehr weich, fast schwebend. Bilder reagieren auf Mausbewegungen mit einem subtilen Parallax-Effekt. Übergänge fühlen sich an wie das langsame Umblättern einer hochwertigen Buchseite.

### Animation
- **Transitions**: Sehr weiche, langsame Überblenden (`500ms` bis `800ms` mit einem tiefen, eleganten Ease-In-Out).
- **Parallax & Zoom**: Subtiles Schweben von Hintergrundbildern beim Scrollen.
- **Liquid Hover**: Hover-Zustände fließen weich ineinander über, um die organische Natur des Waldes zu spiegeln.

### Typography System
- **Headlines (H1, H2, H3)**: *Lora* oder *Merriweather* (serif, italic/regular) – klassisch, literarisch, warm und tiefgründig.
- **Body & UI**: *Source Serif 4* für erzählende Texte; *Albert Sans* oder *Satoshi* (sans-serif) in kleinen Größen für funktionale UI-Elemente.
</text>
<probability>0.07</probability>
</response>

---

# Gewählte Design-Entscheidung

Ich entscheide mich für **Ansatz 1: "Warm Minimalist Atelier" (Wabi-Sabi & Premium Craft)**. 

### Begründung
Dieser Ansatz passt perfekt zu **MP Woodworking**. Marco Paul fertigt handgefertigte Unikate aus edlen Hölzern (Eibe, Eiche, Pflaume, Walnuss) in Berlin-Köpenick. Seine Stücke sind charakterstark und leben von ihrer Haptik, Maserung und reduzierten Form. Ein lautes, technisches Industrial-Design (Ansatz 2) würde die feine Seele der Drechselobjekte und Gewürzmühlen übertönen. Ein zu schweres Wald-Heritage-Design (Ansatz 3) wirkt schnell überladen und beeinträchtigt die moderne E-Commerce-Usability.

Das **Warm Minimalist Atelier** bietet die perfekte Balance:
- Es rückt die **Produkte und das Material** durch großzügigen Whitespace und asymmetrische Kompositionen kompromisslos in den Vordergrund.
- Die Farbpalette aus **Warm Off-White, Walnuss-Schwarzbraun, Eichen-Beige und gedämpftem Moosgrün** spiegelt die natürliche Werkstattumgebung wider, wirkt aber gleichzeitig extrem hochwertig, modern und einladend.
- Die Typografie (edle Serifenschrift für Headlines, feine moderne Sans-Serif für UI) strahlt **Manufaktur-Qualität und zeitlose Eleganz** aus.
- Es lässt sich hervorragend in ein modernes WordPress-Block-Theme übersetzen, das für Redakteure leicht zu pflegen ist und gleichzeitig im Frontend wie maßgeschneidert wirkt.

Ich werde dieses Designsystem nun im React-Prototyp implementieren und die Design-Token in `client/src/index.css` verankern.
