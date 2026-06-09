"use client";

import React from "react";

// Aap yahan apne Cloudinary folder ki images ka array dal sakte hain
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
    <section className="py-0">
      {/* Grid container with zero gap */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 auto-rows-[300px] gap-0">
        
        {GALLERY_IMAGES.map((src, i) => (
          <div 
            key={i} 
            className={`relative overflow-hidden ${
              // Randomly span 2 columns or 2 rows for different dimension feel
              i % 5 === 0 ? "md:col-span-2 md:row-span-2" : "col-span-1"
            }`}
          >
            <img 
              src={src} 
              alt={`Villa Gallery ${i}`} 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
}