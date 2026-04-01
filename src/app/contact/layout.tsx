import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us For A Free Site Visit',
  description: 'Contact Cypher Signal today to book your free on-site security assessment and survey anywhere in the UAE.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
