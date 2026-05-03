export const tools = [
  {
    id: 'viewer',
    title: 'Strecken-Viewer',
    tag: 'Analyse',
    icon: '🗺️',
    accent: '#3F8F5F',
    description: 'GTFS-, KML- und GPX-Daten importieren, Linien sichtbar machen und Strecken sauber prüfen.',
    features: ['GTFS ZIP importieren', 'KML/GPX anzeigen', 'Linien und Haltepunkte prüfen'],
  },
  {
    id: 'planner',
    title: 'Streckenplaner',
    tag: 'Disposition',
    icon: '🧭',
    accent: '#E88E10',
    description: 'Stammdaten, Linienlogik und Planungsansätze für den späteren produktiven Einsatz bündeln.',
    features: ['Stammdaten vorbereiten', 'Linien strukturieren', 'Arbeitsstände sichern'],
  },
  {
    id: 'editor',
    title: 'Umleitungs-Editor',
    tag: 'Einsatz',
    icon: '🚧',
    accent: '#C8102E',
    description: 'Umleitungen auf Basis importierter Linien erstellen, prüfen und als KML oder Druckansicht ausgeben.',
    features: ['Start und Ende setzen', 'Routing-Fallbacks nutzen', 'Meldungen und Export vorbereiten'],
  },
];
