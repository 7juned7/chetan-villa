import { NextResponse } from "next/server";
import ical from "ical";

export async function GET() {
  const url =
    "https://www.airbnb.com/calendar/ical/1663575336229952262.ics?t=2c543dc8398a49998d028a1757d50089&locale=en-GB";

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    const data = await response.text();
    const events = ical.parseICS(data);

    const blockedDates = new Set<string>();

    for (const key in events) {
      const event: any = events[key];

      if (
        event.type !== "VEVENT" ||
        !event.start ||
        !event.end
      ) {
        continue;
      }

      const start = new Date(event.start);
      const end = new Date(event.end);

      // Airbnb checkout day exclude
      end.setDate(end.getDate() - 1);

      const current = new Date(start);

      while (current <= end) {
        const year = current.getFullYear();
        const month = String(
          current.getMonth() + 1
        ).padStart(2, "0");
        const day = String(
          current.getDate()
        ).padStart(2, "0");

        blockedDates.add(
          `${year}-${month}-${day}`
        );

        current.setDate(
          current.getDate() + 1
        );
      }
    }

    return NextResponse.json({
      blockedDates: Array.from(blockedDates).sort(),
    });
  } catch (error) {
    console.error("Calendar parse error:", error);

    return NextResponse.json({
      blockedDates: [],
    });
  }
}