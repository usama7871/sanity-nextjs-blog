import React from 'react';
import Link from 'next/link'; // Import Link for client-side navigation

// Navbar component for site navigation
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600">
          <Link href="/">My Blog</Link>
        </div>
        <div className="space-x-6">
          <Link href="/" className="hover:text-indigo-500 transition duration-300">Home</Link>
          <Link href="/categories" className="hover:text-indigo-500 transition duration-300">Categories</Link>
          <Link href="/authors" className="hover:text-indigo-500 transition duration-300">Authors</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;