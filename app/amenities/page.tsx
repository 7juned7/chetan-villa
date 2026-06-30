"use client";

import React from "react";
import { 
  Wifi, Coffee, Dumbbell, Droplets, Mountain, 
  ShieldCheck, Car, Flame, Utensils, Music 
} from "lucide-react";

const AMENITY_CATEGORIES = [
  {
    title: "Lifestyle & Comfort",
    items: [
      { icon: <Droplets />, name: "Private Pool", desc: "Crystal clear water with mountain views" },
      { icon: <Flame />, name: "Bonfire Setup", desc: "Evening cozy setups on request" },
      { icon: <Coffee />, name: "Breakfast Service", desc: "Fresh local delicacies served daily" },
      { icon: <Music />, name: "Music System", desc: "Bluetooth enabled sound system" },
    ]
  },
  {
    title: "Wellness & Fitness",
    items: [
      { icon: <Dumbbell />, name: "Fitness Gym", desc: "Well-equipped for daily workouts" },
      { icon: <Mountain />, name: "Nature Trails", desc: "Guided walking paths around the property" },
    ]
  },
  {
    title: "Connectivity & Work",
    items: [
      { icon: <Wifi />, name: "High-Speed Wi-Fi", desc: "Workation ready with stable connection" },
      { icon: <Utensils />, name: "Fully Equipped Kitchen", desc: "For those who love to cook" },
    ]
  },
  {
    title: "Safety & Utility",
    items: [
      { icon: <ShieldCheck />, name: "24/7 Security", desc: "Gated property with smart locks" },
      { icon: <Car />, name: "Private Parking", desc: "Ample space for your vehicles" },
    ]
  }
];

export default function AmenitiesPage() {
  return (
    <main className="py-24 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold">Our Offerings</span>
          <h1 className="text-4xl md:text-5xl font-serif text-sage mt-4 leading-tight">
            Everything you need for a <span className="italic font-light">Perfect Stay</span>
          </h1>
        </div>

        {/* Categories Grid */}
        <div className="space-y-16">
          {AMENITY_CATEGORIES.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-serif text-sage mb-8 border-b border-gold/30 pb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-sage/5 hover:border-gold/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-start">
                    <div className="text-gold mb-4 bg-sand/50 w-fit p-3 rounded-xl border border-sage/5">{item.icon}</div>
                    <h4 className="text-lg font-bold text-sage mb-2 font-serif">{item.name}</h4>
                    <p className="text-sm text-sage/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-12 bg-sage rounded-3xl text-center text-white border border-white/5 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-serif mb-4">Have specific needs?</h3>
            <p className="text-white/70 mb-8 max-w-md mx-auto text-sm md:text-base leading-relaxed">Need a private chef, airport transfer, or special decoration? Let us know!</p>
            <a href="https://wa.me/918920924077" className="inline-block bg-gold text-sage px-8 py-3.5 rounded-full font-bold hover:bg-white hover:scale-105 transition-all text-sm tracking-wider shadow-lg">
              CONTACT CONCIERGE
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}