import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Targeted Intervention Hub',
  description: 'AI-powered talent exchange for technical solvers and small businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
