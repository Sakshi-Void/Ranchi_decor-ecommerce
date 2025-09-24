import React, { useState } from 'react';
import { Menu, X, Phone, ShoppingBag, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-red-500">Ranchi</span> Decor
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-500 transition-colors">Home</a>
            <div className="relative group">
              <a href="#products" className="text-gray-700 hover:text-red-500 transition-colors flex items-center">
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <a href="#flooring" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50">Flooring Solutions</a>
                  <a href="#carpets" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50">Carpets & Rugs</a>
                  <a href="#wallpapers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50">Wallpapers</a>
                  <a href="#blinds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50">Window Blinds</a>
                  <a href="#panels" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50">Decorative Panels</a>
                  <a href="#greenery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50">Artificial Greenery</a>
                </div>
              </div>
            </div>
            <a href="#gallery" className="text-gray-700 hover:text-red-500 transition-colors">Gallery</a>
            <a href="#about" className="text-gray-700 hover:text-red-500 transition-colors">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-red-500 transition-colors">Contact</a>
          </nav>

          {/* Header Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+91-9876543210" className="flex items-center text-gray-700 hover:text-red-500 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">Call Us</span>
            </a>
            <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
              Request Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-500 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              <a href="#home" className="block py-2 text-gray-700 hover:text-red-500">Home</a>
              <a href="#products" className="block py-2 text-gray-700 hover:text-red-500">Products</a>
              <a href="#gallery" className="block py-2 text-gray-700 hover:text-red-500">Gallery</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-red-500">About Us</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-red-500">Contact</a>
              <button className="w-full mt-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;