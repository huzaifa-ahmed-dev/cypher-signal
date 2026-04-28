import type { Metadata } from 'next';
import RemoteMonitoringContent from './RemoteMonitoringContent';

export const metadata: Metadata = {
  title: 'Remote CCTV Monitoring Dubai | 24/7 Mobile Access | Cypher Signal',
  description: 'Monitor your CCTV cameras remotely from anywhere in the world. Encrypted live streaming, instant alerts, and multi-site management for UAE properties.',
  openGraph: {
    title: 'Remote CCTV Monitoring Dubai | Cypher Signal',
    description: 'Monitor your CCTV cameras remotely from anywhere. Encrypted live streaming, instant alerts, and multi-site management.',
    url: 'https://cyphersignal.com/remote-monitoring',
    siteName: 'Cypher Signal',
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remote CCTV Monitoring Dubai | Cypher Signal',
    description: 'Monitor your CCTV cameras remotely from anywhere. Encrypted live streaming and instant alerts.',
  },
  alternates: {
    canonical: 'https://cyphersignal.com/remote-monitoring',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Remote CCTV Monitoring',
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
  description: 'Remote CCTV monitoring with encrypted live streaming, instant alerts, and multi-site management for UAE properties.',
};

export default function RemoteMonitoringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <RemoteMonitoringContent />
    </>
  );
}
