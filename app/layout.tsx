import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Silver Steps Villa | Luxury Cottage in Bhimtal",
  description:
    "Experience a luxury 3BHK cottage in the heart of Bhimtal, Uttarakhand. Featuring a private pool, gym, and lawn. Book your peaceful getaway today.",
  keywords: [
    "Silver Steps Villa",
    "Bhimtal Holiday Home",
    "Luxury Villa Uttarakhand",
    "Cottage rental Bhimtal",
    "Private pool villa",
  ],
  verification: {
    google: "AzCypw0CLN1C5ZkIsL9rfPPmigKLRCtVO6NQuopZCdw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="bg-sand text-sage font-sans antialiased min-h-screen flex flex-col">
        <Navbar/>
        <main className="flex-grow">
          {children}
        </main>
        <Footer/>
        <WhatsAppButton/>
      </body>
    </html>
  );
}