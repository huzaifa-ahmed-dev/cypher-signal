"use client";
import { motion } from 'framer-motion';

const steps = [
  { num: "1", title: "Contact Us", desc: "Reach out via Call or WhatsApp to discuss your security needs." },
  { num: "2", title: "Site Inspection", desc: "Our technicians visit to identify vulnerabilities and blind spots." },
  { num: "3", title: "Security Plan", desc: "We design a tailored security layout and provide a transparent quote." },
  { num: "4", title: "Installation", desc: "Fast, unobtrusive installation with complete network configuration." }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-[#0A192F] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How It <span className="text-gradient">Works</span></h2>
          <p className="text-gray-400 text-lg">A streamlined, hassle-free process to secure your premises in four easy steps.</p>
        </div>

        {/* Process Flow - Desktop Curved Layout */}
        <div className="relative  mx-auto">

          {/* SVG Curved Wave Path (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-[60%] z-0 pointer-events-none">
            <svg
              viewBox="0 0 1000 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full h-full stroke-[#00E676]/30 overflow-visible"
              style={{ filter: "drop-shadow(0px 0px 8px rgba(0,230,118,0.2))" }}
            >
              {/* Animated drawing of the path */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M 50,100 C 150,180 250,50 350,100 C 450,150 550,20 650,100 C 750,170 850,80 950,100"
                strokeWidth="3"
                strokeDasharray="8 8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => {
              // Creating the wave effect vertically
              const isEven = idx % 2 === 0;
              const yOffset = isEven ? 'md:translate-y-[-40px]' : 'md:translate-y-[40px]';

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className={`relative flex flex-col items-center text-center ${yOffset}`}
                >

                  {/* Faint large background number */}
                  <div className="absolute top-0 right-0 left-0 -translate-y-12 md:-translate-y-16 text-8xl md:text-9xl font-black text-white/[0.03] select-none z-0 pointer-events-none">
                    {step.num}
                  </div>

                  {/* Icon / Number Node */}
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#061225] border-2 border-[#00E676] rounded-2xl flex items-center justify-center text-xl md:text-2xl font-bold text-white shadow-[0_0_20px_rgba(0,230,118,0.3)] rotate-45 mb-8 md:mb-10 z-10 group hover:bg-[#00E676] hover:text-[#0A192F] transition-all duration-300">
                    <div className="-rotate-45">{step.num}</div>
                  </div>

                  {/* Content Box */}
                  <div className="relative z-10 w-full max-w-[240px]">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
