import type { Metadata } from 'next';
import BarrierGateContent from './BarrierGateContent';

export const metadata: Metadata = {
  title: 'Barrier Gate Installation Dubai | Access Control Systems | Cypher Signal',
  description: 'Heavy-duty barrier gate installation in Dubai for parking lots and commercial compounds. RFID, loop detection, CCTV integration, and ANPR-ready systems across the UAE.',
  openGraph: {
    title: 'Barrier Gate Installation Dubai | Cypher Signal',
    description: 'Heavy-duty barrier gate installation in Dubai for parking lots and commercial compounds.',
    url: 'https://cyphersignal.com/barrier-gate-installation',
    siteName: 'Cypher Signal',
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barrier Gate Installation Dubai | Cypher Signal',
    description: 'Heavy-duty barrier gate installation in Dubai for parking lots and commercial compounds.',
  },
  alternates: {
    canonical: 'https://cyphersignal.com/barrier-gate-installation',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Barrier Gate Installation',
  provider: {
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
  },
  areaServed: {
    '@type': 'Place',
    name: 'Dubai, UAE',
  },
  description: 'Heavy-duty barrier gate installation in Dubai for parking lots and commercial compounds. RFID, loop detection, CCTV integration.',
};

export default function BarrierGatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BarrierGateContent />
    </>
  );
}
