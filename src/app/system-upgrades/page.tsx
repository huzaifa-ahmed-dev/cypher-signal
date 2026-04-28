import type { Metadata } from 'next';
import SystemUpgradesContent from './SystemUpgradesContent';

export const metadata: Metadata = {
  title: 'CCTV System Upgrades Dubai | Analog to IP Conversion | Cypher Signal',
  description: 'Upgrade your old CCTV system to 4K IP cameras, AI analytics, and cloud storage. Seamless migration with zero downtime in Dubai & UAE.',
  openGraph: {
    title: 'CCTV System Upgrades Dubai | Cypher Signal',
    description: 'Upgrade your old CCTV system to 4K IP cameras, AI analytics, and cloud storage.',
    url: 'https://cyphersignal.com/system-upgrades',
    siteName: 'Cypher Signal',
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCTV System Upgrades Dubai | Cypher Signal',
    description: 'Upgrade your old CCTV system to 4K IP cameras, AI analytics, and cloud storage.',
  },
  alternates: {
    canonical: 'https://cyphersignal.com/system-upgrades',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'CCTV System Upgrades',
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
  description: 'Upgrade your old CCTV system to 4K IP cameras, AI analytics, and cloud storage with zero downtime in Dubai & UAE.',
};

export default function SystemUpgradesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SystemUpgradesContent />
    </>
  );
}
