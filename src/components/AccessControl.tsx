"use client";
import { motion } from 'framer-motion';
import { CarFront, KeySquare, Radio, Smartphone, Link } from 'lucide-react';

const accessSolutions = [
  {
    icon: <CarFront className="w-8 h-8 text-[#00E676]" />,
    title: "Barrier Gate Systems",
    desc: "Durable and fast-acting barrier gates for parking management and restricted access areas."
  },
  {
    icon: <KeySquare className="w-8 h-8 text-[#00E676]" />,
    title: "Automatic Sliding & Swing Gates",
    desc: "Heavy-duty automated gates that combine security with elegant design for homes and businesses."
  },
  {
    icon: <Radio className="w-8 h-8 text-[#00E676]" />,
    title: "RFID & Card Access",
    desc: "Secure entry systems using proximity cards, key fobs, or biometric scanners."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#00E676]" />,
    title: "Remote-Controlled Entry",
    desc: "Open and close your gates from anywhere using your smartphone or remote transmitters."
  },
  {
    icon: <Link className="w-8 h-8 text-[#00E676]" />,
    title: "CCTV Integration",
    desc: "Sync your access control with surveillance cameras for full auditory and visual verification."
  }
];

export default function AccessControl() {
  return (
    <section id="access-control" className="py-16 md:py-24 bg-[#020C1B] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E676]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#00E676]/30 bg-[#00E676]/10 text-[#00E676] font-medium text-sm"
          >
            Complete Security Solution
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 md:mb-6"
          >
            Smart <span className="text-[#00E676]">Access Control</span> Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-base md:text-lg"
          >
            Seamlessly control who enters your property with advanced gate automation and smart entry systems designed for maximum security and convenience.
          </motion.p>
        </div>

        {/* Minimal divided grid — 3 top row + 2 bottom row centered */}
        <div className="max-w-5xl mx-auto border border-white/8 rounded-2xl overflow-hidden divide-y divide-white/8">
          {/* Row 1 — 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/8">
            {accessSolutions.slice(0, 3).map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center px-8 py-10 hover:bg-white/3 transition-colors duration-300 group"
              >
                <div className="text-[#00E676] mb-5 opacity-80 group-hover:opacity-100 transition-opacity">
                  {solution.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{solution.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Row 2 — 2 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/8">
            {accessSolutions.slice(3).map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx + 3) * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center px-8 py-10 hover:bg-white/3 transition-colors duration-300 group"
              >
                <div className="text-[#00E676] mb-5 opacity-80 group-hover:opacity-100 transition-opacity">
                  {solution.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
