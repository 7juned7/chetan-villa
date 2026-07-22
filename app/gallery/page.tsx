"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const GALLERY_IMAGES = [
  { src: "https://res.cloudinary.com/ddy8vp8zy/image/upload/q_auto,f_auto,w_800/v1781017681/chetan-villa/bedroom_bv289d.avif", category: "interior", name: "Luxury Suite Bedroom" },
  { src: "https://res.cloudinary.com/ddy8vp8zy/image/upload/q_auto,f_auto,w_800/v1781017681/chetan-villa/diningarea_nsi1se.avif", category: "interior", name: "Dining Hall" },
  { src: "https://res.cloudinary.com/ddy8vp8zy/image/upload/q_auto,f_auto,w_800/v1781017681/chetan-villa/diningarea2_oiysol.avif", category: "interior", name: "Cozy Lounge Area" },
  { src: "https://res.cloudinary.com/ddy8vp8zy/image/upload/q_auto,f_auto,w_800/v1781017679/chetan-villa/livingroom_feoxw7.avif", category: "interior", name: "Main Living Room" },
  { src: "https://res.cloudinary.com/ddy8vp8zy/image/upload/q_auto,f_auto,w_800/v1781017679/chetan-villa/pool_lqtgis.avif", category: "exterior", name: "Private Swimming Pool" },
  { src: "https://res.cloudinary.com/ddy8vp8zy/image/upload/q_auto,f_auto,w_800/v1781017678/chetan-villa/outside2_mnemjo.avif", category: "exterior", name: "Cottage Exterior View" },
  { src: "https://res.cloudinary.com/ddy8vp8zy/image/upload/q_auto,f_auto,w_800/v1781017678/chetan-villa/outside_w6v7l4.avif", category: "exterior", name: "Breathtaking Valley View" },
  { src: "https://res.cloudinary.com/ddy8vp8zy/image/upload/q_auto,f_auto,w_800/v1781017678/chetan-villa/lawn2_lqy3j9.avif", category: "exterior", name: "Lush Green Lawns" },
  { src: "https://res.cloudinary.com/ddy8vp8zy/image/upload/q_auto,f_auto,w_800/v1781017677/chetan-villa/gym_n3kfrg.avif", category: "amenities", name: "In-house Fitness Gym" },
  { src: "https://res.cloudinary.com/ddy8vp8zy/image/upload/q_auto,f_auto,w_800/v1781017678/chetan-villa/lawn_rsbh00.avif", category: "exterior", name: "Manicured Lawn & Garden" },
  { src: "https://res.cloudinary.com/ddy8vp8zy/image/upload/q_auto,f_auto,w_800/v1781017677/chetan-villa/bathroom_g8yyva.avif", category: "interior", name: "Premium Bathroom" },
  { src: "https://res.cloudinary.com/ddy8vp8zy/image/upload/q_auto,f_auto,w_800/v1781017680/chetan-villa/kitchen_mrbwwn.avif", category: "amenities", name: "Equipped Kitchen" },
  { src: "https://res.cloudinary.com/ddy8vp8zy/image/upload/q_auto,f_auto,w_800/v1781017676/chetan-villa/tarreece_zhwwqf.avif", category: "exterior", name: "Open Sun Terrace" }
];

const CATEGORIES = ["all", "interior", "exterior", "amenities"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = filter === "all" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : (prev ?? 0) - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <section className="py-24 bg-sand min-h-screen">
      {/* Gallery Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <span className="text-gold-dark tracking-[0.4em] uppercase text-xs font-semibold">Our Space</span>
        <h1 className="text-4xl md:text-5xl font-serif text-sage mt-4 leading-tight">
          Experience <span className="italic font-light">Elegance</span>
        </h1>
        <p className="mt-4 text-sage/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          A glimpse into the serene beauty and luxury that awaits you at Silver Steps Villa.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-2 md:gap-4 mb-12 overflow-x-auto px-6 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => { setFilter(cat); setLightboxIndex(null); }}
            className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border focus:outline-none cursor-pointer shrink-0 ${
              filter === cat
                ? "bg-sage border-sage text-white shadow-sm"
                : "bg-white border-sage/10 text-sage hover:border-gold/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Layout with Framer Motion Animate Presence */}
      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[240px] gap-3 px-3 md:px-8 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img, i) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={img.src} 
              onClick={() => setLightboxIndex(i)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer shadow-sm border border-sage/5 group ${
                i % 3 === 0 ? "col-span-2" : "col-span-1" 
              } ${
                i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img 
                src={img.src} 
                alt={img.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10">
                <p className="text-white text-xs md:text-sm font-serif tracking-wide">{img.name}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal Carousel */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 bg-black/95 z-[9999] flex flex-col items-center justify-center p-4 backdrop-blur-sm"
          >
            {/* Header info */}
            <div className="absolute top-4 left-6 text-white/70 text-xs font-serif tracking-wider">
              {filteredImages[lightboxIndex].name} ({lightboxIndex + 1} / {filteredImages.length})
            </div>

            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-6 text-white/70 hover:text-white transition p-2 focus:outline-none cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={28} />
            </button>

            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition focus:outline-none cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Central Image container */}
            <div className="max-w-5xl max-h-[80vh] w-full flex items-center justify-center overflow-hidden">
              <motion.img
                key={filteredImages[lightboxIndex].src}
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition focus:outline-none cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}