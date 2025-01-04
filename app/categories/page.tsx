//app/categories/page.tsx
import React from 'react';
import { client } from '../../sanity/lib/client'; // Import the Sanity client for fetching data
import Link from 'next/link'; // Import Link for client-side navigation
import Card from '../components/Card'; // Import the Card component

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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category._id} title={category.title} content={
            <Link href={`/categories/${category.slug.current}`} className="text-blue-500 hover:underline">
              View Posts
            </Link>
          } />
        ))}
      </div>
    </div>
  );
} 