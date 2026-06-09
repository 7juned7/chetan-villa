"use client";

import React from "react";
import { MapPin, Car, Train, Plane, Navigation } from "lucide-react";

export default function LocationPage() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-16">
          <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold">Our Location</span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mt-4">
            Finding Your Way to <br /> <span className="italic font-light">Silver Steps Villa</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Map Section */}
          <div className="w-full h-[450px] bg-navy/10 rounded-2xl overflow-hidden shadow-lg border border-navy/5">
            {/* Replace this div with your actual Google Maps Iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27976.242250284456!2d79.5583626!3d29.3556734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a037b3f9b877%3A0x633d2673f3240e45!2sBhimtal%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Details Section */}
          <div className="space-y-10">
            {/* Address */}
            <div className="flex gap-4">
              <MapPin className="text-gold shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-lg font-bold text-navy">Villa Address</h4>
                <p className="text-navy/70 mt-1">Silver Steps Villa, Near Bhimtal Lake, Uttarakhand, India - 263136</p>
              </div>
            </div>

            {/* Connectivity Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl border border-navy/5 shadow-sm">
                <Plane className="text-gold mb-3" size={24} />
                <h5 className="font-bold text-navy">Airport</h5>
                <p className="text-sm text-navy/70">Pantnagar (PGH) - 60km</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-navy/5 shadow-sm">
                <Train className="text-gold mb-3" size={24} />
                <h5 className="font-bold text-navy">Railway Station</h5>
                <p className="text-sm text-navy/70">Kathgodam (KGM) - 25km</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-navy/5 shadow-sm">
                <Car className="text-gold mb-3" size={24} />
                <h5 className="font-bold text-navy">By Road</h5>
                <p className="text-sm text-navy/70">Direct access to Villa gate</p>
              </div>
            </div>

            {/* Navigation Button */}
            <a 
              href="https://maps.app.goo.gl/YOUR_GOOGLE_MAPS_LINK" 
              target="_blank"
              className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
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