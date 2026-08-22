import type { Metadata } from 'next';
import { Manrope, Oswald } from 'next/font/google';
import './globals.css';

const body = Manrope({ variable: '--font-body', subsets: ['latin'] });
const display = Oswald({ variable: '--font-display', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bvwolfden.github.io'),
  title: 'Blue Team 2026 | Captain’s Playbook',
  description: 'The 2026 strategy playbook for the Blue Team annual golf trip.',
  openGraph: {
    title: 'Blue Team 2026 | Captain’s Playbook',
    description: 'Fifteen points. Nine secret-weapon holes. One plan to bring the cup home.',
    type: 'website',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Blue Team 2026 Captain’s Playbook' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Team 2026 | Captain’s Playbook',
    description: 'Fifteen points. Nine secret-weapon holes. One plan to bring the cup home.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${body.variable} ${display.variable}`}>{children}</body></html>;
}
