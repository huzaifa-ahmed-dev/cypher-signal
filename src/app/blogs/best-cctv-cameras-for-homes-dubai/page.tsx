import type { Metadata } from 'next';
import BlogCCTVCamerasContent from './BlogCCTVCamerasContent';

export const metadata: Metadata = {
  title: 'Best CCTV Cameras for Homes in Dubai | Cypher Signal',
  description: 'A comprehensive guide to choosing the best CCTV cameras for Dubai homes. 4K dome, IP66 bullet, PTZ, and covert cameras reviewed for UAE climate conditions.',
  openGraph: {
    title: 'Best CCTV Cameras for Homes in Dubai | Cypher Signal',
    description: 'A comprehensive guide to choosing the best CCTV cameras for Dubai homes.',
    url: 'https://cyphersignal.com/blogs/best-cctv-cameras-for-homes-dubai',
    siteName: 'Cypher Signal',
    locale: 'en_AE',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best CCTV Cameras for Homes in Dubai | Cypher Signal',
    description: 'A comprehensive guide to choosing the best CCTV cameras for Dubai homes.',
  },
  alternates: {
    canonical: 'https://cyphersignal.com/blogs/best-cctv-cameras-for-homes-dubai',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best CCTV Cameras for Homes in Dubai',
  description: 'A comprehensive guide to choosing the best CCTV cameras for Dubai homes. 4K dome, IP66 bullet, PTZ, and covert cameras reviewed for UAE climate conditions.',
  image: 'https://cyphersignal.com/blog_2.png',
  datePublished: '2026-03-28',
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

export default function BlogCCTVCamerasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogCCTVCamerasContent />
    </>
  );
}
