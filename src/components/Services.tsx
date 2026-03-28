"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Wrench, Smartphone, ArrowUpCircle, Car, DoorOpen, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Camera className="w-8 h-8 text-[#00E676]" />,
    title: "CCTV Installation",
    desc: "Complete camera system setups for homes, offices, and warehouses with zero blind spots.",
    link: "/cctv-installation",
    image: "/service_cctv.png",
  },
  {
    icon: <Wrench className="w-8 h-8 text-[#00E676]" />,
    title: "Maintenance & Repair",
    desc: "Fast troubleshooting, hardware repair, and routine maintenance for existing networks.",
    link: "/maintenance-repair",
    image: "/service_maintenance.png",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#00E676]" />,
    title: "Remote Monitoring",
    desc: "Access your camera feeds 24/7 globally via secure mobile applications.",
    link: "/remote-monitoring",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    icon: <ArrowUpCircle className="w-8 h-8 text-[#00E676]" />,
    title: "System Upgrades",
    desc: "Upgrade legacy analog systems to high-definition IP camera networks seamlessly.",
    link: "/system-upgrades",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    icon: <Car className="w-8 h-8 text-[#00E676]" />,
    title: "Barrier Gate Installation",
    desc: "Robust barrier gates for parking and access control in commercial properties.",
    link: "/barrier-gate-installation",
    image: "/service_barrier.png",
  },
  {
    icon: <DoorOpen className="w-8 h-8 text-[#00E676]" />,
    title: "Automatic Gate Systems",
    desc: "Smart sliding and swing gates customized for residential and commercial use.",
    link: "/automatic-gate-systems",
    image: "/service_autogate.png",
  }
];

// Helpers for infinite loop math
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

// Returns transform for each card relative to the active index
function getCardStyle(idx: number, active: number, total: number) {
  // We want to find the shortest distance between this card and the active card in a circle
  let offset = idx - active;
  
  // Normalize offset to be between -half and +half of the total cards
  const half = total / 2;
  if (offset > half) offset -= total;
  else if (offset < -half) offset += total;

  const absOffset = Math.abs(offset);
  
  // Only show the active card + 2 on each side (5 total visible cards)
  if (absOffset > 2) return { display: 'none', zIndex: -1 };

  const xPercent = offset * 105; 
  const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.82 : 0.66;
  const rotateY = offset * -18;
  const zIndex = 10 - absOffset;
  const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.75 : 0.45;
  const translateZ = absOffset === 0 ? 0 : absOffset === 1 ? -80 : -160;

  return { xPercent, scale, rotateY, zIndex, opacity, translateZ, display: 'block' };
}

export default function Services() {
  // Start at index 2 (Remote Monitoring)
  const [activeVirtual, setActiveVirtual] = useState(2);
  
  // Real active index mapped to 0-5
  const activeReal = wrap(0, services.length, activeVirtual);

  // Mouse drag state
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const prev = () => setActiveVirtual((a) => a - 1);
  const next = () => setActiveVirtual((a) => a + 1);

  // ── Mouse drag handlers ──────────────────────────────────────────────────────
  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 8) isDragging.current = true;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 50) {
      delta < 0 ? next() : prev();
    }
    dragStartX.current = null;
  };

  const handleMouseLeave = () => {
    dragStartX.current = null;
    isDragging.current = false;
  };

  const activeSvc = services[activeReal];

  return (
    <section id="services" className="pt-28 pb-16 md:pt-40 md:pb-24 bg-[#0A192F] relative overflow-hidden scroll-mt-20">
      {/* Ambient background */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#020C1B] to-transparent z-0"></div>
      <div className="absolute -left-40 top-40 w-96 h-96 bg-[#00E676]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#00E676]/30 bg-[#00E676]/10 text-[#00E676] font-medium text-sm"
            >
              Our Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              End-to-End <span className="text-[#00E676]">Security</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg md:text-xl leading-relaxed"
            >
              We provide comprehensive security integrations utilizing the latest technology to ensure absolute surveillance and fortified boundaries.
            </motion.p>
          </div>

          {/* Nav Buttons */}
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="group w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-[#061225]/40 backdrop-blur-md flex items-center justify-center hover:border-[#00E676]/50 hover:bg-[#00E676]/10 hover:shadow-[0_0_20px_rgba(0,230,118,0.2)] transition-all duration-300 shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#00E676] group-hover:-translate-x-0.5 transition-all duration-300" />
            </button>
            <button
              onClick={next}
              className="group w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-[#061225]/40 backdrop-blur-md flex items-center justify-center hover:border-[#00E676]/50 hover:bg-[#00E676]/10 hover:shadow-[0_0_20px_rgba(0,230,118,0.2)] transition-all duration-300 shadow-lg"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-[#00E676] group-hover:translate-x-0.5 transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* 3D Fan Carousel */}
        <div
          className="relative flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
          style={{ height: '420px', perspective: '1200px' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {services.map((svc, relativeIdx) => {
            // Because it's an infinite loop, we map over the physical array but calculate offset from activeReal
            // We temporarily adjust the index based on activeVirtual to get the continuous wrapped effect
            let virtualIdx = activeVirtual + (relativeIdx - activeReal);
            if (relativeIdx - activeReal > services.length / 2) virtualIdx -= services.length;
            if (relativeIdx - activeReal < -services.length / 2) virtualIdx += services.length;

            const style = getCardStyle(virtualIdx, activeVirtual, services.length);
            if (style.display === 'none') return null;
            const isActive = relativeIdx === activeReal;

            return (
              <motion.div
                key={relativeIdx}
                onClick={() => {
                  if (!isDragging.current) setActiveVirtual(virtualIdx);
                }}
                animate={{
                  x: `${style.xPercent}%`,
                  scale: style.scale,
                  rotateY: style.rotateY,
                  opacity: style.opacity,
                  translateZ: style.translateZ,
                  zIndex: style.zIndex,
                }}
                transition={{ type: 'spring', stiffness: 280, damping: 32 }}
                className="absolute w-[300px] md:w-[340px] h-[400px] md:h-[440px] rounded-[2rem] overflow-hidden cursor-pointer flex-shrink-0"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Full-bleed image */}
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark overlay — stronger at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10"></div>

                {/* Active border glow */}
                <div className={`absolute inset-0 rounded-[2rem] border z-20 transition-all duration-500 pointer-events-none ${isActive ? 'border-[#00E676]/60 shadow-[inset_0_0_30px_rgba(0,230,118,0.1)]' : 'border-white/10'}`}></div>

                {/* Content pinned to bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-30 p-7">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${isActive ? 'bg-[#00E676]/20 border border-[#00E676]/40 shadow-[0_0_20px_rgba(0,230,118,0.3)]' : 'bg-black/40 border border-white/10'}`}>
                    {svc.icon}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{svc.title}</h3>

                  {/* Description — only fully visible on active */}
                  <p className={`text-sm leading-relaxed transition-all duration-400 ${isActive ? 'text-gray-300 max-h-20 opacity-100' : 'text-gray-400 max-h-10 opacity-70 line-clamp-2'}`}>
                    {svc.desc}
                  </p>

                  {/* CTA for active card */}
                  {isActive && svc.link && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.15 }}
                        className="mt-4"
                      >
                        <Link
                          href={svc.link}
                          className="inline-flex items-center gap-2 bg-[#00E676] text-[#0A192F] px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#00c968] transition-colors shadow-[0_0_15px_rgba(0,230,118,0.4)]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Learn More <ArrowRight className="w-4 h-4" />
                        </Link>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                // Find shortest path to this dot
                let target = activeVirtual + (idx - activeReal);
                if (idx - activeReal > services.length / 2) target -= services.length;
                if (idx - activeReal < -services.length / 2) target += services.length;
                setActiveVirtual(target);
              }}
              className={`rounded-full transition-all duration-300 ${idx === activeReal ? 'w-8 h-2 bg-[#00E676]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
