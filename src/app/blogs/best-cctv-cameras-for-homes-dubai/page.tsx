"use client";
import React from 'react';
import CTA from '@/components/CTA';
import { Calendar, User, ArrowLeft, CheckCircle, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogCCTVCamerasPage() {
  return (
    <div className="w-full bg-[#020C1B]">
      {/* Hero Banner */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F] z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00E676]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Back Button */}
          <Link href="/blogs" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00E676] transition-colors mb-10 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          {/* Category */}
          <div className="mb-6">
            <span className="inline-block bg-[#00E676]/10 border border-[#00E676]/30 text-[#00E676] text-xs font-semibold px-4 py-1.5 rounded-full">
              Home Security
            </span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-8 leading-tight"
          >
            Best CCTV Cameras for Homes in <span className="text-[#00E676]">Dubai</span>
          </motion.h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-mono mb-12 pb-12 border-b border-white/10">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#00E676]" /> March 28, 2026</span>
            <span className="flex items-center gap-2"><User className="w-4 h-4 text-[#00E676]" /> Security Expert Team</span>
            <span className="text-gray-500">6 min read</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-6 md:px-12 -mt-0 mb-0">
        <div className="aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <img src="/blog_2.png" alt="CCTV cameras for Dubai homes" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Article Body */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Dubai is one of the safest cities in the world — but that safety doesn't happen by accident. Modern home security, particularly CCTV surveillance, plays a critical role in deterring crime, monitoring access, and giving homeowners complete peace of mind. Whether you live in a luxury villa in Palm Jumeirah, a townhouse in Arabian Ranches, or an apartment in Downtown Dubai, choosing the right CCTV system for your home is one of the most important decisions you'll make.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-12">
                But with hundreds of models on the market, how do you know which camera is right for your home? This guide breaks down the best camera types, key features to look for, and recommendations tailored specifically to Dubai's climate and lifestyle.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12">Why Dubai Homes Have Unique Security Needs</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Dubai's environment presents specific challenges that many generic camera recommendations don't account for:
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Extreme heat (regularly exceeding 45°C in summer) demands IP65 or higher-rated weatherproof cameras.',
                  'Intense direct sunlight and UV exposure can degrade lenses and housings not rated for desert conditions.',
                  'Many villas have large compounds with multiple access points requiring wide-angle or PTZ (pan-tilt-zoom) coverage.',
                  'Privacy regulations in the UAE mean camera positioning must be carefully planned to avoid filming public areas.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-lg">
                    <CheckCircle className="w-5 h-5 text-[#00E676] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12">Top Camera Types for Dubai Homes</h2>

              <h3 className="text-xl font-bold text-[#00E676] mb-3">1. 4K Dome Cameras — Best for Indoor Coverage</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Dome cameras are ideal for indoor areas like hallways, living rooms, and garages. Their low-profile, vandal-resistant design is discreet and clean-looking. For villas with large interior spaces, 4K resolution ensures you can zoom into footage digitally without losing critical detail. Look for models from Hikvision or Dahua with built-in WDR (Wide Dynamic Range) for rooms with mixed lighting from windows and artificial lights.
              </p>

              <h3 className="text-xl font-bold text-[#00E676] mb-3">2. IP66 Bullet Cameras — Best for Outdoor Perimeters</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                For outdoor areas like driveways, garden perimeters, and entrance gates, bullet cameras with an IP66 weatherproof rating are the industry standard in the UAE. Their elongated form factor allows for powerful long-range IR illumination — critical for monitoring areas up to 50–80m away in complete darkness. Many bullet cameras now come with built-in AI to distinguish between humans, vehicles, and animals, reducing false alerts significantly.
              </p>

              <h3 className="text-xl font-bold text-[#00E676] mb-3">3. PTZ Cameras — Best for Large Villas &amp; Compounds</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                If your property has a large garden, a long driveway, or multiple open areas, a PTZ (Pan-Tilt-Zoom) camera provides extensive coverage from a single unit. With the ability to rotate 360° and zoom in on moving targets, PTZ cameras are excellent for properties where you need active surveillance rather than passive recording. They can be set to automatically track motion across the frame.
              </p>

              <h3 className="text-xl font-bold text-[#00E676] mb-3">4. Covert / Pinhole Cameras — Best for Discreet Monitoring</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                For areas where aesthetics matter — premium interiors, home offices, or drawing rooms — covert cameras blend seamlessly into the environment. These ultra-small lenses are often mounted within everyday objects or behind decorative panels, making them invisible to guests while still providing a clear HD video feed.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12">Key Features to Prioritise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  { title: 'Resolution', desc: 'Minimum 4MP (2K). 4K is ideal for entry points and driveways.' },
                  { title: 'Night Vision', desc: 'True Color Night Vision or IR illumination of 30m+.' },
                  { title: 'Storage', desc: 'NVR-based local storage plus cloud backup for redundancy.' },
                  { title: 'Remote Access', desc: 'Mobile app access (iOS & Android) for live view anywhere.' },
                  { title: 'AI Detection', desc: 'Human/vehicle detection to filter out irrelevant motion.' },
                  { title: 'Weather Rating', desc: 'IP65 or IP66 minimum for all outdoor installations.' },
                ].map((feat, i) => (
                  <div key={i} className="bg-[#0A192F] border border-white/10 rounded-xl p-5">
                    <h4 className="text-white font-bold mb-1">{feat.title}</h4>
                    <p className="text-gray-400 text-sm">{feat.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12">Our Recommendation for Dubai Homes</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                A typical mid-to-large villa in Dubai benefits most from a hybrid system:
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  '2–4 x 4K Bullet Cameras for the exterior perimeter and driveway.',
                  '2–4 x 4MP Dome Cameras for interior areas and covered parking.',
                  '1 x PTZ Camera for the rear garden or pool area (if large).',
                  '1 x 8-channel or 16-channel NVR with 4TB–6TB HDD for 30+ days of storage.',
                  'Mobile app integration for remote live viewing and real-time alerts.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-lg">
                    <Shield className="w-5 h-5 text-[#00E676] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#0A192F] border border-[#00E676]/30 rounded-2xl p-8 mt-12">
                <h3 className="text-xl font-bold text-white mb-3">Get a Free Site Assessment</h3>
                <p className="text-gray-300 mb-6">
                  Every home is different. Our engineers visit your property, map blind spots, and design a camera layout tailored specifically to your villa — at no extra cost.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#00E676] text-[#0A192F] px-6 py-3 rounded-xl font-bold hover:bg-[#00c968] transition-colors">
                  Book a Site Visit
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
