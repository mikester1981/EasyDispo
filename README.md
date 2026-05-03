# EasyDispo Build-Prototyp v0.2

Dieser Prototyp ist der erste Schritt weg von der großen Einzel-HTML-Datei hin zu einer echten Anwendung.

## Was enthalten ist

- Vite + React App-Shell
- eigene Landingpage mit funktionierendem Hover-Effekt für alle drei Module
- PWA-Grundlage mit `manifest.webmanifest` und `sw.js`
- Tauri-Skelett für eine spätere Windows/macOS/Linux-Desktop-App
- aktuelle EasyDispo-Funktionalität als Legacy-Datei unter `public/legacy/EasyDispo-Demo_v1.6_hoverfix.html`
- Legacy-Module werden über `iframe` geladen: `#viewer`, `#planner`, `#editor`

## Warum erst so?

Die aktuelle EasyDispo-Version ist funktional stark, aber technisch noch ein großer Single-File-Prototyp mit Inline-Babel und CDN-Abhängigkeiten. Eine komplette Sofort-Migration aller Funktionen wäre riskant. Dieser Build-Prototyp erhält den aktuellen Stand und schafft parallel eine professionelle Projektstruktur.

## Start im Browser

```bash
npm install
npm run dev
```

Dann im Browser öffnen:

```text
http://localhost:5173
```

## Produktionsbuild

```bash
npm run build
npm run preview
```

## Desktop-App-Prototyp mit Tauri

Voraussetzung: Rust und die Tauri-Systemvoraussetzungen sind installiert.

```bash
npm install
npm run tauri:dev
```

Build eines Installers:

```bash
npm run tauri:build
```

## Nächste sinnvolle Schritte

1. Legacy-Funktionen aus `EasyDispo-Demo_v1.6_hoverfix.html` Modul für Modul in `src/modules/` übertragen.
2. Browser-Babel komplett entfernen.
3. Externe CDN-Bibliotheken lokal über npm importieren.
4. Gemeinsame Speicherlogik in `src/services/storage.js` ausbauen.
5. Routing, Wetter, Verkehr, Export und Stammdaten als eigene Services trennen.
6. API-Keys nicht im Frontend speichern, sondern später über Backend/Proxy oder sichere lokale Konfiguration lösen.
7. Lizenzmodell, Datenschutz, Updateprozess und Supportkonzept klären.

## Wichtig für echte Vermarktung

Dieser Prototyp ist noch keine fertige Verkaufssoftware. Er ist die technische Grundlage für den Umbau in ein wartbares Produkt.


---

## GitHub Actions

Dieser Stand enthält bereits zwei Workflows:

- `.github/workflows/easydispo-web-build.yml`
- `.github/workflows/easydispo-desktop-build.yml`

Details stehen in `README_GITHUB_ACTIONS.md`.