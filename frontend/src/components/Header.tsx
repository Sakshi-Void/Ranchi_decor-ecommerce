import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Heart, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">
            <span className="text-red-500">Ranchi</span> Decor
          </div>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Navigation Links */}
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-red-500 transition-colors">Home</Link>
              <div className="relative group">
                <Link to="/products" className="text-gray-700 hover:text-red-500 transition-colors flex items-center">
                  Products
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {/* Dropdown */}
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    <Link to="/category/flooring" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50">Flooring Solutions</Link>
                    <Link to="/category/carpets" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50">Carpets & Rugs</Link>
                    <Link to="/category/wallpapers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50">Wallpapers</Link>
                    <Link to="/category/blinds" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50">Window Blinds</Link>
                    <Link to="/category/panels" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50">Decorative Panels</Link>
                    <Link to="/category/greenery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50">Artificial Greenery</Link>
                  </div>
                </div>
              </div>
              <Link to="/gallery" className="text-gray-700 hover:text-red-500 transition-colors">Gallery</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-500 transition-colors">About Us</Link>
              <Link to="/contact" className="text-gray-700 hover:text-red-500 transition-colors">Contact</Link>
            </nav>

            {/* Call Us, Wishlist & Cart */}
            <div className="flex items-center space-x-4">
              <a href="tel:+91-9876543210" className="flex items-center text-gray-700 hover:text-red-500 transition-colors">
                <Phone className="w-4 h-4 mr-1" />
                <span className="text-sm">Call Us</span>
              </a>

              {/* Wishlist */}
              <button className="text-gray-700 hover:text-red-500 transition-colors group">
                <Heart className="w-6 h-6 group-hover:fill-red-500" />
              </button>

              {/* Cart */}
              <button
                onClick={() => navigate('/checkout')}
                className="text-gray-700 hover:text-red-500 transition-colors"
              >
                <ShoppingBag className="w-6 h-6" />
              </button>
            </div>
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
              <Link to="/" className="block py-2 text-gray-700 hover:text-red-500">Home</Link>
              <Link to="/products" className="block py-2 text-gray-700 hover:text-red-500">Products</Link>
              <Link to="/gallery" className="block py-2 text-gray-700 hover:text-red-500">Gallery</Link>
              <Link to="/about" className="block py-2 text-gray-700 hover:text-red-500">About Us</Link>
              <Link to="/contact" className="block py-2 text-gray-700 hover:text-red-500">Contact</Link>
              <a href="tel:+91-9876543210" className="flex items-center py-2 text-gray-700 hover:text-red-500">
                <Phone className="w-4 h-4 mr-1" />
                Call Us
              </a>

              {/* Wishlist & Cart in Mobile */}
              <div className="flex items-center space-x-4 py-2">
                <button className="text-gray-700 hover:text-red-500 transition-colors group">
                  <Heart className="w-6 h-6 group-hover:fill-red-500" />
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate('/checkout');
                  }}
                  className="text-gray-700 hover:text-red-500 transition-colors"
                >
                  <ShoppingBag className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
