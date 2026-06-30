"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ShieldCheck, Clock, Sparkles, ArrowRight } from "lucide-react";

export default function BookingPage() {
  const [selected, setSelected] = useState<DateRange | undefined>();
  const [blockedDates, setBlockedDates] = useState<Date[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [male, setMale] = useState(0);
  const [female, setFemale] = useState(0);
  const [kids, setKids] = useState(0);
  const [infants, setInfants] = useState(0);

  const GuestCounter = ({
    label,
    value,
    setValue,
  }: {
    label: string;
    value: number;
    setValue: (value: number) => void;
  }) => (
    <div className="flex items-center justify-between py-3 border-b border-sage/5 last:border-0">
      <span className="text-sage font-medium text-sm md:text-base">{label}</span>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setValue(Math.max(0, value - 1))}
          className="w-9 h-9 rounded-full border border-sage/20 flex items-center justify-center hover:bg-sand transition text-sage font-bold focus:outline-none cursor-pointer"
        >
          −
        </button>

        <span className="w-6 text-center font-semibold text-sage">
          {value}
        </span>

        <button
          type="button"
          onClick={() => setValue(value + 1)}
          className="w-9 h-9 rounded-full border border-sage/20 flex items-center justify-center hover:bg-sand transition text-sage font-bold focus:outline-none cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );

  useEffect(() => {
    fetch("/api/availability")
      .then((res) => res.json())
      .then((data) => {
        const dates = data.blockedDates.map((d: string) => {
          const [year, month, day] = d.split("-").map(Number);
          return new Date(year, month - 1, day, 12, 0, 0);
        });
        setBlockedDates(dates);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const handleBooking = () => {
    if (!selected?.from || !selected?.to) {
      alert("Please select check-in and check-out dates.");
      return;
    }

    const checkIn = format(selected.from, "PPP");
    const checkOut = format(selected.to, "PPP");
    const totalGuests = male + female + kids + infants;

    const message = `✨ *New Booking Inquiry - Silver Steps Villa* ✨

📅 Check-in: ${checkIn}
📅 Check-out: ${checkOut}

👨 Male Guests: ${male}
👩 Female Guests: ${female}
🧒 Kids (3-12): ${kids}
👶 Infants (<3): ${infants}

👥 Total Guests: ${totalGuests}

Please share pricing and availability details.`;

    window.open(
      `https://wa.me/918920924077?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen py-24 sm:py-32 px-4 md:px-8 bg-sand flex justify-center items-center">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Direct Benefits Banner Card */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-sage text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden border border-white/5 min-h-[400px] lg:min-h-0">
          <div className="absolute inset-0 bg-gradient-to-t from-sage via-sage/80 to-transparent z-10" />
          <img 
            src="https://res.cloudinary.com/ddy8vp8zy/image/upload/v1781019330/chetan-villa/villaa_u4ozmd.avif" 
            alt="Silver Steps Villa"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />

          <div className="relative z-20 space-y-8 flex-grow">
            <div>
              <span className="text-gold tracking-[0.3em] uppercase text-xs font-bold block mb-2 font-serif">Direct Booking</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">Plan Your <br/>Mountain Escape</h2>
              <p className="text-white/70 text-sm mt-3 leading-relaxed">
                Connect directly with us to get the best pricing, priority check-in assistance, and personalized stay planning.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4 pt-6 border-t border-white/10 text-left">
              <div className="flex gap-3.5 items-start">
                <Sparkles className="text-gold shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="text-sm font-semibold text-white font-serif">Exclusive Benefits</h4>
                  <p className="text-white/60 text-xs mt-0.5 leading-relaxed">Save up to 15% booking fees, flexible date changes, and complimentary bonfires.</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <Clock className="text-gold shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="text-sm font-semibold text-white font-serif">Flexible Hours</h4>
                  <p className="text-white/60 text-xs mt-0.5 leading-relaxed">Check-in at 2:00 PM, Check-out at 11:00 AM. Early check-in prioritised.</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <ShieldCheck className="text-gold shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="text-sm font-semibold text-white font-serif">Peace of Mind</h4>
                  <p className="text-white/60 text-xs mt-0.5 leading-relaxed">Gated cottage sanctuary with private parking, pool, gym, and 24/7 security.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-20 pt-8 mt-8 border-t border-white/10 text-[11px] text-white/50 flex flex-col gap-1 font-serif">
            <p>📍 Dungsil Talla, Bhimtal, Uttarakhand - 263136</p>
            <p>💬 Concierge Helpline: +91 89209 24077</p>
          </div>
        </div>

        {/* Right Column: Calendar Controls Card */}
        <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-sage/5 flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-serif text-sage mb-1 text-center lg:text-left">Select Dates</h3>
            <p className="text-xs text-red-500 mb-6 text-center lg:text-left italic">
              Dates highlighted in red are already reserved.
            </p>

            {/* Scrollable calendar view for mobile, centered */}
            <div className="w-full overflow-x-auto flex justify-center bg-sand/35 py-3 rounded-2xl border border-sage/5 select-none mb-6">
              {isLoading ? (
                <p className="py-12 text-sage text-sm font-medium">Checking availability...</p>
              ) : (
                <DayPicker
                  mode="range"
                  selected={selected}
                  onSelect={setSelected}
                  disabled={[{ before: new Date() }, ...blockedDates]}
                  excludeDisabled
                  className="text-sage font-sans"
                  modifiersStyles={{
                    disabled: {
                      color: "#ef4444",
                      cursor: "not-allowed",
                      opacity: 0.5,
                    },
                  }}
                />
              )}
            </div>

            {/* Selected Date Summary */}
            {selected?.from && (
              <div className="mb-6 p-4 bg-sand/60 rounded-2xl border border-sage/5 shadow-inner flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-sage/50 font-bold">Check-In</span>
                  <p className="text-sm font-semibold text-sage font-serif">{format(selected.from, "MMM dd, yyyy")}</p>
                </div>
                <ArrowRight className="hidden sm:block text-gold" size={16} />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-sage/50 font-bold">Check-Out</span>
                  <p className="text-sm font-semibold text-sage font-serif">
                    {selected.to ? format(selected.to, "MMM dd, yyyy") : "Choose Date"}
                  </p>
                </div>
              </div>
            )}

            {/* Guest details section */}
            <div className="mb-6">
              <div className="bg-white border border-sage/10 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-4 bg-sand/30 border-b border-sage/10">
                  <h3 className="text-base font-serif text-sage font-bold">Guests</h3>
                  <p className="text-xs text-sage/60">Choose number of guests</p>
                </div>

                <div className="px-4">
                  <GuestCounter label="Male Guests" value={male} setValue={setMale} />
                  <GuestCounter label="Female Guests" value={female} setValue={setFemale} />
                  <GuestCounter label="Kids (3–12 Years)" value={kids} setValue={setKids} />
                  <GuestCounter label="Infants (Under 3)" value={infants} setValue={setInfants} />
                </div>
              </div>

              <div className="mt-4 bg-gradient-to-r from-sage to-sage/80 rounded-2xl p-4 text-white shadow-md flex items-center justify-between">
                <span className="text-sm opacity-85 font-medium">Total Guests</span>
                <span className="text-2xl font-bold font-serif">{male + female + kids + infants}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleBooking}
            className="w-full bg-sage hover:bg-gold text-white py-4 rounded-2xl font-bold transition-all duration-300 shadow-md tracking-wider text-sm cursor-pointer mt-4"
          >
            SEND BOOKING REQUEST
          </button>
        </div>

      </div>
    </main>
  );
}