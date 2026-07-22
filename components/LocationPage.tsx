"use client";

import React from "react";
import { MapPin, Car, Train, Plane, Navigation } from "lucide-react";

export default function LocationPage() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.1451777139478!2d79.5683483!3d29.3367408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0972a3c3ef22b%3A0xd034cc7aef752fe5!2sSilver%20Steps%20Villa!5e0!3m2!1sen!2sin!4v1781079830485!5m2!1sen!2sin";
  const directionsUrl = "https://maps.app.goo.gl/shmtrcDsghzvmNiH7";

  return (
    <section className="py-24 bg-sand">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-16 text-center md:text-left">
          <span className="text-gold-dark tracking-[0.4em] uppercase text-xs font-semibold">Our Location</span>
          <h1 className="text-4xl md:text-5xl font-serif text-sage mt-4 leading-tight">
            Finding Your Way to <span className="italic font-light">Silver Steps Villa</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Map Container */}
          <div className="w-full h-[450px] bg-white rounded-3xl overflow-hidden shadow-xl border border-sage/10 relative group">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Silver Steps Villa Location Map"
            ></iframe>
          </div>

          {/* Connectivity Details */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-sage/5 shadow-sm hover:border-gold/30 transition-all duration-300">
              <MapPin className="text-gold shrink-0 mt-1" size={24} />
              <div>
                <h2 className="font-bold text-sage font-serif text-base">Villa Address</h2>
                <p className="text-sm text-sage/70 mt-1 leading-relaxed">Dungsil Talla, Bhimtal, Uttarakhand - 263136</p>
              </div>
            </div>

            {/* Travel Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-sage/5 shadow-sm hover:border-gold/30 transition-all duration-300">
                <Plane className="text-gold mb-3" size={24} />
                <h3 className="font-bold text-sage font-serif text-base">Airport</h3>
                <p className="text-sm text-sage/70">Pantnagar (PGH) - 60km</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-sage/5 shadow-sm hover:border-gold/30 transition-all duration-300">
                <Train className="text-gold mb-3" size={24} />
                <h3 className="font-bold text-sage font-serif text-base">Railway Station</h3>
                <p className="text-sm text-sage/70">Kathgodam (KGM) - 25km</p>
              </div>
              
              {/* New By Road Section */}
              <div className="p-6 bg-white rounded-2xl border border-sage/5 shadow-sm sm:col-span-2 hover:border-gold/30 transition-all duration-300">
                <Car className="text-gold mb-3" size={24} />
                <h3 className="font-bold text-sage font-serif text-base">By Road</h3>
                <p className="text-sm text-sage/70 leading-relaxed">Well-connected via NH109. Enjoy a scenic drive through the mountains with easy access to our villa gate.</p>
              </div>
            </div>

            {/* CTA */}
            <a 
              href={directionsUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-sage text-white px-8 py-4 rounded-full font-bold hover:bg-gold hover:scale-105 transition-all shadow-lg tracking-wider cursor-pointer text-sm"
            >
              <Navigation size={18} />
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}