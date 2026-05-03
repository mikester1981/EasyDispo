# EasyDispo GitHub-Actions-Setup

Dieses Paket ist der nächste Schritt zum automatischen Build.

## Enthaltene Workflows

### `.github/workflows/easydispo-web-build.yml`

Baut die Vite-Web-App automatisch:

- bei Push auf `main`
- bei Pull Requests auf `main`
- manuell über `Actions > EasyDispo Web Build > Run workflow`
- täglich per Cron

Das Ergebnis liegt danach als Artefakt `easydispo-web-dist` im Actions-Run.

### `.github/workflows/easydispo-desktop-build.yml`

Baut die Tauri-Desktop-App:

- manuell über `Actions > EasyDispo Desktop Build > Run workflow`
- automatisch bei Tags wie `v0.2.0`

Das Ergebnis liegt als Artefakt pro Plattform im Actions-Run.

## GitHub-Repo vorbereiten

1. Neues Repository erstellen, z. B. `easydispo`.
2. Inhalt dieses Ordners in das Repository hochladen.
3. In GitHub auf `Actions` gehen.
4. Falls GitHub fragt: `I understand my workflows, go ahead and enable them`.
5. `EasyDispo Web Build` auswählen.
6. `Run workflow` klicken.

## Lokal erster Test

```bash
npm install
npm run build
npm run preview
```

## Desktop lokal testen

```bash
npm install
npm run tauri:dev
```

## Desktop Build lokal

```bash
npm run tauri:build
```

## Wichtiger Hinweis

Der Desktop-Build ist noch ein Prototyp. Für eine verkaufsfähige macOS-Version brauchst du später:

- Apple Developer Account
- Developer ID Application Zertifikat
- Developer ID Installer Zertifikat, wenn `.pkg` gebaut/signiert werden soll
- Notarisierung
- saubere Update-Strategie
- ggf. Lizenzprüfung
- rechtliche Texte und Datenschutzprüfung