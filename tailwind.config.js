/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include all files in the app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // Include all files in the pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include all files in the components directory
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Tailwind's blue-500
        secondary: '#06b6d4', // Tailwind's teal-500
        accent: '#f97316', // Tailwind's orange-500
      },
    },
  },
  plugins: [],
}

