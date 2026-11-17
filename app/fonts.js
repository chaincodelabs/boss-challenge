import { Archivo, Barlow_Condensed, IBM_Plex_Mono } from 'next/font/google';

// Cold Storage brand type: Barlow Condensed for display headings, Archivo for UI and body copy,
// IBM Plex Mono for body text and code.
export const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
  style: ['normal', 'italic'],
  variable: '--font-archivo',
  display: 'swap',
});

export const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-plex-mono',
  display: 'swap',
});
