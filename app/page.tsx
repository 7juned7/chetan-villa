
import FeaturesSection from "@/components/FeaturedSection";
import Hero from "@/components/Herosection";
import PremiumFeatures from "@/components/PremiumFeatures";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <FeaturesSection/>
      <PremiumFeatures/>
    </div>
  );
}
