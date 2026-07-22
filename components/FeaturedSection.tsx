"use client";

import React from "react";
import Link from "next/link"; // Link component ka use behtar hai

export default function FeaturesSection() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* OPTIMIZED BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="https://res.cloudinary.com/ddy8vp8zy/image/upload/q_auto,f_auto,w_1000/v1781017678/chetan-villa/outside2_mnemjo.avif"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <track kind="captions" src="data:text/vtt,WEBVTT" label="English captions disabled" default />
        {/* LANDSCAPE VIDEO (Desktop) */}
        <source 
          src="https://res.cloudinary.com/ddy8vp8zy/video/upload/q_auto:eco,f_auto,w_1280/v1781013295/sp_20260609_1080p_30f_20260609_190753_online-video-cutter.com_gn5to6.mp4" 
          type="video/mp4" 
          media="(min-width: 768px)"
        />

        {/* PORTRAIT VIDEO (Mobile) */}
        <source 
          src="https://res.cloudinary.com/ddy8vp8zy/video/upload/q_auto:eco,f_auto,w_640/v1781014405/DJI_20260410161548_0039_D_cvpcgr.mp4" 
          type="video/mp4" 
          media="(max-width: 767px)"
        />
      </video>
      
      {/* Overlay for readability (Updated to sage/75) */}
      <div className="absolute inset-0 bg-sage/35 z-10" />

      {/* Content Container */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold mb-4 block">
          The Experience
        </span>
        
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight">
          A Sanctuary Above <br /> <span className="italic font-light text-white/90">the Clouds</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/20 pt-10">
          {[
            { label: "3BHK Luxury" },
            { label: "Private Pool" },
            { label: "Mountain View" },
            { label: "Gated Security" },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-2xl hover:bg-white/10 hover:border-gold/30 transition-all duration-300">
              <span className="block text-sm md:text-base font-medium text-white">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Link updated to /amenities and colors updated */}
        <Link 
          href="/amenities" 
          className="mt-12 inline-block bg-gold text-sage px-10 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all shadow-lg text-sm tracking-wider"
        >
          DISCOVER MORE
        </Link>
      </div>
    </section>
  );
}