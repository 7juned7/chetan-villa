import { NextResponse } from 'next/server';
import ical from 'ical'; // node-ical ki jagah sirf 'ical'

export async function GET() {
  const url = "https://www.airbnb.com/calendar/ical/1663575336229952262.ics?t=2c543dc8398a49998d028a1757d50089&locale=en-GB";

  try {
    const response = await fetch(url);
    const data = await response.text();
    const events = ical.parseICS(data);
    
    const blockedDates: Date[] = [];

    for (const key in events) {
      const event = events[key];
      if (event.type === 'VEVENT' && event.start && event.end) {
        const start = new Date(event.start);
        const end = new Date(event.end);
        
        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
          blockedDates.push(new Date(d));
        }
      }
    }
    
    return NextResponse.json({ blockedDates });
  } catch (error) {
    console.error("Calendar parse error:", error);
    return NextResponse.json({ blockedDates: [] });
  }
}