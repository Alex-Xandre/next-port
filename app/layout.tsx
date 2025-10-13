import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Appbar from '@/components/sidebar/Appbar';
import { SidebarProvider } from '@/components/sidebar/sidebar-context.';
import { Analytics } from '@vercel/analytics/next';
import FixedSection from '@/components/FixedSection';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Xandre Portfolio',
  description: 'Portfolio Resume of Alexander Micua',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <SidebarProvider>
        <body className={inter.className}>
          <Appbar />
          <main className='flex dark:bg-black flex-col lg:flex-row px-2 lg:pl-0'>
            <FixedSection />
            {children}
          </main>
          <Analytics />
        </body>
      </SidebarProvider>
    </html>
  );
}
