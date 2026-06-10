"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "The Villa", href: "/villa" },
  { name: "Amenities", href: "/amenities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Location", href: "/location" }, // Added Location
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
      {/* Navbar Container */}
      <nav
        className={`mx-auto transition-all duration-500 ease-in-out border-b border-white/10 ${
          scrolled
            ? "mt-4 w-[90%] px-6 py-3 rounded-2xl bg-[#2D3A3A]/70 backdrop-blur-md border border-white/10 shadow-xl"
            : "w-full px-6 py-6 bg-[#2D3A3A]/30 backdrop-blur-sm border-b border-white/5"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-[1001]">
            <div className="relative w-12 h-12">
              <Image src="/images/logo.png" alt="Logo" fill className="object-contain" priority />
            </div>
            <span className="font-serif text-lg font-bold text-white tracking-widest hidden sm:block">
              SILVER STEPS
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 text-white font-medium text-sm">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#C5A059] transition">
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
        <Link
  href="/booking"
  className="hidden lg:block bg-[#C5A059] text-[#2D3A3A] px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-transform text-sm"
>
  BOOK NOW
</Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden relative z-[1001] w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenu ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenu ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenu ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - FIXED BUG */}
     {/* Mobile Menu Overlay */}
<div 
  className={`fixed inset-0 z-[999] bg-[#2D3A3A] pt-10 px-8 transition-all duration-500 ease-in-out ${
    mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
>
  {/* Dedicated Close Button */}
  <div className="flex justify-end mb-10">
    <button 
      onClick={() => setMobileMenu(false)}
      className="text-white text-4xl font-light hover:text-[#C5A059] transition-colors"
    >
      ×
    </button>
  </div>

  <div className="flex flex-col gap-8 text-3xl font-serif text-white items-center">
    {NAV_LINKS.map((link) => (
      <Link key={link.name} href={link.href} onClick={() => setMobileMenu(false)} className="hover:text-[#C5A059]">
        {link.name}
      </Link>
    ))}
    <Link 
  href="/booking" 
  onClick={() => setMobileMenu(false)}
  className="mt-4 bg-[#C5A059] text-[#2D3A3A] px-10 py-4 rounded-full text-lg font-bold text-center"
>
  BOOK YOUR STAY
</Link>
  </div>
</div>
    </header>
  );
}