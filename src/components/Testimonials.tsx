"use client";
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Ahmed Al Mansoori",
    role: "Warehouse Manager, Dubai",
    text: "CYPHER SIGNAL transformed our warehouse monitoring. The free site visit was extremely helpful, and the CCTV and barrier gate installation was flawless."
  },
  {
    name: "Sarah Matthews",
    role: "Homeowner, Abu Dhabi",
    text: "I feel much safer knowing my home is protected by their systems. The technicians set up our new automatic sliding gate and cameras in record time."
  },
  {
    name: "Omar Tariq",
    role: "Retail Store Owner, Sharjah",
    text: "Affordable pricing without compromising on quality. The cameras provide crystal clear footage and the smart access control solved our employee tracking issues."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="pt-16 pb-8 md:py-24 bg-[#020C1B]">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">Trusted by <span className="text-[#00E676]">Hundreds</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="glass-panel p-8 rounded-2xl relative"
            >
              <div className="flex gap-1 mb-4 md:mb-6 text-[#00E676]">
                {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-4 h-4 md:w-5 md:h-5" />)}
              </div>
              <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 italic">"{rev.text}"</p>
              <div>
                <h4 className="font-bold text-sm md:text-base text-white">{rev.name}</h4>
                <p className="text-xs md:text-sm text-[#00E676]">{rev.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
