//app/authors/page.tsx
import React from 'react';
import { client } from '../../sanity/lib/client'; // Sanity client import
import Link from 'next/link'; // Import Link for client-side navigation
import Card from '../components/Card'; // Import the Card component

type Author = {
  _id: string; // Unique identifier for the author
  name: string; // Name of the author
  slug: {
    current: string; // Slug for the author's URL
  };
};

// Fetch the author data
async function fetchAuthors(): Promise<Author[]> {
  const query = `*[_type == "author"]{_id, name, slug}`; // Fetch all authors
  const authors: Author[] = await client.fetch(query); // Fetch author data from Sanity
  return authors; // Return the fetched authors
}

// AuthorsPage component to display the list of authors
export default async function AuthorsPage() {
  const authors = await fetchAuthors(); // Fetch the authors

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Authors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {authors.map((author) => (
          <Card key={author._id} title={author.name} content={
            <Link href={`/authors/${author.slug.current}`} className="text-blue-500 hover:underline">
              View Profile
            </Link>
          } />
        ))}
      </div>
    </div>
  );
} 