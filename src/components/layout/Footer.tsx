import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2 text-gray-400">
          <Link href="/" className="flex items-center gap-2 mb-4 text-white">
            <ShieldCheck className="text-[#00E676] w-6 h-6" />
            <span className="text-lg font-bold tracking-tight">CYPHER <span className="text-[#00E676]">SIGNAL</span></span>
          </Link>
          <p className="max-w-md">
            State-of-the-art CCTV and smart security installations protecting homes and businesses across the United Arab Emirates since 2012.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/#services" className="hover:text-[#00E676] transition-colors">Services</Link></li>
            <li><Link href="/#why-us" className="hover:text-[#00E676] transition-colors">Why Choose Us</Link></li>
            <li><Link href="/#how-it-works" className="hover:text-[#00E676] transition-colors">Process</Link></li>
            <li><Link href="/contact" className="hover:text-[#00E676] transition-colors">Contact</Link></li>
            <li><Link href="/blogs" className="hover:text-[#00E676] transition-colors">Blogs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#00E676] shrink-0" />
              <span><a href="tel:+971547172486">+971 54 717 2486</a></span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#00E676] shrink-0" />
              <span><a href="mailto:info@cyphersignal.com">info@cyphersignal.com</a></span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#00E676] shrink-0" />
              <span>Business Bay, Dubai, UAE</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} CYPHER SIGNAL. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
          <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
