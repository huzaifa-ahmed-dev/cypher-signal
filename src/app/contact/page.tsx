import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import { Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Cypher Signal Security',
  description: 'Get in touch with Cypher Signal for CCTV installation, barrier gate systems, and security solutions in Dubai, UAE.',
};

const hours = [
  { day: 'Monday – Saturday', time: '8:00 AM – 6:00 PM' },
  { day: 'Sunday', time: '9:00 AM – 6:00 PM' },
];

export default function ContactPage() {
  return (
    <div className="bg-[#020C1B]">
      <Contact />

      {/* ── Business Hours + Map ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#0A192F] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12">

          {/* Business Hours */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#00E676]/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#00E676]" />
              </div>
              <h2 className="text-2xl font-bold text-white">Business Hours</h2>
            </div>

            <div className="space-y-3">
              {hours.map((row) => (
                <div key={row.day} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                  <span className="text-gray-300 font-medium">{row.day}</span>
                  <span className={`font-semibold ${row.time === 'Closed' ? 'text-red-400' : 'text-[#00E676]'}`}>
                    {row.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-[#00E676]/5 border border-[#00E676]/20">
              <p className="text-gray-300 text-sm leading-relaxed">
                📞 For urgent security matters, call us at{' '}
                <a href="tel:+971547172486" className="text-[#00E676] font-semibold hover:underline">
                  +971 54 717 2486
                </a>
                {' '}— we respond to emergencies 24/7.
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold text-white mb-8">Find Us</h2>
            <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                title="Cypher Signal Location - Business Bay, Dubai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1783699289485!2d55.2613!3d25.1865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69cef4e0a3db%3A0x82e0d3e97b4e1429!2sBusiness%20Bay%2C%20Dubai%2C%20UAE!5e0!3m2!1sen!2s!4v1711400000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-gray-500 text-sm mt-3 text-center">Business Bay, Dubai, United Arab Emirates</p>
          </div>

        </div>
      </section>
    </div>
  );
}



