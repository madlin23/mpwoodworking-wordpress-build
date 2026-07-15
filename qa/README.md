# Live-QA der Inhaltsseiten

Die Skripte in diesem Ordner dokumentieren die responsive Endabnahme der fünf Hauptmenü-Seiten **Über mich**, **Produkte**, **Galerie**, **Videos** und **Kontakt**.

## Voraussetzungen

Benötigt werden Python 3, `websocket-client`, Pillow und eine laufende Chromium-Instanz mit aktivierter DevTools-Schnittstelle auf `127.0.0.1:9222`. Der Prüflauf verändert keine Inhalte auf der Website; er navigiert ausschließlich lesend, wertet den gerenderten DOM aus und erstellt Screenshots.

| Variable | Standard | Bedeutung |
|---|---|---|
| `MPW_QA_BASE_URL` | `https://springgreen-chough-629931.hostingersite.com` | Zu prüfende WordPress-Basis-URL |
| `MPW_QA_OUT_DIR` | `<Repository>/qa-output` | Ziel für Bericht und Screenshots |

## Ausführung

```bash
python3 qa/qa_content_photo_pages.py
python3 qa/build_qa_contact_sheets.py
```

Der erste Befehl erzeugt `content-photo-report.json` sowie je fünf Desktop- und Mobil-Screenshots. Der zweite Befehl setzt diese zehn Aufnahmen zu zwei Kontaktbögen zusammen. Der Laufzeitordner `qa-output/` wird nicht versioniert; die kuratierten Nachweise der finalen Live-Abnahme vom 15. Juli 2026 liegen unter `docs/qa-live-2026-07-15/`.
