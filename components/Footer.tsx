"use client";

import Link from "next/link";

// Custom SVG Icons
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#2D3A3A] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h3 className="font-serif text-2xl text-[#C5A059] mb-4">Silver Steps Villa</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Experience tranquility above the clouds. A luxury 3BHK getaway in the heart of Bhimtal, crafted for memories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-[#C5A059] mb-4 uppercase tracking-widest text-sm">Explore</h4>
          <ul className="space-y-3 text-white/80">
            <li><Link href="/" className="hover:text-[#C5A059] transition">Home</Link></li>
            <li><Link href="/villa" className="hover:text-[#C5A059] transition">The Villa</Link></li>
            <li><Link href="/amenities" className="hover:text-[#C5A059] transition">Amenities</Link></li>
            <li><Link href="/location" className="hover:text-[#C5A059] transition">Location</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-bold text-[#C5A059] mb-4 uppercase tracking-widest text-sm">Connect</h4>
          <div className="flex justify-center md:justify-start gap-6">
            <a href="https://www.instagram.com/silverstepsvilla/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition">
              <InstagramIcon />
            </a>
            <a href="https://wa.me/918920924077" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition">
              <WhatsAppIcon />
            </a>
          </div>
          <p className="mt-6 text-white/50 text-xs">© 2026 Silver Steps Villa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}