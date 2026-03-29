"use client";
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="pt-8 pb-8 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] shadow-[0_0_50px_rgba(0,230,118,0.1)] border border-[#00E676]/20 bg-[#061225]"
        >
          {/* Background Highlight matching the website theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E676]/5 to-[#00E676]/10"></div>

          {/* Subtle overlay texture/pattern for the premium feel */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

          <div className="relative z-10 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left side: Text Content */}
            <div className="text-left max-w-2xl lg:w-2/3">
              <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-white tracking-tight">
                Secure Your <span className="text-[#00E676]">Property</span>
              </h2>
              <p className="text-lg text-gray-300 font-light italic" style={{ fontFamily: 'var(--font-rajdhani), sans-serif', letterSpacing: '0.05em' }}>
                Get a custom security solution with CCTV & Smart Gate Systems
              </p>
            </div>

            {/* Right side: Actions */}
            <div className="flex flex-col sm:flex-row gap-4 lg:w-1/3 justify-end shrink-0 w-full lg:w-auto">
              <a
                href="tel:+971547172486"
                className="flex items-center justify-center gap-2 bg-transparent border border-[#00E676] text-[#00E676] hover:bg-[#00E676] hover:text-[#0A192F] px-8 py-4 rounded-xl font-bold text-base transition-all w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a
                href="https://wa.me/971547172486"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#00E676] text-[#0A192F] hover:bg-[#00c968] hover:shadow-[0_0_20px_rgba(0,230,118,0.4)] px-8 py-4 rounded-xl font-bold text-base transition-all w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
