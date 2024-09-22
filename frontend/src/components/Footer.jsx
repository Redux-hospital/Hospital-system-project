// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Website Name */}
          <div className="text-xl font-bold text-white mb-4 md:mb-0">
            WebsiteName
          </div>

          {/* Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/about" className="hover:text-white">About</a>
            <a href="/contact" className="hover:text-white">Contact</a>
            <a href="/doctor" className="hover:text-white">Our Doctor</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-white">
              <i className="fab fa-facebook-f"></i> {/* Font Awesome Icon */}
            </a>
            <a href="https://twitter.com" className="hover:text-white">
              <i className="fab fa-twitter"></i> {/* Font Awesome Icon */}
            </a>
            <a href="https://instagram.com" className="hover:text-white">
              <i className="fab fa-instagram"></i> {/* Font Awesome Icon */}
            </a>
            <a href="https://linkedin.com" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i> {/* Font Awesome Icon */}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} WebsiteName. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
