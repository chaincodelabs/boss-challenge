import './globals.css';

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
    </html>
  );
}

