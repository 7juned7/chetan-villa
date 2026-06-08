"use client";

import React from "react";

export default function FeaturesSection() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image - Yahan apni villa ki best photo lagayein */}
      <img
        src="/villa-luxury-view.jpg" 
        alt="Silver Steps Villa Experience"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-navy/70 z-10" />

      {/* Content Container */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold mb-4 block">
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

        <button className="mt-12 bg-gold text-navy px-10 py-3 rounded-full font-bold hover:scale-105 transition-transform">
          DISCOVER MORE
        </button>
      </div>
    </section>
  );
}