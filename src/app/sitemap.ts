import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cyphersignal.com';

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/cctv-installation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/maintenance-repair`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/remote-monitoring`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/system-upgrades`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/barrier-gate-installation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/automatic-gate-systems`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blogs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/blogs/best-cctv-cameras-for-homes-dubai`, lastModified: new Date('2026-03-28'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blogs/cost-of-cctv-installation-in-uae`, lastModified: new Date('2026-01-02'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blogs/barrier-gate-vs-manual-gate`, lastModified: new Date('2025-12-18'), changeFrequency: 'monthly', priority: 0.6 },
  ];
}
