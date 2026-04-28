import type { Metadata } from 'next';
import BlogCCTVCostContent from './BlogCCTVCostContent';

export const metadata: Metadata = {
  title: 'Cost of CCTV Installation in UAE | Pricing Guide | Cypher Signal',
  description: 'Detailed breakdown of CCTV installation costs in the UAE. Camera prices, NVR costs, labour rates, and maintenance contracts for Dubai, Abu Dhabi, and Sharjah.',
  openGraph: {
    title: 'Cost of CCTV Installation in UAE | Cypher Signal',
    description: 'Detailed breakdown of CCTV installation costs in the UAE.',
    url: 'https://cyphersignal.com/blogs/cost-of-cctv-installation-in-uae',
    siteName: 'Cypher Signal',
    locale: 'en_AE',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cost of CCTV Installation in UAE | Cypher Signal',
    description: 'Detailed breakdown of CCTV installation costs in the UAE.',
  },
  alternates: {
    canonical: 'https://cyphersignal.com/blogs/cost-of-cctv-installation-in-uae',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cost of CCTV Installation in the UAE',
  description: 'Detailed breakdown of CCTV installation costs in the UAE. Camera prices, NVR costs, labour rates, and maintenance contracts.',
  image: 'https://cyphersignal.com/blog_1.png',
  datePublished: '2026-01-02',
  author: {
    '@type': 'Organization',
    name: 'Cypher Signal',
    url: 'https://cyphersignal.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Cypher Signal',
    url: 'https://cyphersignal.com',
  },
};

export default function BlogCCTVCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogCCTVCostContent />
    </>
  );
}
