# MP Woodworking – WordPress Installationsanleitung

Diese Anleitung führt Sie Schritt für Schritt durch die Installation des maßgeschneiderten WordPress-Themes (Haupt- und Child-Theme) sowie die Einrichtung aller Premium-Funktionen (WooCommerce E-Mails, PDF-Rechnungen, Gutenberg-Patterns und ACF-Felder) auf Ihrer eigenen WordPress-Instanz.

---

## 📋 Voraussetzungen & Vorbereitung

Stellen Sie sicher, dass auf Ihrem WordPress-System folgende kostenfreie Standard-Plugins installiert und aktiviert sind:
1. **WooCommerce** (für den Unikat-Shop, Warenkorb und Kasse)
2. **Advanced Custom Fields (ACF)** (für die erweiterten Metadaten wie Holz-Besonderheiten und Herstellungsdauer)
3. **WooCommerce PDF Invoices & Packing Slips** (für die edlen Rechnungs-PDFs)

---

## 🛠️ Schritt 1: Themes installieren

Sie haben im Anhang zwei ZIP-Dateien erhalten:
* `mpwoodworking-custom-theme.zip` (Das Haupt-Theme)
* `mpwoodworking-child-theme.zip` (Das Child-Theme für Ihre eigenen Anpassungen)

### Installation über das WordPress-Backend:
1. Navigieren Sie im WordPress-Dashboard zu **Design > Themes**.
2. Klicken Sie oben auf **Theme hinzufügen** und anschließend auf **Theme hochladen**.
3. Wählen Sie zuerst die Datei `mpwoodworking-custom-theme.zip` aus und klicken Sie auf **Jetzt installieren**. (*Wichtig: Aktivieren Sie dieses Theme noch nicht!*)
4. Kehren Sie zur Theme-Seite zurück, klicken Sie erneut auf **Theme hinzufügen > Theme hochladen**.
5. Wählen Sie nun die Datei `mpwoodworking-child-theme.zip` aus und installieren Sie diese.
6. Klicken Sie nach erfolgreicher Installation des Child-Themes auf **Aktivieren**.

---

## 🛒 Schritt 2: WooCommerce E-Mails & Farben aktivieren

Das Theme konfiguriert das Design Ihrer WooCommerce-Mails automatisch im Hintergrund. Sobald das Theme aktiv ist, greift das edle, dunkel-kontraststarke Layout mit den roten und lime-grünen Akzenten für alle Transaktions-E-Mails.

### Überprüfung:
1. Gehen Sie zu **WooCommerce > Einstellungen > E-Mails**.
2. Scrollen Sie ganz nach unten zum Bereich **E-Mail-Template**.
3. Dort sehen Sie, dass die Hintergrundfarbe automatisch auf `#010101` (Dunkel) und die Akzentfarbe auf `#d40924` (Rot) gesetzt wurde. Das erweiterte Styling (inkl. der Lime-Grünen Akzente und Schriftarten) wird über das Theme injiziert.

---

## 📄 Schritt 3: Premium PDF-Rechnungen einrichten

Das maßgeschneiderte PDF-Layout ist direkt im Theme-Ordner integriert und registriert sich automatisch beim PDF-Rechnungs-Plugin.

### Aktivierung im Plugin:
1. Navigieren Sie im WordPress-Dashboard zu **WooCommerce > PDF-Rechnungen**.
2. Im Reiter **Allgemein** finden Sie die Option **Template**.
3. Wählen Sie im Dropdown-Menü das Template **mpwoodworking-invoice** aus.
4. Klicken Sie unten auf **Änderungen speichern**.

Ab sofort werden alle generierten Rechnungs-PDFs im edlen, dunkel-kontraststarken Handwerks-Look mit feinen lime-grünen Trennlinien und roter Preishervorhebung ausgegeben.

---

## 🧱 Schritt 4: Gutenberg Block-Patterns nutzen

Das Theme bringt fertige, maßgeschneiderte Layout-Vorlagen mit, die Sie direkt in Ihren Seiten oder Beiträgen verwenden können.

### So fügen Sie das neue Holzarten-Pattern ein:
1. Erstellen Sie eine neue Seite oder bearbeiten Sie eine bestehende (z.B. Ihre "Holzarten"-Seite).
2. Klicken Sie im Gutenberg-Editor oben links auf das **"+" (Block-Hinzufügen-Symbol)**.
3. Wechseln Sie im Tab-Menü von *Blöcke* auf **Patterns**.
4. Wählen Sie im Dropdown-Kategorie-Menü **MP Woodworking** aus.
5. Klicken Sie auf das Pattern **Vorstellung märkischer Edelhölzer**, um das edle 3-Spalten-Layout mit den lime-grünen Akzentlinien für Eibe, Walnuss und Robinie direkt in Ihre Seite einzufügen. Sie können die Texte und Hölzer nun beliebig anpassen.

---

## 🏷️ Schritt 5: ACF-Projektfelder aktivieren

Die erweiterten Metadaten für Ihre Projekte (wie Herstellungsdauer, konstruktive Besonderheiten und Holz-Fundort) sind im Theme-Code registriert.

1. Sobald das Plugin **Advanced Custom Fields (ACF)** aktiv ist, erscheint beim Bearbeiten oder Erstellen eines Beitrags vom Typ "Projekt" (Custom Post Type) automatisch die neue Eingabemaske **"Projekt-Details (Handwerk)"** unter dem Editor-Bereich.
2. Tragen Sie dort die spezifischen Details zu Ihren Unikaten ein. Das Theme gibt diese Daten auf der Projektdetailseite (`single-projekt.php`) automatisch im edlen Handwerks-Look aus.

---

*Sollten Sie Fragen zur Einrichtung oder zu individuellen Anpassungen haben, stehe ich Ihnen jederzeit zur Verfügung!*
