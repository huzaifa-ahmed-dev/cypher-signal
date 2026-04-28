import type { Metadata } from 'next';
import MaintenanceRepairContent from './MaintenanceRepairContent';

export const metadata: Metadata = {
  title: 'CCTV Maintenance & Repair Dubai | Fast Technician Response | Cypher Signal',
  description: 'Same-day CCTV repair and maintenance in Dubai. Certified technicians for Hikvision, Dahua, Axis. Remote diagnostics, routine servicing, and emergency repairs across the UAE.',
  openGraph: {
    title: 'CCTV Maintenance & Repair Dubai | Cypher Signal',
    description: 'Same-day CCTV repair and maintenance in Dubai. Certified technicians for Hikvision, Dahua, Axis.',
    url: 'https://cyphersignal.com/maintenance-repair',
    siteName: 'Cypher Signal',
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCTV Maintenance & Repair Dubai | Cypher Signal',
    description: 'Same-day CCTV repair and maintenance in Dubai. Certified technicians for all major brands.',
  },
  alternates: {
    canonical: 'https://cyphersignal.com/maintenance-repair',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'CCTV Maintenance & Repair',
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
  description: 'Same-day CCTV repair and maintenance in Dubai. Certified technicians for Hikvision, Dahua, Axis. Remote diagnostics and routine servicing.',
};

export default function MaintenanceRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <MaintenanceRepairContent />
    </>
  );
}
