import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Appbar from '@/components/utils/Appbar';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Xandre Portfolio',
  description: 'Portfolio Resume of Alexander Micua',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Appbar />
        {children}
      </body>
    </html>
  );
}
