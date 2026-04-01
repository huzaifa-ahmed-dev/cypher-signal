import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CCTV Maintenance & Repair UAE',
  description: 'Fast troubleshooting and repair for security cameras and DVR/NVR systems across the UAE. Same-day response.',
};

export default function MaintenanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
