import Link from "next/link";
// React-icons se import karna ab error-free hoga
import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarker } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2D3A3A] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
        
        {/* Brand Section */}
        <div>
          <h3 className="font-serif text-2xl text-[#C5A059] mb-4">SILVER STEPS</h3>
          <p className="text-white/60 leading-relaxed">
            Experience the tranquility of Bhimtal. Your luxury 3BHK getaway awaits.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4 uppercase tracking-widest text-sm text-[#C5A059]">Quick Links</h4>
          <ul className="space-y-2 text-white/60">
            <li><Link href="/villa" className="hover:text-white transition">The Villa</Link></li>
            <li><Link href="/amenities" className="hover:text-white transition">Amenities</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-4 uppercase tracking-widest text-sm text-[#C5A059]">Reach Us</h4>
          <div className="space-y-3 text-white/60">
            <p className="flex items-center gap-2"><FaMapMarker /> Bhimtal, Uttarakhand</p>
            <p className="flex items-center gap-2"><FaPhone /> +91 89209 24077</p>
            <p className="flex items-center gap-2"><FaEnvelope /> info@silversteps.com</p>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#C5A059] transition"><FaInstagram size={20} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#C5A059] transition"><FaLinkedin size={20} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#C5A059] transition"><FaTwitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Silver Steps Villa. All Rights Reserved.
      </div>
    </footer>
  );
}