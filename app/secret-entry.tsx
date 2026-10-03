'use client';

import { useRef } from 'react';

export default function SecretEntry() {
  const taps = useRef({ count: 0, last: 0 });

  function openIfThree() {
    const now = Date.now();
    taps.current.count = now - taps.current.last > 2500 ? 1 : taps.current.count + 1;
    taps.current.last = now;
    if (taps.current.count >= 3) window.location.assign('/captains-cut.html');
  }

  return <button
    type="button"
    onClick={openIfThree}
    aria-label="Win the nine. Tap three times for the captain’s cut."
    style={{ appearance: 'none', background: 'none', border: 0, color: 'inherit', font: 'inherit', letterSpacing: 'inherit', padding: 0, cursor: 'pointer' }}
  >WIN THE NINE</button>;
}
