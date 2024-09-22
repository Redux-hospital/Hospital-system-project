// HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-800 text-white">
      <div className="absolute inset-0">
        <img
          src="https://via.placeholder.com/1920x800"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          We provide exceptional care and services tailored to your needs.
        </p>
        <a
          href="/contact"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
