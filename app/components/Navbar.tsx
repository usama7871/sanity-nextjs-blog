//app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link'; // Import Link for client-side navigation
import { FaHome, FaTag, FaUser } from 'react-icons/fa'; // Icons for each link

// Navbar component for site navigation
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-3xl font-extrabold text-white tracking-wide">
          <Link href="/">My Blog</Link>
        </div>
        
        {/* Navigation Links */}
        <div className="space-x-8 flex items-center">
          <Link href="/" className="flex items-center hover:text-indigo-200 transition duration-300">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link href="/categories" className="flex items-center hover:text-indigo-200 transition duration-300">
            <FaTag className="mr-2" /> Categories
          </Link>
          <Link href="/authors" className="flex items-center hover:text-indigo-200 transition duration-300">
            <FaUser className="mr-2" /> Authors
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
