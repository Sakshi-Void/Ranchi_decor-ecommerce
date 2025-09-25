// import React from "react";
// import { Routes, Route } from "react-router-dom";

// // Components
// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import PopularCategories from "./components/PopularCategories";
// import WhyChooseUs from "./components/WhyChooseUs";
// import LifestyleNavigation from "./components/LifestyleNavigation";
// import BestSellers from "./components/BestSellers";
// import LifestyleHighlights from "./components/LifestyleHighlights";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";
// import FloatingAssistant from "./components/FloatingAssistant";

// // Pages
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import ProductCategory from "./pages/ProductCategory";
// import ShopProduct from "./pages/ShopProduct";
// import Gallery from "./pages/Gallery";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// function App() {
//   return (
//     <div className="min-h-screen bg-white flex flex-col">
//       <Header />

//       <main className="flex-grow">
//         <Routes>
//           {/* Home Page */}
//           <Route path="/" element={<Home />} />

//           {/* Other Pages */}
//           <Route path="/products" element={<Products />} />
//           <Route path="/category/:id" element={<ProductCategory />} />
//           <Route path="/product/:id" element={<ShopProduct />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />

//           {/* 404 Fallback */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </main>

//       <Footer />
//       <FloatingAssistant />
//     </div>
//   );
// }

// export default App;
// App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingAssistant from "./components/FloatingAssistant";
import HeroSection from "./components/HeroSection";
import PopularCategories from "./components/PopularCategories";
import WhyChooseUs from "./components/WhyChooseUs";
import LifestyleNavigation from "./components/LifestyleNavigation";
import BestSellers from "./components/BestSellers";
import LifestyleHighlights from "./components/LifestyleHighlights";
import Testimonials from "./components/Testimonials";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import ShopProduct from "./pages/ShopProduct";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Other Pages */}
          <Route path="/products" element={<Products />} />
          <Route path="/category/:id" element={<ProductCategory />} />
          <Route path="/product/:id" element={<ShopProduct />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <FloatingAssistant />
    </div>
  );
}

export default App;
