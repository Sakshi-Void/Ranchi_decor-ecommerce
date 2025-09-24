import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PopularCategories from './components/PopularCategories';
import WhyChooseUs from './components/WhyChooseUs';
import LifestyleNavigation from './components/LifestyleNavigation';
import BestSellers from './components/BestSellers';
import LifestyleHighlights from './components/LifestyleHighlights';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingAssistant from './components/FloatingAssistant';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PopularCategories />
        <WhyChooseUs />
        <LifestyleNavigation />
        <BestSellers />
        <LifestyleHighlights />
        <Testimonials />
      </main>
      <Footer />
      <FloatingAssistant />
    </div>
  );
}

export default App;