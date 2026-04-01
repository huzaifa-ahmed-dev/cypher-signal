import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24/7 Remote Monitoring UAE',
  description: 'Access your camera feeds 24/7 from anywhere in the world via secure, encrypted mobile applications.',
};

export default function RemoteMonitoringLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
