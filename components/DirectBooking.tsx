"use client";

import React from "react";
import { Sparkles, Tag, CalendarClock } from "lucide-react";

export default function DirectBooking() {
  const handleDirectCall = () => {
    const message = encodeURIComponent("Hello, I would like to inquire about booking Silver Steps Villa directly.");
    window.open(`https://wa.me/918920924077?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 bg-sage text-white border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-12">Why Book Direct?</h2>
        
        {/* Compact Grid: 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          {/* Benefit 1 */}
          <div className="flex flex-col items-center bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="bg-white/10 p-3 rounded-2xl mb-4 text-gold border border-white/10">
              <Tag size={22} />
            </div>
            <h3 className="text-lg font-medium mb-2 font-serif">Best Price Guaranteed</h3>
            <p className="text-white/60 text-sm px-2 leading-relaxed">Save up to 15% via direct booking compared to OTAs.</p>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col items-center bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="bg-white/10 p-3 rounded-2xl mb-4 text-gold border border-white/10">
              <CalendarClock size={22} />
            </div>
            <h3 className="text-lg font-medium mb-2 font-serif">Flexible Policies</h3>
            <p className="text-white/60 text-sm px-2 leading-relaxed">Easy date modifications & transparent cancellation policy.</p>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col items-center bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="bg-white/10 p-3 rounded-2xl mb-4 text-gold border border-white/10">
              <Sparkles size={22} />
            </div>
            <h3 className="text-lg font-medium mb-2 font-serif">Exclusive Perks</h3>
            <p className="text-white/60 text-sm px-2 leading-relaxed">Complimentary evening bonfire & flexible check-in times.</p>
          </div>
        </div>

        <button 
          onClick={handleDirectCall}
          className="mt-12 w-full sm:w-auto bg-gold text-sage px-10 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all text-sm md:text-base shadow-lg tracking-wider cursor-pointer"
        >
          BOOK DIRECT ON WHATSAPP
        </button>
      </div>
    </section>
  );
}