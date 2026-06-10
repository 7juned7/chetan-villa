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
            ? "mt-4 w-[90%] px-6 py-3 rounded-2xl bg-[#2D3A3A]/70 backdrop-blur-md border-white/10 shadow-xl"
            : "w-full px-6 py-6 bg-[#2D3A3A]/30 backdrop-blur-sm border-white/5"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 relative z-[1001]">
            <div className="relative w-12 h-12">
              <Image src="/images/logo.png" alt="Logo" fill className="object-contain" priority />
            </div>
            <span className="font-serif text-lg font-bold text-white tracking-widest hidden sm:block">
              SILVER STEPS
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-white font-medium text-sm">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#C5A059] transition">
                {link.name}
              </Link>
            ))}
            {/* Real Instagram Link Added Here */}
            <a href="https://www.instagram.com/silverstepsvilla/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition">
              <InstagramIcon size={20} />
            </a>
          </div>

          <Link href="/booking" className="hidden lg:block bg-[#C5A059] text-[#2D3A3A] px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-transform text-sm">
            BOOK NOW
          </Link>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden relative z-[1001] w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${mobileMenu ? "rotate-45 translate-y-2" : "-translate-y-0.5"}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${mobileMenu ? "opacity-0" : "opacity-100"}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${mobileMenu ? "-rotate-45 -translate-y-2" : "translate-y-0.5"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[9999] bg-[#2D3A3A] pt-10 px-8 transition-all duration-500 ease-in-out ${mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="flex justify-end mb-10">
          <button onClick={() => setMobileMenu(false)} className="text-white text-4xl font-light hover:text-[#C5A059]">×</button>
        </div>
        <div className="flex flex-col gap-8 text-3xl font-serif text-white items-center">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setMobileMenu(false)} className="hover:text-[#C5A059]">
              {link.name}
            </Link>
          ))}
          {/* Real Instagram Link Mobile */}
          <Link href="https://www.instagram.com/silverstepsvilla/" target="_blank" rel="noopener noreferrer" className="mt-8 justify-center items-center flex gap-2 text-white hover:text-[#C5A059]">
           Instagram <InstagramIcon size={32} />
          </Link>
          <Link href="/booking" onClick={() => setMobileMenu(false)} className="mt-4 bg-[#C5A059] text-[#2D3A3A] px-10 py-4 rounded-full text-lg font-bold text-center">
            BOOK YOUR STAY
          </Link>
        </div>
      </div>
    </header>
  );
}