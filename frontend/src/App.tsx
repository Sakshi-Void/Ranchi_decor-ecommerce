import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingAssistant from "./components/FloatingAssistant";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import ShopProduct from "./pages/ShopProduct";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";   

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Products & Categories */}
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} /> 
          <Route path="/category/:id" element={<ProductCategory />} />
          <Route path="/product/:id" element={<ShopProduct />} />

          {/* Other Pages */}
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
