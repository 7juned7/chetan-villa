"use client";

import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* LANDSCAPE VIDEO (Desktop) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      >
        <source 
          src="https://res.cloudinary.com/ddy8vp8zy/video/upload/v1781335733/chetan-villa/download_20260613_125440_0000_pslbch.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* PORTRAIT VIDEO (Mobile) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
      >
        <source 
          src="https://res.cloudinary.com/ddy8vp8zy/video/upload/v1781334223/chetan-villa/IMG_4992_ytyzw4.mov" 
          type="video/mp4" 
        />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60 md:bg-transparent z-10" />

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-gold font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-4">
          Escape to Tranquility
        </h2>
        <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight">
          Silver Steps Villa <br />
          <span className="text-white/80 font-light text-2xl md:text-4xl">Your Private Bhimtal Retreat</span>
        </h1>
        
        <p className="text-cream/80 max-w-lg mb-8 text-lg font-light">
          Experience luxury in the heart of Uttarakhand. Private pool, mountain views, and the perfect escape from the city.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
        <Link
  href="/booking"
  className="bg-[#C5A059] text-[#2D3A3A] px-8 py-4 rounded-full font-bold hover:bg-white transition-all text-lg shadow-lg"
>
  BOOK YOUR STAY
</Link>
          <Link
            href="/gallery"
            className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all text-lg backdrop-blur-sm"
          >
            VIEW GALLERY
          </Link>
        </div>
      </div>
    </section>
  );
}