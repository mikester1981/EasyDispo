import { useEffect, useMemo, useState } from 'react';
import LandingPage from './modules/landing/LandingPage.jsx';
import LegacyFrame from './modules/legacy/LegacyFrame.jsx';

function getRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '').trim();
  if (['viewer', 'planner', 'editor'].includes(hash)) return hash;
  return 'home';
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handler = () => setRoute(getRoute());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const navigate = useMemo(() => ({
    home: () => { window.location.hash = ''; },
    tool: (id) => { window.location.hash = id; },
  }), []);

  if (route === 'home') return <LandingPage onOpenTool={navigate.tool} />;

  return <LegacyFrame tool={route} onHome={navigate.home} />;
}
