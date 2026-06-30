"use client";

import React, { useState, useEffect } from "react";
import { Mountain, Droplets, Dumbbell, Wifi, Trees, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781015689/IMG_4343_gusyu3.jpg",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017677/chetan-villa/gym_n3kfrg.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017679/chetan-villa/pool_lqtgis.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017678/chetan-villa/outside2_mnemjo.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017682/chetan-villa/bedroomtv_pw8yno.avif",
];

const FEATURES = [
  { icon: <Mountain size={24} />, title: "3BHK Luxury", desc: "Spacious rooms with a scenic valley view." },
  { icon: <Droplets size={24} />, title: "Private Pool", desc: "Crystal clear water in your private space." },
  { icon: <Trees size={24} />, title: "Private Lawn", desc: "Perfect for morning coffee & bonfires." },
  { icon: <Dumbbell size={24} />, title: "Fitness Gym", desc: "Stay on track even on vacation." },
  { icon: <Wifi size={24} />, title: "Workation Ready", desc: "High-speed Wi-Fi for seamless connectivity." },
  { icon: <ShieldCheck size={24} />, title: "Private & Safe", desc: "Gated property with 24/7 security." },
];

export default function PremiumFeatures() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 6000); // 6 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-sage">
      {/* Background Slider with Ken Burns cinematic zoom */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={IMAGES[currentImage]}
            src={IMAGES[currentImage]}
            alt="Villa Amenities"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.0, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
      
      {/* Dark Readability Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sage/15 via-sage/80 to-transparent md:bg-sage/35 z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold block">Amenities</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 leading-tight">
            Designed for the <br /> <span className="italic font-light">Discerning Traveler</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 p-6 rounded-2xl"
            >
              <div className="text-gold mt-1 shrink-0 bg-white/5 p-2 rounded-xl border border-white/10">{f.icon}</div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1 font-serif">{f.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}