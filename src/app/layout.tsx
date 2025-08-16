import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/layout/Sidebar';
import MobileNavbar from '@/components/layout/MobileNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GreenRoute Logistics',
  description: 'Smart and sustainable commercial logistics platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex h-screen bg-neutral-50">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          
          {/* Mobile Navigation */}
          <MobileNavbar />
          
          {/* Main Content */}
          <main className="flex-1 overflow-auto p-4 lg:p-6 pt-20 lg:pt-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
