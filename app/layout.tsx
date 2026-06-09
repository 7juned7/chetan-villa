import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silver Steps Villa | Luxury Cottage in Bhimtal",
  description: "Experience a luxury 3BHK cottage in the heart of Bhimtal, Uttarakhand. Featuring a private pool, gym, and lawn. Book your peaceful getaway today.",
  keywords: ["Silver Steps Villa", "Bhimtal Holiday Home", "Luxury Villa Uttarakhand", "Cottage rental Bhimtal", "Private pool villa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="">
       
        <main className="">
          <Navbar/>
          {children}
          {/* <Footer/> */}
        </main>
        {/* You can add a Footer component here later */}
      </body>
    </html>
  );
}