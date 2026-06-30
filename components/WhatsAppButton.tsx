"use client";

import { SendHorizontal, X } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "918920924077"; // Direct number
  const [openChat, setOpenChat] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    const encodedMessage = encodeURIComponent(message.trim());
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
    setMessage("");
    setOpenChat(false);
  };

  return (
    <>
      {/* Chat Box */}
      {openChat && (
        <div className="w-80 md:w-96 h-80 overflow-hidden flex flex-col fixed border border-gold/20 right-5 bottom-24 rounded-3xl shadow-2xl z-[9999] bg-white transition-all duration-300">
          {/* Header - Sage Background */}
          <div className="bg-sage px-6 py-4 flex justify-between items-center text-white">
            <h2 className="text-sm font-semibold tracking-wide font-serif">Silver Steps Villa</h2>
            <X className="cursor-pointer hover:text-gold transition" onClick={() => setOpenChat(false)} />
          </div>

          {/* Chat Area */}
          <div className="p-4 bg-sand flex flex-col flex-grow">
            <div className="px-4 py-3 rounded-2xl bg-white text-sage w-fit mb-4 text-sm shadow-sm border border-sage/5">
              How can we help you plan your stay?
            </div>

            {/* Message Input */}
            <div className="bg-white p-2 rounded-full mt-auto flex items-center gap-2 shadow-sm border border-sage/10">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-4 py-2 rounded-full outline-none text-sage bg-transparent text-sm placeholder:text-sage/40"
                onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
              />
              <button 
                onClick={handleSend}
                className="bg-sage hover:bg-gold text-white p-2 rounded-full transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Send Message"
              >
                <SendHorizontal size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button - Gold Accent with Pulse Ring */}
      <button
        onClick={() => setOpenChat((prev) => !prev)}
        className="fixed bottom-6 right-6 z-[999] bg-sage hover:bg-gold text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center hover:shadow-gold/20 hover:shadow-2xl active:scale-95 group focus:outline-none"
        aria-label="Contact via WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-sage/30 animate-ping group-hover:bg-gold/30 -z-10" />
        <FaWhatsapp className="text-3xl" />
      </button>
    </>
  );
};

export default WhatsAppButton;