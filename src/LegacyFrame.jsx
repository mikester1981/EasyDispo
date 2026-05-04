const TOOL_LABELS = {
  viewer: 'Strecken-Viewer',
  planner: 'Streckenplaner',
  editor: 'Umleitungs-Editor',
};

export default function LegacyFrame({ tool, onHome }) {
  const src = `/legacy/EasyDispo-Demo_v1.6_hoverfix.html#${tool}`;

  return (
    <div className="toolShell">
      <header className="toolHeader">
        <div className="toolHeaderLeft">
          <button className="miniBrand" onClick={onHome}>ED</button>
          <div>
            <div className="toolTitle">EasyDispo · {TOOL_LABELS[tool] || 'Modul'}</div>
            <div className="toolSubline">Legacy-Modul aus v1.6 · läuft über den Build-Prototyp</div>
          </div>
        </div>
        <div className="toolHeaderActions">
          <a className="headerButton" href={src} target="_blank" rel="noreferrer">Modul separat öffnen</a>
          <button className="headerButton" onClick={onHome}>Zur Übersicht</button>
        </div>
      </header>
      <iframe
        className="legacyFrame"
        src={src}
        title={`EasyDispo ${TOOL_LABELS[tool]}`}
      />
    </div>
  );
}
