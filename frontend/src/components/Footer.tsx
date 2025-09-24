import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-red-500">Ranchi</span> Decor
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for premium interior & flooring solutions. Transforming spaces 
                with quality products and exceptional service across Ranchi and Jharkhand.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-red-500 transition-colors">Products</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-red-500 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-red-500 transition-colors">Contact Us</a></li>
              <li><a href="#quote" className="text-gray-400 hover:text-red-500 transition-colors">Request Quote</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li><a href="#flooring" className="text-gray-400 hover:text-red-500 transition-colors">Flooring Solutions</a></li>
              <li><a href="#carpets" className="text-gray-400 hover:text-red-500 transition-colors">Carpets & Rugs</a></li>
              <li><a href="#wallpapers" className="text-gray-400 hover:text-red-500 transition-colors">Wallpapers</a></li>
              <li><a href="#blinds" className="text-gray-400 hover:text-red-500 transition-colors">Window Blinds</a></li>
              <li><a href="#panels" className="text-gray-400 hover:text-red-500 transition-colors">Decorative Panels</a></li>
              <li><a href="#greenery" className="text-gray-400 hover:text-red-500 transition-colors">Artificial Greenery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">123 Main Road, Kanke</p>
                  <p className="text-gray-400">Ranchi, Jharkhand - 834008</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <div>
                  <a href="tel:+91-9876543210" className="text-gray-400 hover:text-red-500 transition-colors">
                    +91-98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <div>
                  <a href="mailto:info@ranchidecor.com" className="text-gray-400 hover:text-red-500 transition-colors">
                    info@ranchidecor.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-400">Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>

              <a
                href="https://wa.me/919876543210"
                className="inline-flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Ranchi Decor - Designed by Ranchi Decor Team. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;