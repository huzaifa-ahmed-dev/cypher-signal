import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | CYPHER SIGNAL',
    default: 'CCTV Installation Dubai | CYPHER SIGNAL | Free Site Visit',
  },
  description: 'Leading CCTV and security systems installation in Dubai & UAE. We offer smart cameras, access control, and barrier gates. Claim your free site visit today.',
  keywords: ['CCTV Installation Dubai', 'Security Cameras UAE', 'Cypher Signal', 'Smart Security', 'Access Control', 'Barrier Gates'],
  openGraph: {
    title: 'CCTV Installation Dubai | CYPHER SIGNAL',
    description: 'Top-tier CCTV installation, maintenance, and smart security solutions in Dubai & UAE.',
    url: 'https://cyphersignal.com',
    siteName: 'Cypher Signal',
    locale: 'en_AE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#020C1B] text-white antialiased`}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
