"use client";

import React from "react";
import Link from "next/link"; // Link component ka use behtar hai

export default function FeaturesSection() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* LANDSCAPE VIDEO (Desktop) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      >
        <source 
          src="https://res.cloudinary.com/ddy8vp8zy/video/upload/v1781013295/sp_20260609_1080p_30f_20260609_190753_online-video-cutter.com_gn5to6.mp4" 
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
          src="https://res.cloudinary.com/ddy8vp8zy/video/upload/v1781014405/DJI_20260410161548_0039_D_cvpcgr.mov" 
          type="video/mp4" 
        />
      </video>
      
      {/* Overlay for readability (Updated to #2D3A3A/70) */}
      <div className="absolute inset-0 bg-[#2D3A3A]/70 z-10" />

      {/* Content Container */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <span className="text-[#C5A059] tracking-[0.4em] uppercase text-xs font-semibold mb-4 block">
          The Experience
        </span>
        
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
          A Sanctuary Above <br /> <span className="italic font-light">the Clouds</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-10">
          {[
            { label: "3BHK Luxury" },
            { label: "Private Pool" },
            { label: "Mountain View" },
            { label: "Gated Security" },
          ].map((item, i) => (
            <div key={i} className="text-white">
              <span className="block text-lg font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Link updated to /amenities and colors updated */}
        <Link 
          href="/amenities" 
          className="mt-24 inline-block bg-[#C5A059] text-[#2D3A3A] px-10 py-3 rounded-full font-bold hover:scale-105 transition-transform"
        >
          DISCOVER MORE
        </Link>
      </div>
    </section>
  );
}