"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function BookingPage() {
  const [selected, setSelected] = useState<DateRange | undefined>();
  const [blockedDates, setBlockedDates] = useState<Date[]>([]);
  const [isLoading, setIsLoading] = useState(true);const [male, setMale] = useState(0);
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
  <div className="flex items-center justify-between py-4 border-b border-[#2D3A3A]/10 last:border-0">
    <span className="text-[#2D3A3A] font-medium">{label}</span>

    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => setValue(Math.max(0, value - 1))}
        className="w-9 h-9 rounded-full border border-[#2D3A3A]/20 flex items-center justify-center hover:bg-[#F4F1EA] transition"
      >
        −
      </button>

      <span className="w-6 text-center font-semibold">
        {value}
      </span>

      <button
        type="button"
        onClick={() => setValue(value + 1)}
        className="w-9 h-9 rounded-full border border-[#2D3A3A]/20 flex items-center justify-center hover:bg-[#F4F1EA] transition"
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
        const [year, month, day] = d
          .split("-")
          .map(Number);

        return new Date(
          year,
          month - 1,
          day,
          12, // noon to avoid timezone bugs
          0,
          0
        );
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

  const totalGuests =
    male + female + kids + infants;

  const message = `✨ *New Booking Inquiry - Silver Steps Villa* ✨

 Check-in: ${checkIn}
 Check-out: ${checkOut}

Male Guests: ${male}
 Female Guests: ${female}
 Kids (3-12): ${kids}
 Infants (<3): ${infants}

👥 Total Guests: ${totalGuests}

Please share pricing and availability details.`;

  window.open(
    `https://wa.me/918920924077?text=${encodeURIComponent(
      message
    )}`,
    "_blank"
  );
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
  mode="range"
  selected={selected}
  onSelect={setSelected}
  disabled={[
    { before: new Date() },
    ...blockedDates,
  ]}
  pagedNavigation
  showOutsideDays
  className="text-[#2D3A3A]"
  modifiersStyles={{
    disabled: {
      color: "#dc2626",
      cursor: "not-allowed",
      opacity: 0.5,
    },
  }}
/>
          )}
        </div>
       <div className="mb-8">
  <div className="bg-white border border-[#2D3A3A]/10 rounded-3xl overflow-hidden shadow-sm">
    <div className="p-5 border-b border-[#2D3A3A]/10">
      <h3 className="text-lg font-serif text-[#2D3A3A]">
        Guest Details
      </h3>
      <p className="text-sm text-gray-500">
        Select number of guests
      </p>
    </div>

    <div className="px-5">
      <GuestCounter
        label="Male Guests"
        value={male}
        setValue={setMale}
      />

      <GuestCounter
        label="Female Guests"
        value={female}
        setValue={setFemale}
      />

      <GuestCounter
        label="Kids (3–12 Years)"
        value={kids}
        setValue={setKids}
      />

      <GuestCounter
        label="Infants (Under 3)"
        value={infants}
        setValue={setInfants}
      />
    </div>
  </div>

  <div className="mt-4 bg-gradient-to-r from-[#2D3A3A] to-[#425454] rounded-2xl p-5 text-white">
    <div className="flex items-center justify-between">
      <span className="text-sm opacity-80">
        Total Guests
      </span>

      <span className="text-3xl font-bold">
        {male + female + kids + infants}
      </span>
    </div>
  </div>
</div>
{selected?.from && (
  <div className="mb-4 p-4 bg-[#F8F6F1] rounded-2xl border border-[#2D3A3A]/10">
    <p className="text-sm text-[#2D3A3A]">
      <strong>Check-in:</strong>{" "}
      {format(selected.from, "PPP")}
    </p>

    {selected.to && (
      <p className="text-sm text-[#2D3A3A] mt-1">
        <strong>Check-out:</strong>{" "}
        {format(selected.to, "PPP")}
      </p>
    )}
  </div>
)}

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