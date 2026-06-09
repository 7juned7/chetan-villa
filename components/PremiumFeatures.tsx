"use client";

import React, { useState, useEffect } from "react";
import { Mountain, Droplets, Dumbbell, Wifi, Trees, ShieldCheck } from "lucide-react";

const IMAGES = [
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781015689/IMG_4343_gusyu3.jpg",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017677/chetan-villa/gym_n3kfrg.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017679/chetan-villa/pool_lqtgis.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017678/chetan-villa/outside2_mnemjo.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017682/chetan-villa/bedroomtv_pw8yno.avif",
];

const FEATURES = [
  { icon: <Mountain size={28} />, title: "3BHK Luxury", desc: "Spacious rooms with a scenic valley view." },
  { icon: <Droplets size={28} />, title: "Private Pool", desc: "Crystal clear water in your private space." },
  { icon: <Trees size={28} />, title: "Private Lawn", desc: "Perfect for morning coffee & bonfires." },
  { icon: <Dumbbell size={28} />, title: "Fitness Gym", desc: "Stay on track even on vacation." },
  { icon: <Wifi size={28} />, title: "Workation Ready", desc: "High-speed Wi-Fi for seamless connectivity." },
  { icon: <ShieldCheck size={28} />, title: "Private & Safe", desc: "Gated property with 24/7 security." },
];

export default function PremiumFeatures() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Slider */}
      {IMAGES.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="Villa Amenities"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
        <div className="mb-20">
          <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold">Amenities</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 leading-tight">
            Designed for the <br /> <span className="italic font-light">Discerning Traveler</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {FEATURES.map((f, i) => (
            <div key={i} className="flex gap-4 border-b border-white/20 pb-6">
              <div className="text-gold mt-1 shrink-0">{f.icon}</div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">{f.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}