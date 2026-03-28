"use client";
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const reasons = [
  "Free Site Visit & Consultation",
  "Fast & Professional Installation",
  "Affordable Pricing Packages",
  "Experienced Technicians",
  "24/7 Support & Monitoring",
  "Advanced Access Control Solutions"
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#020C1B] relative overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row bg-[#061225]/40 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Left Side - Image/Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative min-h-[400px] lg:min-h-full"
          >
            {/* The background photo */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/why_choose_us.png')" }}
            >
              {/* Overlay gradients for cinematic effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-[#061225]/90 lg:to-[#061225]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-transparent to-transparent"></div>
            </div>

            {/* Futuristic Tech Frame overlays */}
            <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-[#00E676]/50"></div>
            <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-[#00E676]/50"></div>

            {/* Content overlay on image (optional, mimicking the 'TECHNOLOGY' text in ref 2) */}
            <div className="absolute inset-0 p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-md hidden lg:block"
              >
                <h3 className="text-4xl font-bold tracking-wider mb-2 text-white/90 uppercase" style={{ fontFamily: 'var(--font-rajdhani), sans-serif' }}>
                  Technology
                </h3>
                <p className="text-[#00E676] tracking-widest text-sm uppercase mb-6 font-semibold">
                  Advanced Security Systems
                </p>
                <div className="h-0.5 w-16 bg-[#00E676] mb-6"></div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Utilizing cutting-edge surveillance technology and AI-driven monitoring to capture every detail, ensuring your premises remain secure, day and night.
                </p>
                
                {/* Decorative buttons/stats */}
                <div className="mt-8 flex gap-4">
                  <div className="px-4 py-2 bg-black/40 border border-white/10 rounded flex items-center gap-2 text-xs text-white uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse"></span>
                    Active
                  </div>
                  <div className="px-4 py-2 bg-black/40 border border-white/10 rounded flex items-center gap-2 text-xs text-white uppercase tracking-wider">
                    <span className="text-[#00B4D8]">HD</span>
                    Vision
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content & Checklist (Ref 1) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 p-10 md:p-14 lg:p-20 bg-[#061225]/80 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient block mt-2">CYPHER SIGNAL?</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-10 leading-relaxed border-l-2 border-[#00E676] pl-6 py-1">
              We don't just install cameras; we build a fortress around your assets. Trust our experienced team to deliver unmatched security tailored to your exact needs in the UAE.
            </p>

            {/* Checklist */}
            <div className="grid gap-5">
              {reasons.map((reason, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  key={idx} 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#00E676]/10 border border-[#00E676]/30 flex items-center justify-center shrink-0 group-hover:bg-[#00E676]/20 group-hover:border-[#00E676]/50 transition-all">
                    <CheckCircle2 className="text-[#00E676] w-5 h-5 shrink-0" />
                  </div>
                  <span className="text-base font-medium text-gray-200 group-hover:text-white transition-colors">
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <Link 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-[#00E676] text-[#0A192F] px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-[#00c968] hover:shadow-[0_0_20px_rgba(0,230,118,0.4)] transition-all group"
              >
                Request Your Free Quote
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
