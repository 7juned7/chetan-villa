"use client";

import React from "react";
import { MapPin, Car, Train, Plane, Navigation } from "lucide-react";

export default function LocationPage() {
  // Yahan apna Google Embed URL daalein
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.1451777139478!2d79.5683483!3d29.3367408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0972a3c3ef22b%3A0xd034cc7aef752fe5!2sSilver%20Steps%20Villa!5e0!3m2!1sen!2sin!4v1781079830485!5m2!1sen!2sin";
  // Yahan Google Maps directions ka link daalein
  const directionsUrl = "https://maps.app.goo.gl/shmtrcDsghzvmNiH7";

  return (
    <section className="py-24 bg-[#F4F1EA]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-[#C5A059] tracking-[0.4em] uppercase text-xs font-semibold">Our Location</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2D3A3A] mt-4">
            Finding Your Way to <span className="italic font-light">Silver Steps Villa</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Map Container */}
          <div className="w-full h-[450px] bg-white rounded-3xl overflow-hidden shadow-xl border border-[#2D3A3A]/10">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Connectivity Details */}
          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-[#2D3A3A]/10 shadow-sm">
              <MapPin className="text-[#C5A059] shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-[#2D3A3A]">Villa Address</h4>
                <p className="text-sm text-[#2D3A3A]/70 mt-1">Dungsil Talla, Bhimtal, Uttarakhand - 263136</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-[#2D3A3A]/10 shadow-sm">
                <Plane className="text-[#C5A059] mb-3" size={24} />
                <h5 className="font-bold text-[#2D3A3A]">Airport</h5>
                <p className="text-sm text-[#2D3A3A]/70">Pantnagar (PGH) - 60km</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-[#2D3A3A]/10 shadow-sm">
                <Train className="text-[#C5A059] mb-3" size={24} />
                <h5 className="font-bold text-[#2D3A3A]">Railway Station</h5>
                <p className="text-sm text-[#2D3A3A]/70">Kathgodam (KGM) - 25km</p>
              </div>
              
              {/* By Road Section */}
              <div className="p-6 bg-white rounded-2xl border border-[#2D3A3A]/10 shadow-sm sm:col-span-2">
                <Car className="text-[#C5A059] mb-3" size={24} />
                <h5 className="font-bold text-[#2D3A3A]">By Road</h5>
                <p className="text-sm text-[#2D3A3A]/70">Well-connected via NH109. Enjoy a scenic drive through the mountains with easy access to our villa gate.</p>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href={directionsUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-[#2D3A3A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#C5A059] transition-all shadow-lg"
            >
              <Navigation size={20} />
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}