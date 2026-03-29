"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pb-8 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Security Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#020C1B] opacity-80 z-10"></div>
        {/* Abstract CCTV/Security Grid Pattern */}
        <div className="absolute inset-0 z-10 opacity-30" style={{ backgroundImage: 'radial-gradient(#00E676 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#00E676]/30 bg-[#00E676]/10 text-[#00E676] font-medium text-sm mt-8"
          >
            #1 Security Solutions in the UAE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 leading-tight"
          >
            Protect What Matters Most with <span className="text-gradient">Smart CCTV & Security Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto"
          >
            24/7 surveillance, barrier gate systems, and expert security installations across the UAE
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#contact" className="flex items-center justify-center gap-2 bg-[#00E676] text-[#0A192F] px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-[#00c968] transition-all shadow-[0_0_20px_rgba(0,230,118,0.4)] hover:shadow-[0_0_30px_rgba(0,230,118,0.6)]">
              Get Free Site Visit <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://wa.me/971547172486" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 hover:border-white/50 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all">
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
