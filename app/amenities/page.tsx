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
    <main className="py-24 bg-[#F4F1EA]"> {/* Soft Sand/Cream Background */}
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#C5A059] tracking-[0.4em] uppercase text-xs font-semibold">Our Offerings</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#2D3A3A] mt-4">
            Everything you need for a <span className="italic font-light">Perfect Stay</span>
          </h1>
        </div>

        {/* Categories Grid */}
        <div className="space-y-16">
          {AMENITY_CATEGORIES.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-serif text-[#2D3A3A] mb-8 border-b border-[#C5A059]/30 pb-4">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.items.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-[#2D3A3A]/5 hover:border-[#C5A059]/50 transition-all">
                    <div className="text-[#C5A059] mb-4">{item.icon}</div>
                    <h4 className="text-lg font-bold text-[#2D3A3A] mb-2">{item.name}</h4>
                    <p className="text-sm text-[#2D3A3A]/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-12 bg-[#2D3A3A] rounded-3xl text-center text-white">
          <h3 className="text-2xl font-serif mb-4">Have specific needs?</h3>
          <p className="text-white/70 mb-8 max-w-md mx-auto">Need a private chef, airport transfer, or special decoration? Let us know!</p>
          <a href="https://wa.me/918920924077" className="bg-[#C5A059] text-[#2D3A3A] px-8 py-3 rounded-full font-bold hover:bg-white transition">
            CONTACT CONCIERGE
          </a>
        </div>
      </div>
    </main>
  );
}