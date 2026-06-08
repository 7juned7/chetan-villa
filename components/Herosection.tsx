"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/villa-showcase.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* GLOBAL THEME OVERLAY - Using navy from globals.css */}
      <div className="absolute inset-0 bg-black/60 z-10" />

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
          <a
            href="https://wa.me/918920924077"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-navy px-8 py-4 rounded-full font-bold hover:bg-white transition-all text-lg shadow-lg"
          >
            BOOK YOUR STAY
          </a>
          <a
            href="/gallery"
            className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all text-lg backdrop-blur-sm"
          >
            VIEW GALLERY
          </a>
        </div>
      </div>
    </section>
  );
}