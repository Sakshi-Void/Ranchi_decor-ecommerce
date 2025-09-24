import React from "react";
import HeroSection from "../components/HeroSection";
import PopularCategories from "../components/PopularCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import LifestyleNavigation from "../components/LifestyleNavigation";
import BestSellers from "../components/BestSellers";
import LifestyleHighlights from "../components/LifestyleHighlights";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularCategories />
      <WhyChooseUs />
      <LifestyleNavigation />
      <BestSellers />
      <LifestyleHighlights />
      <Testimonials />
    </>
  );
}
