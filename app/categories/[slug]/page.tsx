import React from 'react';
import { client } from '../../../sanity/lib/client'; // Import the Sanity client for fetching data
import Link from 'next/link'; // Import Link for client-side navigation
import Card from '../../components/Card'; // Import the Card component

// Define the Category type to match the structure of the category document in Sanity
type Category = {
  _id: string; // Unique identifier for the category
  title: string; // Title of the category
  slug: {
    current: string; // Slug for the category's URL
  };
  description: string; // Description of the category
  posts: {
    title: string; // Title of the post
    slug: {
      current: string; // Slug for the post's URL
    };
  }[] | null; // Array of posts in the category, can be null
};

// Fetch the category data based on the slug
async function fetchCategory(slug: string): Promise<Category | null> {
  const query = `*[_type == "category" && slug.current == $slug][0]{_id, title, slug, description, posts[]->{title, slug}}`;
  const category: Category | null = await client.fetch(query, { slug }); // Fetch category data from Sanity
  return category; // Return the fetched category or null if not found
}

// CategoryPage component to display the category's details and its posts
export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await fetchCategory(params.slug); // Fetch the category based on the slug

  // Handle the case where the category is not found
  if (!category) {
    return <div className="container mx-auto text-center">Category not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <Card title={category.title} content={
        <>
          <p className="mb-4">{category.description}</p>
          <h2 className="text-2xl mt-4">Posts in this Category:</h2>
          <ul className="space-y-2">
            {category.posts && category.posts.length > 0 ? (
              category.posts.map((post) => (
                <li key={post.slug.current}>
                  <Link href={`/post/${post.slug.current}`} className="text-blue-500 hover:underline">
                    {post.title} {/* Link to the individual post */}
                  </Link>
                </li>
              ))
            ) : (
              <li>No posts available in this category.</li> // Handle case where there are no posts
            )}
          </ul>
        </>
      } />
    </div>
  );
} 