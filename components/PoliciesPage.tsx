"use client";

import React from "react";
import { ShieldCheck, Clock, Ban, Dog, CreditCard } from "lucide-react";

const POLICIES = [
  {
    icon: <Clock size={24} />,
    title: "Check-in & Check-out",
    desc: "Check-in time is 2:00 PM and Check-out is 11:00 AM. Early check-in or late check-out is subject to availability."
  },
  {
    icon: <CreditCard size={24} />,
    title: "Booking & Cancellation",
    desc: "50% advance to confirm booking. Free cancellation up to 7 days before arrival; after that, no refunds."
  },
  {
    icon: <Dog size={24} />,
    title: "Pet Policy",
    desc: "We are a pet-friendly villa! Please ensure pets are supervised and do not damage property."
  },
  {
    icon: <Ban size={24} />,
    title: "House Rules",
    desc: "Smoking is permitted only in outdoor areas. Please keep noise levels low after 10:00 PM."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Security & Privacy",
    desc: "Gated property with 24/7 security. Guests are responsible for their personal belongings."
  }
];

export default function PoliciesPage() {
  return (
    <section className="py-24 bg-sand min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-gold tracking-[0.4em] uppercase text-xs font-semibold">House Rules</span>
          <h2 className="text-4xl md:text-5xl font-serif text-sage mt-4 leading-tight">
            Guest <span className="italic font-light">Policies</span>
          </h2>
          <p className="text-sage/75 mt-6 max-w-2xl text-sm md:text-base leading-relaxed">
            To ensure a pleasant stay for everyone, please review our property guidelines. By booking with us, you agree to these terms.
          </p>
        </div>

        {/* Policies List */}
        <div className="space-y-6">
          {POLICIES.map((p, i) => (
            <div key={i} className="flex gap-6 p-6 border border-sage/5 rounded-3xl bg-white shadow-sm hover:border-gold/30 hover:-translate-y-0.5 transition-all duration-300">
              <div className="text-gold mt-1 shrink-0 bg-sand p-2.5 rounded-2xl border border-sage/5">{p.icon}</div>
              <div>
                <h4 className="text-lg font-bold text-sage mb-2 font-serif">{p.title}</h4>
                <p className="text-sage/70 leading-relaxed text-sm md:text-base">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Footer */}
        <div className="mt-16 p-8 bg-sage text-white rounded-3xl text-center border border-white/5 shadow-lg">
          <h4 className="font-serif text-xl mb-4">Have Questions?</h4>
          <p className="text-white/70 mb-6 text-sm max-w-sm mx-auto">Need clarification on our policies? We're here to help.</p>
          <a href="https://wa.me/918920924077" className="inline-block bg-gold text-sage px-8 py-3 rounded-full font-bold hover:bg-white hover:scale-105 transition-all tracking-wider text-sm shadow-md">
            CONTACT US ON WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}