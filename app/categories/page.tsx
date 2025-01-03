//app/categories/page.tsx
import React from 'react';
import { client } from '../../sanity/lib/client'; // Import the Sanity client for fetching data
import Link from 'next/link'; // Import Link for client-side navigation

// Define the Category type to match the structure of the category document in Sanity
type Category = {
  _id: string; // Unique identifier for the category
  title: string; // Title of the category
  slug: {
    current: string; // Slug for the category's URL
  };
};

// Fetch the category data
async function fetchCategories(): Promise<Category[]> {
  const query = `*[_type == "category"]{_id, title, slug}`; // Fetch all categories
  const categories: Category[] = await client.fetch(query); // Fetch category data from Sanity
  return categories; // Return the fetched categories
}

// CategoriesPage component to display the list of categories
export default async function CategoriesPage() {
  const categories = await fetchCategories(); // Fetch the categories

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category._id}>
            <Link href={`/categories/${category.slug.current}`} className="text-blue-500 hover:underline">
              {category.title} {/* Link to the individual category */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 