import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://morrowgoods.com'),
  title: {
    default: 'Morrow | Considered Goods for Modern Living',
    template: '%s | Morrow',
  },
  description: 'Discover refined tech accessories, home essentials, and travel pieces made for work, weekends, and everything between.',
  keywords: ['lifestyle', 'e-commerce', 'home goods', 'tech accessories', 'travel', 'minimal'],
  authors: [{ name: 'Morrow Goods' }],
  creator: 'Morrow Goods',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://morrowgoods.com',
    siteName: 'Morrow',
    title: 'Morrow | Considered Goods for Modern Living',
    description: 'Discover refined tech accessories, home essentials, and travel pieces.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morrow | Considered Goods for Modern Living',
    description: 'Discover refined tech accessories, home essentials, and travel pieces.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
