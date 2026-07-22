"use client";

import React from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const whatsappNumber = "918920924077";
  const whatsappMessage = "Hello, I would like to inquire about a stay at Silver Steps Villa.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-24 bg-[#F4F1EA] min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <span className="text-[#8F6B23] tracking-[0.4em] uppercase text-xs font-semibold">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#2D3A3A] mt-4">Get in Touch</h1>
          <p className="text-[#2D3A3A]/70 mt-4">We are here to answer your questions and help you plan your stay.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details Card */}
          <div className="bg-white p-8 rounded-3xl border border-[#2D3A3A]/10 shadow-sm space-y-8">
            <div className="flex items-center gap-4">
              <Phone className="text-[#C5A059]" size={24} />
              <span className="text-[#2D3A3A] font-medium">+91 89209 24077</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-[#C5A059]" size={24} />
              <span className="text-[#2D3A3A] font-medium">silverstepsvilla@gmail.com</span>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-[#C5A059] shrink-0" size={24} />
              <span className="text-[#2D3A3A] font-medium">Dungsil Talla, Bhimtal, Uttarakhand - 263136</span>
            </div>
          </div>

          {/* WhatsApp Action Card */}
          <div className="bg-[#2D3A3A] p-8 rounded-3xl text-white flex flex-col items-center justify-center text-center shadow-xl">
            <MessageCircle size={48} className="text-[#C5A059] mb-6" />
            <h3 className="text-2xl font-serif mb-4">Chat with us on WhatsApp</h3>
            <p className="text-white/70 mb-8">Fastest way to get booking availability and villa information.</p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C5A059] text-[#2D3A3A] px-8 py-4 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105"
            >
              START WHATSAPP CHAT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}