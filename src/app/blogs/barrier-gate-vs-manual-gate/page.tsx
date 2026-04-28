import type { Metadata } from 'next';
import BlogBarrierGateContent from './BlogBarrierGateContent';

export const metadata: Metadata = {
  title: 'Barrier Gate vs Manual Gate – Which is Better? | Cypher Signal',
  description: 'Comparing automatic barrier gates vs manual gates for UAE properties. Security, cost, traffic flow, and ROI analysis for Dubai commercial and residential sites.',
  openGraph: {
    title: 'Barrier Gate vs Manual Gate | Cypher Signal',
    description: 'Comparing automatic barrier gates vs manual gates for UAE properties.',
    url: 'https://cyphersignal.com/blogs/barrier-gate-vs-manual-gate',
    siteName: 'Cypher Signal',
    locale: 'en_AE',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barrier Gate vs Manual Gate | Cypher Signal',
    description: 'Comparing automatic barrier gates vs manual gates for UAE properties.',
  },
  alternates: {
    canonical: 'https://cyphersignal.com/blogs/barrier-gate-vs-manual-gate',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Barrier Gate vs Manual Gate – Which is Better?',
  description: 'Comparing automatic barrier gates vs manual gates for UAE properties. Security, cost, traffic flow, and ROI analysis.',
  image: 'https://cyphersignal.com/blog_3.png',
  datePublished: '2025-12-18',
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

export default function BlogBarrierGatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogBarrierGateContent />
    </>
  );
}
