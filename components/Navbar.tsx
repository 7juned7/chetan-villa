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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <nav
        className={`transition-all duration-500 ease-in-out ${
          scrolled
            ? "mt-4 w-[90%] md:w-[90%] px-6 py-3 rounded-2xl bg-navy/90 backdrop-blur-md border border-gold/30 shadow-lg"
            : "w-full px-8 py-6 bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-24 h-24 md:w-32 md:h-34">
              <Image src="/images/logo.png" alt="Silver Steps Villa" fill className="object-contain" priority />
            </div>
            <span className="font-serif text-xl font-bold text-white tracking-wider hidden md:block">
              SILVER STEPS
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8 font-medium text-white">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className="nav-link">
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA BUTTON */}
          <a
            href="https://wa.me/918920924077"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block bg-gold text-navy px-8 py-3 rounded-full font-bold hover:bg-white transition-all shadow-md"
          >
            BOOK NOW
          </a>

          {/* HAMBURGER */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden flex flex-col gap-1.5 z-50 text-white"
          >
            <span className={`w-6 h-[2px] bg-current transition-all ${mobileMenu ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-[2px] bg-current transition-all ${mobileMenu ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[2px] bg-current transition-all ${mobileMenu ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-40 bg-navy pt-24 px-8 lg:hidden transition-all duration-500 ${mobileMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
        <div className="flex flex-col gap-8 text-3xl font-serif text-white">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setMobileMenu(false)} className="hover:text-gold transition">
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