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
        <div className="w-80 md:w-96 h-80 overflow-hidden flex flex-col fixed border border-[#C5A059]/20 right-5 bottom-24 rounded-3xl shadow-2xl z-[9999] bg-white">
          {/* Header - Navy Background */}
          <div className="bg-[#2D3A3A] px-6 py-4 flex justify-between items-center text-white">
            <h2 className="text-sm font-semibold tracking-wide">Silver Steps Villa</h2>
            <X className="cursor-pointer hover:text-[#C5A059] transition" onClick={() => setOpenChat(false)} />
          </div>

          {/* Chat Area */}
          <div className="p-4 bg-[#F4F1EA] flex flex-col flex-grow">
            <div className="px-4 py-3 rounded-2xl bg-white text-[#2D3A3A] w-fit mb-4 text-sm shadow-sm border border-[#2D3A3A]/5">
              How can we help you plan your stay?
            </div>

            {/* Message Input */}
            <div className="bg-white p-2 rounded-full mt-auto flex items-center gap-2 shadow-inner border border-[#2D3A3A]/10">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-3 py-2 rounded-full outline-none text-[#2D3A3A] bg-transparent text-sm placeholder:text-[#2D3A3A]/40"
              />
              <SendHorizontal
                size={22}
                className="text-[#2D3A3A] hover:text-[#C5A059] cursor-pointer transition-colors"
                onClick={handleSend}
              />
            </div>
          </div>
        </div>
      )}

      {/* Floating Button - Gold Accent */}
      <button
        onClick={() => setOpenChat((prev) => !prev)}
        className="fixed bottom-6 right-6 z-[9998] bg-[#2D3A3A] hover:bg-[#C5A059] text-white rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        <FaWhatsapp className="text-3xl" />
      </button>
    </>
  );
};

export default WhatsAppButton;