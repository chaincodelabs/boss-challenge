import './globals.css';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://bosschallenge.xyz'),
  title: '₿OSS Challenge',
  description: '₿OSS Challenge - start your career in bitcoin open source',
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
    <html lang="en">
      <body>{children}</body>
      <Script 
          src="https://visits.bitcoindevs.xyz/script.js" 
          data-website-id="05dba834-2439-4f5f-948e-34e7ab644de2"
          strategy="afterInteractive"
        />
    </html>
  );
}
