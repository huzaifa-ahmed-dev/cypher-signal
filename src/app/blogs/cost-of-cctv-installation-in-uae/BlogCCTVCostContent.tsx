"use client";
import React from 'react';
import CTA from '@/components/CTA';
import { Calendar, User, ArrowLeft, CheckCircle, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogCCTVCostContent() {
  return (
    <div className="w-full bg-[#020C1B]">
      {/* Hero Banner */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A192F] z-0"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00E676]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00E676] transition-colors mb-10 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <div className="mb-6">
            <span className="inline-block bg-[#00E676]/10 border border-[#00E676]/30 text-[#00E676] text-xs font-semibold px-4 py-1.5 rounded-full">
              Installation Guide
            </span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-8 leading-tight"
          >
            Cost of CCTV Installation in the <span className="text-[#00E676]">UAE</span>
          </motion.h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-mono mb-12 pb-12 border-b border-white/10">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#00E676]" /> March 25, 2026</span>
            <span className="flex items-center gap-2"><User className="w-4 h-4 text-[#00E676]" /> Project Management</span>
            <span className="text-gray-500">8 min read</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-6 md:px-12 mb-0">
        <div className="aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <img src="/blog_1.png" alt="CCTV installation cost UAE" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Article Body */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                One of the most common questions we receive from homeowners and business owners across Dubai, Abu Dhabi, and Sharjah is: <strong className="text-white">"How much does CCTV installation cost in the UAE?"</strong> The honest answer is — it depends. But this guide gives you a comprehensive, transparent breakdown of every cost factor so you can budget accurately and avoid surprises.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12">Summary: Typical Pricing Ranges in the UAE</h2>
              <div className="overflow-x-auto mb-10">
                <table className="w-full border border-white/10 rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-[#0A192F] text-left">
                      <th className="px-6 py-4 text-white font-semibold">System Type</th>
                      <th className="px-6 py-4 text-white font-semibold">Cameras</th>
                      <th className="px-6 py-4 text-[#00E676] font-semibold">Estimated Cost (AED)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: 'Basic Apartment', cameras: '2–4 cameras', cost: '1,200 – 2,500' },
                      { type: 'Standard Villa', cameras: '4–8 cameras', cost: '2,500 – 5,500' },
                      { type: 'Large Villa / Compound', cameras: '8–16 cameras', cost: '5,500 – 12,000' },
                      { type: 'Small Business / Shop', cameras: '4–8 cameras', cost: '2,000 – 6,000' },
                      { type: 'Commercial Building', cameras: '16–32+ cameras', cost: '12,000 – 40,000+' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-t border-white/10 ${i % 2 === 0 ? 'bg-[#061225]' : 'bg-[#020C1B]'}`}>
                        <td className="px-6 py-4 text-gray-300">{row.type}</td>
                        <td className="px-6 py-4 text-gray-300">{row.cameras}</td>
                        <td className="px-6 py-4 text-[#00E676] font-mono">{row.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-400 text-sm mb-12 italic">Note: All prices include supply, installation, cabling, NVR, and basic app configuration. VAT may apply.</p>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12">What Factors Affect the Price?</h2>

              <h3 className="text-xl font-bold text-[#00E676] mb-3">1. Number of Cameras</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                This is the most direct cost driver. A basic 4-camera system is far cheaper than a 32-camera enterprise deployment. However, there are economies of scale — the cost per camera decreases as the total number increases, since many fixed costs (cabling runs, NVR equipment, site visit labour) are shared across the project.
              </p>

              <h3 className="text-xl font-bold text-[#00E676] mb-3">2. Camera Quality &amp; Resolution</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Entry-level 2MP cameras cost as little as AED 150–250 per unit. Mid-range 4MP cameras cost AED 300–500. Premium 4K (8MP) cameras can reach AED 600–1,200 each. For most homes, 4MP is the sweet spot — excellent image quality without the extreme storage demands of 4K. For businesses needing license plate recognition or facial identification at entry points, 4K is worth the premium.
              </p>

              <h3 className="text-xl font-bold text-[#00E676] mb-3">3. Installation Complexity</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Labour costs in the UAE typically range from AED 200–500 per camera depending on complexity. A simple indoor installation with direct line-of-sight cabling routes is cheapest. Installations requiring conduit routing through walls, ceiling voids, or outdoor runs across large distances cost more. Multi-storey buildings, properties requiring lift rope access, or deep cable concealment all add to labour time.
              </p>

              <h3 className="text-xl font-bold text-[#00E676] mb-3">4. Recording System (NVR/DVR)</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                An NVR (Network Video Recorder) is the brain of your CCTV system. A quality 4-channel NVR costs AED 400–800, while a 16-channel unit with 4TB storage runs AED 1,500–3,000. Brands like Hikvision, Dahua, and Hanwha offer excellent reliability. Avoid cheap unbranded NVRs — they often fail within 12–18 months.
              </p>

              <h3 className="text-xl font-bold text-[#00E676] mb-3">5. Cabling &amp; Infrastructure</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                High-grade Cat6 Ethernet cable, conduit, junction boxes, and PoE switches form the backbone of a reliable IP CCTV system. Cutting corners here is a false economy — poor cabling causes intermittent signal loss, poor image quality, and early system failure. Budget AED 800–5,000 for cabling depending on property size.
              </p>

              <h3 className="text-xl font-bold text-[#00E676] mb-3">6. Ongoing Maintenance Contract</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                An annual preventive maintenance contract (AMC) typically costs AED 500–1,500 per year for residential systems. This covers lens cleaning, firmware updates, connection tests, and priority response for any faults. We strongly recommend this for business owners and villa owners who rely on their systems for active security.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12">Red Flags When Getting Quotes</h2>
              <ul className="space-y-4 mb-10">
                {[
                  'Quotes that don\'t specify camera brands or resolution — usually means budget, off-brand hardware.',
                  'Labour-only quotes with suspiciously cheap camera costs — often results in poor image quality.',
                  'No mention of warranty — reputable installers offer at least 1-year parts and labour warranty.',
                  'No site survey offered before quoting — proper pricing is impossible without seeing the property.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-lg">
                    <Shield className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12">Getting the Best Value</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The best approach to CCTV installation is never the cheapest upfront — it's the lowest total cost of ownership over 5–10 years. This means:
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Investing in quality cameras from established brands (Hikvision, Dahua, Hanwha, Axis).',
                  'Using a certified, experienced installation company with verifiable UAE references.',
                  'Planning your cabling infrastructure for future expansion — add camera points even if not used immediately.',
                  'Including a maintenance contract to extend hardware lifespan significantly.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-lg">
                    <CheckCircle className="w-5 h-5 text-[#00E676] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#0A192F] border border-[#00E676]/30 rounded-2xl p-8 mt-12">
                <h3 className="text-xl font-bold text-white mb-3">Get a Transparent, Itemised Quote</h3>
                <p className="text-gray-300 mb-6">
                  We provide fully itemised quotations with camera make/model, cabling estimate, labour breakdown, and warranty terms — no hidden costs. Schedule a free site survey today.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#00E676] text-[#0A192F] px-6 py-3 rounded-xl font-bold hover:bg-[#00c968] transition-colors">
                  Get a Free Quote
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
