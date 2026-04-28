import type { Metadata } from 'next';
import BlogsContent from './BlogsContent';

export const metadata: Metadata = {
  title: 'Security Blog | CCTV & Access Control Insights | Cypher Signal',
  description: 'Expert articles on CCTV installation, access control, and smart security for Dubai & UAE. Stay informed with Cypher Signal\'s security blog.',
  openGraph: {
    title: 'Security Blog | Cypher Signal',
    description: 'Expert articles on CCTV installation, access control, and smart security for Dubai & UAE.',
    url: 'https://cyphersignal.com/blogs',
    siteName: 'Cypher Signal',
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Blog | Cypher Signal',
    description: 'Expert articles on CCTV installation, access control, and smart security for Dubai & UAE.',
  },
  alternates: {
    canonical: 'https://cyphersignal.com/blogs',
  },
};

export default function BlogsPage() {
  return <BlogsContent />;
}
