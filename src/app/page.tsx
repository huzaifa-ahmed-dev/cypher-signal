import Hero from '@/components/Hero';
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
