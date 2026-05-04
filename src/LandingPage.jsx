import { tools } from '../../data/tools.js';

export default function LandingPage({ onOpenTool }) {
  return (
    <div className="landing">
      <div className="landingBg" />
      <main className="landingContainer">
        <header className="landingHeader">
          <div className="brandBlock">
            <div className="brandMark">ED</div>
            <div>
              <div className="brandName">EasyDispo</div>
              <div className="brandTag">ÖPNV · Busbetrieb · Leitstelle</div>
            </div>
          </div>
          <div className="authorBlock">
            <strong>Mike Nana Kwame Briffo</strong><br />
            Build-Prototyp · v0.1
          </div>
        </header>

        <section className="hero">
          <h1>Disposition.<br /><span>Aber einfacher.</span></h1>
          <p>
            Dieser Build-Prototyp trennt die Anwendung erstmals von der alten Einzel-HTML-Datei.
            Die bisherigen Funktionen bleiben als Legacy-Modul erhalten, während die neue App-Struktur Schritt für Schritt produktionsfähig wird.
          </p>
        </section>

        <section className="toolGrid" aria-label="EasyDispo Werkzeuge">
          {tools.map((tool) => (
            <button
              key={tool.id}
              className={`toolCard ${tool.id}`}
              style={{ '--accent': tool.accent }}
              onClick={() => onOpenTool(tool.id)}
            >
              <div className="toolIcon">{tool.icon}</div>
              <div className="toolTag">{tool.tag}</div>
              <h2>{tool.title}</h2>
              <p>{tool.description}</p>
              <ul>
                {tool.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <span className="toolCta">Öffnen</span>
            </button>
          ))}
        </section>

        <section className="buildInfo">
          <div>
            <div className="eyebrow">Build-Migration</div>
            <h2>Saubere Grundlage für eine echte Anwendung</h2>
            <p>
              Die bisherige EasyDispo-Version liegt im Ordner <code>public/legacy</code> und wird im Build-Prototypen in einem eigenen Frame geladen.
              Dadurch bleibt der aktuelle Funktionsstand erhalten, während Landingpage, Routing, Speicherlogik und spätere Module in echte React-Dateien ausgelagert werden können.
            </p>
          </div>
          <div className="buildSteps">
            <div><strong>1</strong><span>Vite/React App-Shell</span></div>
            <div><strong>2</strong><span>PWA-Manifest und Service Worker</span></div>
            <div><strong>3</strong><span>Tauri-Desktop-Skelett</span></div>
          </div>
        </section>

        <footer className="footer">
          <span>EasyDispo · Build-Prototyp v0.1</span>
          <span>Aus der Leitstelle. Für die Leitstelle.</span>
        </footer>
      </main>
    </div>
  );
}
