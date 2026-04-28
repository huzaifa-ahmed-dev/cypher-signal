"use client";
import React from 'react';
import CTA from '@/components/CTA';
import { Calendar, User, ArrowRight, Shield, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'Best CCTV Cameras for Homes in Dubai',
    slug: 'best-cctv-cameras-for-homes-dubai',
    excerpt: 'A comprehensive guide to choosing the perfect home surveillance system tailored for Dubai\'s climate and security needs.',
    category: 'Home Security',
    author: 'Security Expert Team',
    date: 'January 15, 2026',
    image: '/blog_2.png',
    readTime: '6 min read'
  },
  {
    id: 2,
    title: 'Cost of CCTV Installation in UAE',
    slug: 'cost-of-cctv-installation-in-uae',
    excerpt: 'Detailed breakdown of factors influencing CCTV installation prices in the UAE, from hardware choices to labor.',
    category: 'Installation Guide',
    author: 'Project Management',
    date: 'January 2, 2026',
    image: '/blog_1.png',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Barrier Gate vs Manual Gate – Which is Better?',
    slug: 'barrier-gate-vs-manual-gate',
    excerpt: 'Comparing efficiency, security, and long-term costs of automatic barrier systems versus traditional manual gates.',
    category: 'Access Control',
    author: 'Infrastructure Team',
    date: 'December 18, 2025',
    image: '/blog_3.png',
    readTime: '5 min read'
  }
];

export default function BlogsContent() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/blogs_hero_banner.png"
            alt="Blogs Hero"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Layered gradients over image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020C1B]/95 via-[#020C1B]/75 to-[#020C1B]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-transparent to-transparent" />
        </div>

        {/* Decorative animated glow orbs */}
        <div className="absolute top-10 right-1/4 w-[350px] h-[350px] bg-[#00E676]/10 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse" />
        <div className="absolute bottom-0 left-1/3 w-[250px] h-[250px] bg-[#00E676]/5 rounded-full blur-[90px] pointer-events-none z-0" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 py-32 md:py-40">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00E676]/40 bg-[#00E676]/10 mb-6"
            >
              <BookOpen className="w-4 h-4 text-[#00E676]" />
              <span className="text-[#00E676] text-sm font-semibold tracking-widest uppercase">Cypher Signal Blog</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
            >
              Security <span className="text-[#00E676]">Insights</span>
              <br />& Expert News
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
            >
              Stay ahead with the latest CCTV, access control, and smart security knowledge from UAE's trusted security professionals.
            </motion.p>

            {/* Stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: '📰', label: '3 Articles' },
                { icon: '🔒', label: 'Security Experts' },
                { icon: '🇦🇪', label: 'UAE Focused' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-white/80 font-medium"
                >
                  <span>{stat.icon}</span>
                  <span>{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020C1B] to-transparent z-10" />
      </section>

      {/* Blog Grid Section */}
      <section className="pt-8 pb-20 md:pb-28 bg-[#020C1B]">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
             <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
               <Shield className="text-[#00E676] w-8 h-8" />
               Latest Articles
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0A192F] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00E676]/40 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-900 border-b border-white/10">
                  <div className="absolute top-4 left-4 z-10 bg-[#0A192F]/80 backdrop-blur-md border border-white/10 text-xs font-semibold px-3 py-1.5 rounded-full text-[#00E676]">
                    {post.category}
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-mono">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
                  </div>
                  
                  <Link href={`/blogs/${post.slug}`}>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-[#00E676] transition-colors line-clamp-2 cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-400 leading-relaxed mb-8 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-500 font-mono">{post.readTime}</span>
                    <Link href={`/blogs/${post.slug}`} className="inline-flex items-center gap-2 text-[#00E676] font-semibold text-sm group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      <CTA />
    </div>
  );
}
