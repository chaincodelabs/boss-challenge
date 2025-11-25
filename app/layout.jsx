import './globals.css';

export const metadata = {
  title: '₿OSS Challenge',
  description: '₿OSS Challenge – start your career in bitcoin open source',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

