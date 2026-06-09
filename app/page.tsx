
import DirectBooking from "@/components/DirectBooking";
import FeaturesSection from "@/components/FeaturedSection";
import Hero from "@/components/Herosection";
import LocationPage from "@/components/LocationPage";
import PremiumFeatures from "@/components/PremiumFeatures";
import SocialProof from "@/components/SocialProof";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <PremiumFeatures/>
      <FeaturesSection/>
      <SocialProof/>
      <DirectBooking/>
      <LocationPage/>
    </div>
  );
}
