"use client";

import React from "react";
import { Coffee, MapPin, Users, Home } from "lucide-react";

export default function VillaPage() {
  return (
    <main className="bg-sand min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781019330/chetan-villa/villaa_u4ozmd.avif" 
          className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[4000ms] ease-out" 
          alt="Villa Hero"
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-white text-5xl md:text-7xl font-serif tracking-wide">The Villa</h1>
      </section>

      {/* Details Content */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold block mb-2">Our Retreat</span>
            <h2 className="text-3xl md:text-4xl font-serif text-sage mb-6 leading-tight">
              A Haven of <span className="italic font-light">Tranquility</span>
            </h2>
            <p className="text-sage/80 leading-relaxed mb-8 text-sm md:text-base">
              Silver Steps Villa is a premium 3BHK retreat designed for those who seek solace in nature. 
              Perched overlooking the lush valley of Bhimtal, our property blends modern luxury with 
              rustic mountain charm. Whether it's your morning coffee on the private lawn or 
              an evening bonfire under the stars, every corner is crafted to offer you an 
              unforgettable escape from the city bustle.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-sage/5 shadow-sm hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
                <Users className="text-gold shrink-0" /> 
                <span className="text-sage font-medium text-sm">8 Guests</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-sage/5 shadow-sm hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
                <Home className="text-gold shrink-0" /> 
                <span className="text-sage font-medium text-sm">3 Bedrooms</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-sage/5 shadow-sm hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
                <MapPin className="text-gold shrink-0" /> 
                <span className="text-sage font-medium text-sm">Bhimtal, UK</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-sage/5 shadow-sm hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
                <Coffee className="text-gold shrink-0" /> 
                <span className="text-sage font-medium text-sm">Self-Catering</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img src="https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017681/chetan-villa/diningarea2_oiysol.avif" className="rounded-3xl shadow-lg border border-sage/5" alt="Living Room" />
            <div className="grid grid-cols-2 gap-4">
              <img src="https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017679/chetan-villa/livingroom_feoxw7.avif" className="rounded-2xl shadow-md h-40 w-full object-cover border border-sage/5" alt="View" />
              <img src="https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017676/chetan-villa/tarreece_zhwwqf.avif" className="rounded-2xl shadow-md h-40 w-full object-cover border border-sage/5" alt="Pool" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage text-white text-center border-t border-white/5">
        <h3 className="text-3xl font-serif mb-6 leading-tight">Ready to Experience Silver Steps?</h3>
        <p className="text-white/60 mb-8 max-w-sm mx-auto text-sm">Plan your mountain holiday and experience unmatched comfort.</p>
        <a 
          href="https://wa.me/918920924077" 
          className="inline-block bg-gold text-sage px-10 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all shadow-lg tracking-wider text-sm cursor-pointer"
        >
          INQUIRE NOW ON WHATSAPP
        </a>
      </section>
    </main>
  );
}