import React from 'react';
import { client } from '../../../sanity/lib/client'; // Import the Sanity client for fetching data
import { urlFor } from '../../../sanity/lib/image'; // Import the urlFor function to generate image URLs
import { PortableText } from '@portabletext/react'; // Import PortableText for rendering block content
import Card from '../../components/Card'; // Import the Card component
import Image from 'next/image'; // Import the Image component

// Define the Author type to match the structure of the author document in Sanity
type Author = {
  _id: string; // Unique identifier for the author
  name: string; // Name of the author
  slug: {
    current: string; // Slug for the author's URL
  };
  image: {
    asset: {
      _id: string; // Image asset ID
    };
  };
  bio: Array<{
    _type: string; // Type of the block (e.g., 'block', 'image', etc.)
    children: Array<{
      _key: string; // Unique key for the child
      _type: string; // Type of the child (e.g., 'span')
      text: string; // Text content
    }>;
  }>; // Bio of the author, stored as Portable Text
};

// Fetch the author data based on the slug
async function fetchAuthor(slug: string): Promise<Author | null> {
  const query = `*[_type == "author" && slug.current == $slug][0]{_id, name, slug, image, bio}`;
  const author: Author | null = await client.fetch(query, { slug }); // Fetch author data from Sanity
  return author; // Return the fetched author or null if not found
}

// AuthorPage component to display the author's details
export default async function AuthorPage({ params }: { params: { slug: string } }) {
  const { slug } = await params; // Await params
  const author = await fetchAuthor(slug); // Fetch the author based on the slug

  // Handle the case where the author is not found
  if (!author) {
    return <div className="container mx-auto text-center">Author not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <Card title={author.name} content={
        <>
          {author.image && (
            <Image
              src={urlFor(author.image).url()} // Generate the image URL using urlFor
              alt={author.name} // Alt text for the image
              width={500} // Set the width
              height={300} // Set the height
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
          )}
          <PortableText value={author.bio} /> {/* Render the author's bio using PortableText */}
        </>
      } />
    </div>
  );
} 