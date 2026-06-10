"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function BookingPage() {
  const [selected, setSelected] = useState<Date>();
  const [blockedDates, setBlockedDates] = useState<Date[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/availability')
      .then((res) => res.json())
      .then((data) => {
        const dates = data.blockedDates.map((d: string) => new Date(d));
        setBlockedDates(dates);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const handleBooking = () => {
    if (!selected) {
      alert("Please select a date first!");
      return;
    }
    
    const dateStr = format(selected, "PPP");
    const message = `✨ *New Booking Inquiry - Silver Steps Villa* ✨%0A%0AHello, I would like to request a booking for: *${dateStr}*.%0A%0APlease let me know if the villa is available and confirm the next steps to proceed. Looking forward to my stay!`;
    
    window.open(`https://wa.me/918920924077?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen py-24 px-6 bg-[#F4F1EA] flex justify-center items-center">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#2D3A3A]/10 max-w-md w-full">
        <h1 className="text-2xl font-serif text-[#2D3A3A] mb-2 text-center">Book Your Stay</h1>
        <p className="text-sm text-red-600 mb-6 text-center italic">
          Dates in red are already reserved or unavailable.
        </p>

        <div className="flex justify-center mb-6">
          {isLoading ? (
            <p className="py-10 text-[#2D3A3A]">Checking availability...</p>
          ) : (
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              disabled={[{ before: new Date() }, ...blockedDates]}
              className="text-[#2D3A3A]"
              // Yahan humne style aur cursor fixed kar diya hai
              modifiersStyles={{
                disabled: { 
                  color: '#dc2626', // Red color
                  cursor: 'not-allowed', 
                  opacity: '0.5' 
                }
              }}
            />
          )}
        </div>

        <button
          onClick={handleBooking}
          className="w-full bg-[#2D3A3A] text-white py-4 rounded-xl font-bold hover:bg-[#C5A059] transition-all shadow-lg"
        >
          SEND BOOKING REQUEST
        </button>
      </div>
    </main>
  );
}