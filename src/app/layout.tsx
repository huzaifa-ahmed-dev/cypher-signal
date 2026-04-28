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
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Cypher Signal',
  url: 'https://cyphersignal.com',
  telephone: '+971547172486',
  email: 'info@cyphersignal.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Business Bay',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Dubai, UAE',
  },
  description: 'Leading CCTV and security systems installation in Dubai & UAE. Smart cameras, access control, and barrier gates.',
  priceRange: '$$',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3W10EP4EH4"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3W10EP4EH4');
            `,
          }}
        />
      </body>
    </html>
  );
}
