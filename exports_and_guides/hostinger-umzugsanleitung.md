# MP Woodworking – Umzugsanleitung für Hostinger.de

Diese Anleitung beschreibt exakt, wie Sie das maßgeschneiderte Design, die WordPress-Themes und alle exportierten Inhalte auf Ihre echte WordPress-Website bei **Hostinger.de** (Ziel-URL: `https://lemonchiffon-salamander-303799.hostingersite.com/`) übertragen.

---

## 📋 Schritt 1: Vorbereitung im Hostinger hPanel

Bevor Sie mit der Einrichtung in WordPress beginnen, stellen Sie sicher, dass Ihre Hostinger-Instanz bereit ist.

1. Loggen Sie sich in Ihr **Hostinger hPanel** (auf hostinger.de) ein.
2. Gehen Sie zu **Websites** und wählen Sie Ihre Website `lemonchiffon-salamander-303799.hostingersite.com` aus.
3. Klicken Sie auf **WordPress verwalten** und stellen Sie sicher, dass:
   * Die PHP-Version auf mindestens **8.1** oder **8.2** eingestellt ist (empfohlen für maximale Performance und WooCommerce-Kompatibilität).
   * Ein **SSL-Zertifikat** aktiv ist (Hostinger installiert dieses in der Regel automatisch und kostenlos).

---

## 🛠️ Schritt 2: Installation der WordPress-Themes auf Hostinger

Sie haben die beiden Theme-Dateien erhalten:
* `mpwoodworking-custom-theme.zip` (Haupt-Theme)
* `mpwoodworking-child-theme.zip` (Child-Theme)

### So installieren Sie diese über Ihr WordPress-Backend auf Hostinger:
1. Rufen Sie Ihr WordPress-Dashboard auf (z.B. über das hPanel per Klick auf "Admin Panel" oder direkt über `https://lemonchiffon-salamander-303799.hostingersite.com/wp-admin`).
2. Navigieren Sie zu **Design > Themes**.
3. Klicken Sie oben auf **Theme hinzufügen** und dann auf **Theme hochladen**.
4. Wählen Sie die Datei `mpwoodworking-custom-theme.zip` aus und klicken Sie auf **Jetzt installieren**. (*Wichtig: Installieren, aber noch nicht aktivieren!*)
5. Gehen Sie zurück zur Theme-Übersicht, klicken Sie erneut auf **Theme hinzufügen > Theme hochladen** und wählen Sie die Datei `mpwoodworking-child-theme.zip` aus.
6. Klicken Sie nach der Installation des Child-Themes auf **Aktivieren**.

---

## 🔌 Schritt 3: Benötigte Plugins auf Hostinger installieren

Für den vollen Funktionsumfang installieren Sie nun folgende kostenfreie Plugins direkt über das WordPress-Backend (**Plugins > Installieren**):

1. **WooCommerce** (für den Shop, Warenkorb und die Kasse)
2. **Advanced Custom Fields (ACF)** (für die erweiterten Holz- und Projektdaten)
3. **WooCommerce PDF Invoices & Packing Slips** (für die edlen Rechnungs-PDFs)
4. **WP All Import** (kostenlos, für den automatischen Import der Produkte und Holzarten)

---

## 📥 Schritt 4: Produkte, Holzarten und Projekte importieren

Nutzen Sie die von mir erstellten und optimierten CSV-Dateien, um alle Inhalte in Sekundenschnelle auf Ihre Hostinger-Website zu importieren.

### 1. Produkte importieren (WooCommerce):
1. Gehen Sie in WordPress zu **Produkte > Alle Produkte**.
2. Klicken Sie oben auf **Importieren**.
3. Laden Sie die Datei `woocommerce_products_import.csv` hoch.
4. Klicken Sie auf **Weiter** und anschließend auf **Importer ausführen**. Alle Produkte sind sofort mit Preisen, Beschreibungen, Holz-Attributen und den hochauflösenden Bildern einsatzbereit!

### 2. Holzarten importieren (WP All Import):
1. Gehen Sie zu **All Import > New Import**.
2. Laden Sie die Datei `holzarten_export.csv` hoch.
3. Wählen Sie aus, dass Sie die Daten als **Beiträge (Posts)** importieren möchten.
4. Ziehen Sie im nächsten Schritt die Spalte `Name` in das Titelfeld und `Beschreibung` in das Inhaltsfeld. Die weiteren Felder (Härtegrad, Herkunft, etc.) können Sie einfach in den Text einfließen lassen oder als Custom Fields speichern.
5. Führen Sie den Import aus.

### 3. Portfolio-Projekte importieren:
1. Laden Sie die Datei `portfolio_projects_export.csv` hoch (ebenfalls über **WP All Import**).
2. Ordnen Sie Titel, Beschreibung und das Beitragsbild (`Image URL`) zu.
3. Wenn das Plugin **ACF** aktiv ist, können Sie die Spalten `ACF Holzart Detail`, `ACF Herstellungsdauer` und `ACF Besonderheiten` direkt den entsprechenden ACF-Eingabefeldern zuordnen.

---

## 🧱 Schritt 5: Edle Design-Vorlagen (Gutenberg Patterns) nutzen

Die wunderschönen Sektionen aus dem Prototyp (wie das Holzarten-Raster mit den **leuchtend lime-grünen Akzentlinien** oder die Werte-Karten) sind bereits fest in Ihr neues Theme einprogrammiert.

1. Erstellen Sie auf Hostinger eine neue Seite (z.B. Ihre Startseite) unter **Seiten > Erstellen**.
2. Klicken Sie im Editor oben links auf das blaue **`+` (Block hinzufügen)**.
3. Wechseln Sie auf den Reiter **Vorlagen (Patterns)**.
4. Wählen Sie im Dropdown die Kategorie **MP Woodworking** aus.
5. Klicken Sie auf das Pattern **"Vorstellung märkischer Edelhölzer"** oder **"Premium Handwerks-CTA"** – das Design wird sofort perfekt auf Ihre Seite geladen. Sie müssen nur noch die Texte nach Ihren Wünschen anpassen!

---

## 📄 Schritt 6: PDF-Rechnungs-Template aktivieren

Das maßgeschneiderte Rechnungs-Layout mit den lime-grünen Akzenten ist im Theme-Ordner hinterlegt und registriert sich vollautomatisch.

1. Gehen Sie zu **WooCommerce > PDF-Rechnungen**.
2. Wählen Sie im Reiter **Allgemein** unter **Template** im Dropdown das Template **mpwoodworking-invoice** aus.
3. Klicken Sie auf **Änderungen speichern**. Ab sofort erhalten Ihre Kunden wunderschöne, handwerklich gestaltete Rechnungs-PDFs!

---

*Ihre Hostinger-Website ist nun perfekt eingerichtet und spiegelt das edle Design des Prototyps 1:1 wider! Bei Fragen oder weiteren Anpassungswünschen helfe ich Ihnen gerne jederzeit weiter.*
