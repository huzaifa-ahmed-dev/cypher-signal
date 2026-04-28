"use client";
import React from 'react';
import CTA from '@/components/CTA';
import { DoorOpen, ShieldCheck, Radio, Wifi, Lock, Zap, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AutomaticGateSystemsContent() {
  const features = [
    { icon: <DoorOpen className="w-8 h-8 text-[#00E676]" />, title: 'Sliding & Swing Gates', desc: 'Custom-engineered automatic sliding and swing gates for villas, compounds, and commercial entrances.' },
    { icon: <Radio className="w-8 h-8 text-[#00E676]" />, title: 'Remote Control & Intercom', desc: 'Operate your gate via remote control, keypad, intercom, or smartphone app.' },
    { icon: <Wifi className="w-8 h-8 text-[#00E676]" />, title: 'Smart App Integration', desc: 'Open, close, and monitor your gate from anywhere using a dedicated smart home app.' },
    { icon: <Lock className="w-8 h-8 text-[#00E676]" />, title: 'RFID & Card Access', desc: 'Restrict entry to authorized personnel only with RFID card readers and PIN pads.' },
    { icon: <Zap className="w-8 h-8 text-[#00E676]" />, title: 'Safety Obstacle Detection', desc: 'Auto-reverse sensors detect obstacles in the gate path to prevent accidents and damage.' },
    { icon: <Settings className="w-8 h-8 text-[#00E676]" />, title: 'Custom Fabrication', desc: "Gates designed and fabricated to match your property's style, size, and security requirements." },
  ];

  return (
    <div className="w-full">
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F] z-0"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00E676]/5 rounded-full blur-[150px] -mt-40 -mr-40 pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00B4D8]/5 rounded-full blur-[150px] -mb-40 -ml-40 pointer-events-none z-0"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Visual Graphic */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-lg aspect-[4/3] lg:aspect-square flex items-center justify-center p-6">
               <div className="absolute inset-0 bg-[#061225] border border-white/5 rounded-[3rem] shadow-2xl transform -rotate-3"></div>
               <div className="absolute inset-4 bg-gradient-to-tr from-[#00E676]/10 to-transparent border border-[#00E676]/20 rounded-[2.5rem] transform rotate-3"></div>
               
               <img 
                 src="/auto_gate_install.png" 
                 alt="Automatic Gate Systems" 
                 className="relative z-10 w-[90%] h-[90%] object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
               />
               
               <motion.div 
                 animate={{ y: [0, -15, 0] }} 
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute -top-6 -right-6 bg-[#020C1B] p-4 rounded-2xl shadow-xl border border-white/10 z-20"
               >
                 <DoorOpen className="w-8 h-8 text-[#00E676]" />
               </motion.div>
            </div>
          </motion.div>

          {/* Right: Content Section mirroring Reference Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col items-start order-1 lg:order-2"
          >
            <div className="border-l-[6px] border-[#00E676] pl-6 md:pl-10 py-2 mb-8">
              <h2 className="text-[#00E676] font-bold tracking-[0.2em] text-sm md:text-lg uppercase mb-4" style={{ fontFamily: 'var(--font-rajdhani), sans-serif' }}>
                Smart Gate Systems
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.15] text-white uppercase tracking-tight">
                PREMIUM <br />
                AUTOMATED <br />
                GATES.
              </h1>
            </div>
            
            <p className="text-gray-400 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
              <strong className="text-white">For Homes & Businesses.</strong> Smart sliding and swing gate systems, customized for residential villas and commercial properties across the UAE.
            </p>
            
            <a 
              href="#contact-gates" 
              className="bg-[#061225] border border-white/10 text-white hover:bg-[#00E676] hover:text-[#0A192F] hover:border-[#00E676] px-10 py-5 rounded-full font-bold text-sm md:text-base uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(0,230,118,0.5)]"
            >
              Get a Gate Design Quote
            </a>
          </motion.div>

        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#061225] relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Effortless <span className="text-[#00E676]">Automation</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Our gate systems combine robust mechanical engineering with intelligent automation for years of reliable, hassle-free operation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-[#0A192F] p-8 rounded-2xl border border-white/5 hover:border-[#00E676]/30 transition-colors group">
                <div className="w-16 h-16 bg-[#00E676]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#00E676]/20 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#020C1B]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-r from-[#00E676]/20 to-[#0A192F] rounded-3xl p-8 md:p-16 border border-[#00E676]/20 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Installed Right, the First Time</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Our team handles everything from initial site survey and gate fabrication to motor installation, electrical work, and app configuration. We don't leave until your gate is working perfectly and you are fully trained on how to use it.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><ShieldCheck className="text-[#00E676] shrink-0" /> End-to-end installation including civil groundwork.</li>
                <li className="flex items-center gap-3"><ShieldCheck className="text-[#00E676] shrink-0" /> Powder-coated steel construction for UAE climate durability.</li>
                <li className="flex items-center gap-3"><ShieldCheck className="text-[#00E676] shrink-0" /> 1-year warranty on motors and installation workmanship.</li>
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-video rounded-2xl overflow-hidden relative shadow-[0_0_30px_rgba(0,230,118,0.15)] border border-white/10">
                <img
                  src="/auto_gate_install.png"
                  alt="Automatic sliding gate motor installation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B]/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-[#00E676]/20 border border-[#00E676]/30 text-[#00E676] text-xs font-bold px-3 py-1.5 rounded-full z-10">GATE AUTOMATION</div>
                <div className="absolute bottom-4 left-4 text-green-400 font-mono text-sm z-10">SMART MODE — ACTIVE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="contact-gates"><CTA /></div>
    </div>
  );
}
