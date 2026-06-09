"use client";

import React from "react";
import { Coffee, MapPin, Users, Home } from "lucide-react";

export default function VillaPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img 
          src="https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781019330/chetan-villa/villaa_u4ozmd.avif" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Villa Hero"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-white text-5xl md:text-7xl font-serif">The Villa</h1>
      </section>

      {/* Details Content */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6">
              A Haven of <span className="italic font-light">Tranquility</span>
            </h2>
            <p className="text-navy/70 leading-relaxed mb-8">
              Silver Steps Villa is a premium 3BHK retreat designed for those who seek solace in nature. 
              Perched overlooking the lush valley of Bhimtal, our property blends modern luxury with 
              rustic mountain charm. Whether it's your morning coffee on the private lawn or 
              an evening bonfire under the stars, every corner is crafted to offer you an 
              unforgettable escape from the city bustle.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3 text-navy">
                <Users className="text-gold" /> <span>8 Guests</span>
              </div>
              <div className="flex items-center gap-3 text-navy">
                <Home className="text-gold" /> <span>3 Bedrooms</span>
              </div>
              <div className="flex items-center gap-3 text-navy">
                <MapPin className="text-gold" /> <span>Bhimtal, UK</span>
              </div>
              <div className="flex items-center gap-3 text-navy">
                <Coffee className="text-gold" /> <span>Self-Catering</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img src="https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017681/chetan-villa/diningarea2_oiysol.avif" className="rounded-2xl shadow-lg" alt="Living Room" />
            <div className="grid grid-cols-2 gap-4">
              <img src="https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017679/chetan-villa/livingroom_feoxw7.avif" className="rounded-2xl shadow-lg h-40 w-full object-cover" alt="View" />
              <img src="https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017676/chetan-villa/tarreece_zhwwqf.avif" className="rounded-2xl shadow-lg h-40 w-full object-cover" alt="Pool" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white text-center">
        <h3 className="text-3xl font-serif mb-6">Ready to Experience Silver Steps?</h3>
        <a 
          href="https://wa.me/918920924077" 
          className="inline-block bg-gold text-navy px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform"
        >
          INQUIRE NOW ON WHATSAPP
        </a>
      </section>
    </main>
  );
}