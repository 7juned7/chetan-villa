"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// FIX: Added display="block" to ensure it renders correctly
const InstagramIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    display="block" 
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "The Villa", href: "/villa" },
  { name: "Amenities", href: "/amenities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Location", href: "/location" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-[1000]">
      <nav
        className={`mx-auto transition-all duration-500 ease-in-out border-b ${
          scrolled
            ? "mt-4 w-[90%] px-6 py-2 rounded-2xl bg-sage/85 backdrop-blur-md border-white/10 shadow-xl"
            : "w-full px-6 py-3 bg-sage/30 backdrop-blur-sm border-white/5"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 relative z-[1001]">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
              <img 
                src="https://res.cloudinary.com/ddy8vp8zy/image/upload/q_auto,f_auto,w_120/v1781185137/chetan-villa/logo.png"
                alt="Silver Steps Villa Logo"
                width="96"
                height="96"
                className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                loading="eager"
              />
            </div>
            <span className="font-serif text-lg font-bold text-white tracking-widest hidden sm:block">
              SILVER STEPS
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-white font-medium text-sm">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className="nav-link hover:text-gold transition pb-1">
                {link.name}
              </Link>
            ))}
            {/* Real Instagram Link */}
            <a href="https://www.instagram.com/silverstepsvilla/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
          </div>

          <Link href="/booking" className="hidden lg:block bg-gold text-sage px-6 py-2.5 rounded-full font-bold hover:bg-white hover:scale-105 transition-all text-sm shadow-md">
            BOOK NOW
          </Link>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden relative z-[1001] w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${mobileMenu ? "rotate-45 translate-y-2" : "-translate-y-0.5"}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${mobileMenu ? "opacity-0" : "opacity-100"}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${mobileMenu ? "-rotate-45 -translate-y-2" : "translate-y-0.5"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[9999] bg-sage/98 backdrop-blur-lg pt-10 px-8 transition-all duration-500 ease-in-out flex flex-col justify-center ${mobileMenu ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-10"}`}>
        <div className="absolute top-6 right-6">
          <button onClick={() => setMobileMenu(false)} className="text-white text-4xl font-light hover:text-gold transition p-2 cursor-pointer" aria-label="Close mobile menu">×</button>
        </div>
        <div className="flex flex-col gap-8 text-3xl font-serif text-white items-center">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setMobileMenu(false)} className="hover:text-gold transition">
              {link.name}
            </Link>
          ))}
          {/* Real Instagram Link Mobile */}
          <a href="https://www.instagram.com/silverstepsvilla/" target="_blank" rel="noopener noreferrer" className="mt-8 justify-center items-center flex gap-2 text-white hover:text-gold transition" aria-label="Instagram">
           Instagram <InstagramIcon size={32} />
          </a>
          <Link href="/booking" onClick={() => setMobileMenu(false)} className="mt-4 bg-gold text-sage px-10 py-4 rounded-full text-lg font-bold text-center shadow-lg hover:bg-white hover:scale-105 transition-all">
            BOOK YOUR STAY
          </Link>
        </div>
      </div>
    </header>
  );
}