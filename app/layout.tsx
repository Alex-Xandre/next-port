import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Appbar from "@/components/sidebar/Appbar";
import { SidebarProvider } from "@/components/sidebar/sidebar-context.";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xandre Portfolio",
  description: "Portfolio Resume of Alexander Micua",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SidebarProvider>
        <body className={inter.className}>
          <Appbar />
          {children}
        </body>
      </SidebarProvider>
    </html>
  );
}
