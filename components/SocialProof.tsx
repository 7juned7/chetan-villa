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
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-serif text-navy mt-4">
            Voices from <span className="italic font-light">our Guests</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <motion.div 
          className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {REVIEWS.map((review, i) => (
            <div 
              key={i} 
              className="min-w-[85vw] md:min-w-0 p-8 border border-navy/10 rounded-2xl snap-center bg-white shadow-sm"
            >
              <div className="flex gap-1 mb-4 text-gold">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-navy/70 italic mb-6 leading-relaxed">"{review.text}"</p>
              <h4 className="font-bold text-navy">— {review.name}</h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}