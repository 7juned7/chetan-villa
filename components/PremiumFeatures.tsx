"use client";

import React from "react";
import { Mountain, Droplets, Dumbbell, Wifi, Trees, ShieldCheck } from "lucide-react";

const FEATURES = [
  { icon: <Mountain size={28} />, title: "3BHK Luxury", desc: "Spacious rooms with a scenic valley view." },
  { icon: <Droplets size={28} />, title: "Private Pool", desc: "Crystal clear water in your private space." },
  { icon: <Trees size={28} />, title: "Private Lawn", desc: "Perfect for morning coffee & bonfires." },
  { icon: <Dumbbell size={28} />, title: "Fitness Gym", desc: "Stay on track even on vacation." },
  { icon: <Wifi size={28} />, title: "Workation Ready", desc: "High-speed Wi-Fi for seamless connectivity." },
  { icon: <ShieldCheck size={28} />, title: "Private & Safe", desc: "Gated property with 24/7 security." },
];

export default function PremiumFeatures() {
  return (
    <section className="py-32 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Minimalist Title */}
        <div className="mb-20">
          <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold">Amenities</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mt-4 leading-tight">
            Designed for the <br /> <span className="italic font-light">Discerning Traveler</span>
          </h2>
        </div>

        {/* Minimalist Grid - No cards, just lines and icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {FEATURES.map((f, i) => (
            <div key={i} className="flex gap-6 border-b border-navy/10 pb-8">
              <div className="text-gold mt-1">{f.icon}</div>
              <div>
                <h4 className="text-lg font-medium text-navy mb-2">{f.title}</h4>
                <p className="text-navy/60 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}