'use client';

import { useEffect } from 'react';

const links = [
  ['home', '/', 'Home'], ['history', '/history/', 'History'],
  ['strategy', '/strategy/', 'Team plan'], ['courses', '/courses/', 'Courses'],
  ['mental-game', '/mental-game/', 'Mental game'], ['bets', '/bets/', 'Bets'],
  ['quick-card', '/quick-card/', 'Quick card'],
];
const legacyLinks: Record<string, string> = {
  history: '/history/', format: '/strategy/#format', pairings: '/strategy/#pairings',
  singles: '/strategy/#singles', weapons: '/courses/', talk: '/mental-game/',
  bets: '/bets/', 'quick-card': '/quick-card/', tradition: '/tradition/',
  willbrook: '/willbrook/', heritage: '/heritage/',
};

export default function SiteNavigation({ current }: { current: string }) {
  useEffect(() => {
    if (current !== 'home') return;
    const followOldLink = () => {
      const destination = legacyLinks[window.location.hash.slice(1)];
      if (destination) window.location.replace(destination);
    };
    followOldLink();
    window.addEventListener('hashchange', followOldLink);
    return () => window.removeEventListener('hashchange', followOldLink);
  }, [current]);

  return <header className="site-header">
    <div className="shell site-header-inner">
      <a className="brand" href="/" aria-label="Blue Team home"><span className="brand-mark">B</span><span>BLUE TEAM / 2026</span></a>
      <nav className="site-links" aria-label="Playbook navigation">{links.map(([key, href, label]) => <a key={key} href={href} aria-current={current === key ? 'page' : undefined}>{label}</a>)}</nav>
    </div>
  </header>;
}

