import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional System Upgrades',
  description: 'Upgrade your legacy analog infrastructure to cutting-edge IP camera networks with zero downtime and full continuity.',
};

export default function SystemUpgradesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
