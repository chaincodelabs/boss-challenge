import './globals.css';
import Script from 'next/script';
import { archivo, barlowCondensed, plexMono } from './fonts';
import { asset } from './asset';

export const metadata = {
  metadataBase: new URL('https://bosschallenge.xyz'),
  title: '₿OSS Challenge',
  description: '₿OSS Challenge - start your career in bitcoin open source',
  // favicon.svg switches between a dark and a light ₿ with the browser's color scheme;
  // favicon.ico covers browsers without SVG icons.
  icons: {
    icon: [
      { url: asset('/favicon.svg'), type: 'image/svg+xml' },
      { url: asset('/favicon.ico'), sizes: 'any' },
    ],
    apple: asset('/apple-touch-icon.png'),
  },
  manifest: asset('/manifest.webmanifest'),
  openGraph: {
    title: '₿OSS Challenge',
    description: '₿OSS Challenge - start your career in bitcoin open source',
    images: ['/img/boss-challenge.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '₿OSS Challenge',
    description: '₿OSS Challenge - start your career in bitcoin open source',
    images: ['/img/boss-challenge.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${archivo.variable} ${plexMono.variable}`}>
      <body>{children}</body>
      <Script 
          src="https://visits.bitcoindevs.xyz/script.js" 
          data-website-id="05dba834-2439-4f5f-948e-34e7ab644de2"
          strategy="afterInteractive"
        />
    </html>
  );
}
