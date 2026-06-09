"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "The Villa", href: "/villa" },
  { name: "Amenities", href: "/amenities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Scroll lock jab mobile menu open ho
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenu]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-[100]">
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
          <Link href="/" className="flex items-center gap-2 z-[101]">
            <div className="relative w-14 h-14">
              <Image src="/images/logo.png" alt="Logo" fill className="object-contain" priority />
            </div>
            <span className="font-serif text-lg font-bold text-white tracking-widest hidden sm:block">
              SILVER STEPS
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 text-white font-medium">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-gold transition">
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/918920924077"
            target="_blank"
            className="hidden lg:block bg-gold text-navy px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-transform text-sm"
          >
            BOOK NOW
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden relative z-[101] w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenu ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenu ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenu ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Z-index high rakha hai */}
      <div 
        className={`fixed inset-0 z-[60] bg-navy pt-32 px-8 transition-opacity duration-300 ${
          mobileMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-8 text-3xl font-serif text-white">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setMobileMenu(false)} className="hover:text-gold">
              {link.name}
            </Link>
          ))}
          <a href="https://wa.me/918920924077" className="mt-4 bg-gold text-navy py-4 rounded-xl text-center text-lg font-bold">
            BOOK YOUR STAY
          </a>
        </div>
      </div>
    </header>
  );
}