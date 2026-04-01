import type { Metadata } from 'next';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'CCTV Installation Dubai | CYPHER SIGNAL | Free Site Visit',
  description: 'Leading CCTV and security systems installation in Dubai & UAE. We offer smart cameras, access control, and barrier gates. Claim your free site visit today.',
};
import Services from '@/components/Services';
import AccessControl from '@/components/AccessControl';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AccessControl />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
