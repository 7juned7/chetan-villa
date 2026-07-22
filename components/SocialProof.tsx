"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const REVIEWS = [
  { name: "Aman Sharma", text: "The stay was absolutely mesmerizing. The private pool is a highlight!", rating: 5 },
  { name: "Priya & Rohan", text: "Perfect for a workation. Fast Wi-Fi and serene environment.", rating: 5 },
  { name: "Vikram Sethi", text: "A true sanctuary. Bonfire nights made our trip special.", rating: 5 },
  { name: "Neha Gupta", text: "The view from the balcony is breathtaking. Best villa in Bhimtal.", rating: 5 },
];

export default function SocialProof() {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2);
  };

  return (
    <section className="py-24 bg-[#F8F6F1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-dark tracking-[0.4em] uppercase text-xs font-semibold">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-serif text-sage mt-4 leading-tight">
            Voices from <span className="italic font-light">our Guests</span>
          </h2>
        </div>

        {/* Responsive Grid: Horizontal scrolling on mobile, 4-columns on large screens */}
        <motion.div 
          className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-none lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {REVIEWS.map((review, i) => (
            <div 
              key={i} 
              className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 p-8 border border-sage/10 rounded-3xl snap-center bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6 text-gold">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" className="stroke-none" />
                  ))}
                </div>
                <p className="text-sage/75 italic mb-8 leading-relaxed text-sm md:text-base">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center font-bold text-sm border border-gold/20 font-serif shrink-0">
                  {getInitials(review.name)}
                </div>
                <h3 className="font-bold text-sage text-sm md:text-base">{review.name}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}