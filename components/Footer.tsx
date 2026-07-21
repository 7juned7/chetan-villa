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
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-sage text-white py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h3 className="font-serif text-2xl text-gold mb-4">Silver Steps Villa</h3>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            Experience tranquility above the clouds. A luxury 3BHK getaway in the heart of Bhimtal, Uttarakhand, crafted for timeless memories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-gold mb-4 uppercase tracking-widest text-sm font-serif">Explore</h4>
          <ul className="space-y-3 text-white/85 text-sm">
            <li><Link href="/" className="hover:text-gold transition">Home</Link></li>
            <li><Link href="/villa" className="hover:text-gold transition">The Villa</Link></li>
            <li><Link href="/amenities" className="hover:text-gold transition">Amenities</Link></li>
            <li><Link href="/gallery" className="hover:text-gold transition">Gallery</Link></li>
            <li><Link href="/location" className="hover:text-gold transition">Location</Link></li>
            <li><Link href="/policies" className="hover:text-gold transition">Policies & Rules</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-bold text-gold mb-4 uppercase tracking-widest text-sm font-serif">Connect</h4>
          <div className="flex justify-center md:justify-start gap-6">
            <a href="https://www.instagram.com/silverstepsvilla/" target="_blank" rel="noopener noreferrer" className="hover:text-gold text-white/80 transition transform hover:scale-110">
              <InstagramIcon />
            </a>
            <a href="https://wa.me/918920924077" target="_blank" rel="noopener noreferrer" className="hover:text-gold text-white/80 transition transform hover:scale-110">
              <WhatsAppIcon />
            </a>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-white/50 text-xs">© 2026 Silver Steps Villa. All rights reserved.</p>
            <p className="text-white/40 text-xs mt-2">
              Designed by{" "}
              <a href="https://webjuncture.in" target="_blank" rel="noopener noreferrer" className="text-gold font-medium hover:underline">
                WebJuncture
              </a>{" "}
              —{" "}
              <a href="https://webjuncture.in" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold transition">
                webjuncture.in
              </a>
              {" • "}
              <a href="https://www.instagram.com/webjuncture/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold transition">
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}