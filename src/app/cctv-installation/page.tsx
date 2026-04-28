import type { Metadata } from 'next';
import CCTVInstallationContent from './CCTVInstallationContent';

export const metadata: Metadata = {
  title: 'CCTV Installation Dubai | Professional Security Camera Setup | Cypher Signal',
  description: 'Expert CCTV installation in Dubai & UAE. 4K cameras, night vision, remote access, and smart motion detection for homes and businesses. Free site visit.',
  openGraph: {
    title: 'CCTV Installation Dubai | Cypher Signal',
    description: 'Expert CCTV installation in Dubai & UAE. 4K cameras, night vision, remote access, and smart motion detection.',
    url: 'https://cyphersignal.com/cctv-installation',
    siteName: 'Cypher Signal',
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCTV Installation Dubai | Cypher Signal',
    description: 'Expert CCTV installation in Dubai & UAE. 4K cameras, night vision, remote access.',
  },
  alternates: {
    canonical: 'https://cyphersignal.com/cctv-installation',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'CCTV Installation',
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
  description: 'Expert CCTV installation in Dubai & UAE. 4K cameras, night vision, remote access, and smart motion detection for homes and businesses.',
};

export default function CCTVInstallationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <CCTVInstallationContent />
    </>
  );
}
