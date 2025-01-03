import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter for navigation

// Search component to allow users to search for posts
const Search = () => {
  const [query, setQuery] = useState(''); // State to hold the search query
  const router = useRouter(); // Get the router instance

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    if (query) {
      router.push(`/search?query=${query}`); // Navigate to the search results page
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update the query state
        placeholder="Search posts..."
        className="border rounded-l px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-r px-4 py-2 hover:bg-blue-600 transition duration-300">Search</button>
    </form>
  );
};

export default Search; 