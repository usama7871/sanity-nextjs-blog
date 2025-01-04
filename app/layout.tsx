//app/layout.tsx
import React from 'react';
import Navbar from './components/Navbar'; // Import the Navbar component
import Footer from './components/Footer'; // Import the Footer component
import './globals.css'; // Ensure this line is present

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 font-sans">
        <Navbar /> {/* Render the Navbar */}
        <main className="max-w-7xl mx-auto p-6">
          <div className="bg-white shadow-lg rounded-lg p-6 mt-4">
            {children}
          </div>
        </main>
        <Footer /> {/* Render the Footer */}
      </body>
    </html>
  );
}