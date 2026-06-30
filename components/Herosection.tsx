"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* LANDSCAPE VIDEO (Desktop) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      >
        <source 
          src="https://res.cloudinary.com/ddy8vp8zy/video/upload/v1781335733/chetan-villa/download_20260613_125440_0000_pslbch.mp4" 
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
          src="https://res.cloudinary.com/ddy8vp8zy/video/upload/v1781334223/chetan-villa/IMG_4992_ytyzw4.mov" 
          type="video/mp4" 
        />
      </video>

      {/* GRADIENT OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold font-medium tracking-[0.4em] uppercase text-xs sm:text-sm md:text-base mb-4"
        >
          Escape to Tranquility
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-6 leading-tight"
        >
          Silver Steps Villa <br />
          <span className="text-white/80 font-light text-xl sm:text-2xl md:text-4xl">Your Private Bhimtal Retreat</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-cream/80 max-w-lg mb-10 text-base sm:text-lg font-light leading-relaxed"
        >
          Experience luxury in the heart of Uttarakhand. Private pool, mountain views, and the perfect escape from the city.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="/booking"
            className="bg-gold text-sage px-8 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all text-base sm:text-lg shadow-lg text-center"
          >
            BOOK YOUR STAY
          </Link>
          <Link
            href="/gallery"
            className="bg-transparent border border-white/40 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 hover:scale-105 transition-all text-base sm:text-lg backdrop-blur-sm text-center"
          >
            VIEW GALLERY
          </Link>
        </motion.div>
      </div>

      {/* Floating Scroll Down Arrow */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-white/50 hover:text-white transition cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" })}
      >
        <span className="text-xs tracking-[0.2em] uppercase font-light">Scroll Down</span>
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}