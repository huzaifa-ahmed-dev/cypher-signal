import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart CCTV Installation Dubai',
  description: 'Professional 4K CCTV camera installation for homes and businesses in Dubai. Zero blind spots. Get a free site quote.',
};

export default function CCTVLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
