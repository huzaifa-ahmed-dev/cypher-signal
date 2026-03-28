"use client";
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ShieldCheck, ChevronDown, Camera, Wrench, Smartphone, ArrowUpCircle, Car, DoorOpen } from 'lucide-react';
import Link from 'next/link';

const serviceLinks = [
  { name: 'CCTV Installation', href: '/cctv-installation', icon: Camera },
  { name: 'Maintenance & Repair', href: '/maintenance-repair', icon: Wrench },
  { name: 'Remote Monitoring', href: '/remote-monitoring', icon: Smartphone },
  { name: 'System Upgrades', href: '/system-upgrades', icon: ArrowUpCircle },
  { name: 'Barrier Gate Installation', href: '/barrier-gate-installation', icon: Car },
  { name: 'Automatic Gate Systems', href: '/automatic-gate-systems', icon: DoorOpen },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Contact', href: '/contact' },
    { name: 'Blogs', href: '/blogs' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <ShieldCheck className="text-[#00E676] w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="text-xl font-bold tracking-tight">CYPHER <span className="text-[#00E676]">SIGNAL</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">

          {/* Home Link */}
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-[lab(5_0.48_-14.46)] border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-2 z-50">
                {/* Dropdown arrow */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[lab(5_0.48_-14.46)] border-l border-t border-white/10 rotate-45"></div>
                {serviceLinks.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-[#00E676]/10 transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#00E676]/10 flex items-center justify-center group-hover:bg-[#00E676]/20 transition-colors flex-shrink-0">
                        <Icon className="w-4 h-4 text-[#00E676]" />
                      </div>
                      <span className="font-medium">{svc.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
          <a href="/#contact" className="bg-[#00E676] text-[#0A192F] px-5 py-2 rounded-md font-semibold hover:bg-[#00c968] transition-colors shadow-[0_0_15px_rgba(0,230,118,0.3)]">
            Get Free Site Visit
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-gray-800 flex flex-col items-stretch py-4 gap-1">
          {/* Mobile Home Link */}
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-8 py-3 text-gray-300 hover:text-white font-medium">
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-8 py-3 text-gray-300 hover:text-white font-medium"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="bg-[lab(5_0.48_-14.46)] mx-4 rounded-xl overflow-hidden mb-2">
                {serviceLinks.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                      className="flex items-center gap-3 px-5 py-3 text-sm text-gray-400 hover:text-white hover:bg-[#00E676]/10 transition-all"
                    >
                      <Icon className="w-4 h-4 text-[#00E676] flex-shrink-0" />
                      {svc.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="px-8 py-3 text-gray-300 hover:text-white font-medium">
              {link.name}
            </Link>
          ))}
          <div className="px-8 pt-4">
            <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="block text-center bg-[#00E676] text-[#0A192F] px-6 py-3 rounded-md font-semibold">
              Free Site Visit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
