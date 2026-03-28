import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CYPHER SIGNAL | Premium CCTV & Security UAE',
  description: 'Top-tier CCTV installation, maintenance, and smart security solutions in the UAE. Get your free site visit today!',
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
