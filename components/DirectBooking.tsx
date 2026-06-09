"use client";

import React from "react";
import { Sparkles, Tag, CalendarClock } from "lucide-react";

export default function DirectBooking() {
  return (
    <section className="py-16 bg-navy text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-10">Why Book Direct?</h2>
        
        {/* Compact Grid: 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          
          {/* Benefit 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-white/10 p-3 rounded-full mb-4">
              <Tag className="text-gold" size={24} />
            </div>
            <h4 className="text-sm md:text-xl font-medium mb-1">Best Price</h4>
            <p className="text-white/60 text-[10px] md:text-sm px-2">Save up to 15% via direct booking.</p>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-white/10 p-3 rounded-full mb-4">
              <CalendarClock className="text-gold" size={24} />
            </div>
            <h4 className="text-sm md:text-xl font-medium mb-1">Flexible</h4>
            <p className="text-white/60 text-[10px] md:text-sm px-2">Easy changes & transparent policy.</p>
          </div>

          {/* Benefit 3 - Full width on mobile if needed, or keep in grid */}
          <div className="flex flex-col items-center col-span-2 md:col-span-1">
            <div className="bg-white/10 p-3 rounded-full mb-4">
              <Sparkles className="text-gold" size={24} />
            </div>
            <h4 className="text-sm md:text-xl font-medium mb-1">Exclusive Perks</h4>
            <p className="text-white/60 text-[10px] md:text-sm px-2">Complimentary bonfire & early check-in.</p>
          </div>
        </div>

        <button className="mt-12 w-full md:w-auto bg-gold text-navy px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform text-sm md:text-base">
          BOOK DIRECT ON WHATSAPP
        </button>
      </div>
    </section>
  );
}