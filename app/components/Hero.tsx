import React from 'react';

// Hero component for the homepage
const Hero = () => {
  return (
    <div className="bg-blue-500 text-white py-16 px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
          Welcome to My Blog
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Explore the latest articles and insights from various categories.
        </p>
        <a 
          href="/categories" 
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;
