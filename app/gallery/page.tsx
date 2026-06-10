"use client";

import React from "react";

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017681/chetan-villa/bedroom_bv289d.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017681/chetan-villa/diningarea_nsi1se.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017681/chetan-villa/diningarea2_oiysol.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017679/chetan-villa/livingroom_feoxw7.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017679/chetan-villa/pool_lqtgis.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017678/chetan-villa/outside2_mnemjo.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017678/chetan-villa/outside_w6v7l4.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017678/chetan-villa/lawn2_lqy3j9.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017677/chetan-villa/gym_n3kfrg.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017678/chetan-villa/lawn_rsbh00.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017677/chetan-villa/bathroom_g8yyva.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017681/chetan-villa/diningarea2_oiysol.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017680/chetan-villa/kitchen_mrbwwn.avif",
  "https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781017676/chetan-villa/tarreece_zhwwqf.avif"
];

export default function GalleryPage() {
  return (
    <section className="py-24 bg-[#F4F1EA]">
      {/* Gallery Header */}
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <span className="text-[#C5A059] tracking-[0.4em] uppercase text-xs font-semibold">Our Space</span>
        <h2 className="text-4xl md:text-5xl font-serif text-[#2D3A3A] mt-4">
          Experience <span className="italic font-light">Elegance</span>
        </h2>
        <p className="mt-4 text-[#2D3A3A]/60 max-w-2xl mx-auto">
          A glimpse into the serene beauty and luxury that awaits you at Silver Steps Villa.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[300px] gap-2 px-2 md:px-6">
        {GALLERY_IMAGES.map((src, i) => (
          <div 
            key={i} 
            className={`relative overflow-hidden rounded-2xl ${
              i % 3 === 0 ? "col-span-2" : "col-span-1" 
            } ${
              i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <img 
              src={src} 
              alt={`Villa Gallery ${i}`} 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out cursor-pointer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}