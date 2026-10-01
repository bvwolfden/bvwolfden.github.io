'use client';

import { useEffect, useRef } from 'react';

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
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector('summary')?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 68rem)');
    const closeOnDesktop = () => { if (desktop.matches && menu.current) menu.current.open = false; };
    document.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, []);
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

  const navigationLinks = links.map(([key, href, label]) => <a key={key} href={href} aria-current={current === key ? 'page' : undefined}>{label}</a>);
  return <><a className="skip-link" href="#top">Skip to content</a><header className="site-header">
    <div className="shell site-header-inner">
      <a className="brand" href="/" aria-label="Blue Team home"><span className="brand-mark">B</span><span>BLUE TEAM / 2026</span></a>
      <nav className="site-links desktop-links" aria-label="Playbook navigation">{navigationLinks}</nav>
      <details ref={menu} className="mobile-menu">
        <summary>Menu <span aria-hidden="true">☰</span></summary>
        <nav className="site-links" aria-label="Playbook navigation">{navigationLinks}</nav>
      </details>
    </div>
  </header></>;
}
