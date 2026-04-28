import type { Metadata } from 'next';
import AutomaticGateSystemsContent from './AutomaticGateSystemsContent';

export const metadata: Metadata = {
  title: 'Automatic Gate Systems Dubai | Sliding & Swing Gates | Cypher Signal',
  description: 'Automatic gate installation in Dubai — sliding, swing, and smart gates for villas and businesses. Remote control, RFID, intercom, and app integration across the UAE.',
  openGraph: {
    title: 'Automatic Gate Systems Dubai | Cypher Signal',
    description: 'Automatic gate installation in Dubai — sliding, swing, and smart gates for villas and businesses.',
    url: 'https://cyphersignal.com/automatic-gate-systems',
    siteName: 'Cypher Signal',
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automatic Gate Systems Dubai | Cypher Signal',
    description: 'Automatic gate installation in Dubai — sliding, swing, and smart gates for villas and businesses.',
  },
  alternates: {
    canonical: 'https://cyphersignal.com/automatic-gate-systems',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Automatic Gate Systems',
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
  description: 'Automatic gate installation in Dubai — sliding, swing, and smart gates for villas and businesses. Remote control, RFID, intercom, and app integration.',
};

export default function AutomaticGatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <AutomaticGateSystemsContent />
    </>
  );
}
