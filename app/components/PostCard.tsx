//app/components/PostCard.tsx
"use client";
import React from 'react';
import { urlFor } from '../../sanity/lib/image'; // Import the urlFor function to generate image URLs
import Link from 'next/link'; // Import the Link component from Next.js
import Image from 'next/image'; // Import the Image component

type Post = {
  _id: string; // Unique identifier for the post
  title: string; // Title of the post
  slug: {
    current: string; // Slug for the post's URL
  };
  mainImage: {
    asset: {
      _id: string; // Image asset ID
    };
  };
  publishedAt: string; // Date the post was published
  author: {
    name: string; // Name of the author
  };
};

// Define the PostCard component
const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden mb-4 shadow-md transition-transform transform hover:scale-105">
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).url()} // Generate the image URL using urlFor
          alt={post.title} // Alt text for the image
          width={500} // Set the width
          height={300} // Set the height
          className="w-full h-64 object-cover" // Tailwind CSS classes for styling
        />
      )}
      <div className="p-4">
        <Link href={`/post/${post.slug.current}`} className="font-bold text-lg text-indigo-600 hover:underline transition duration-300">
          {post.title}
        </Link>
        <p className="mt-2 text-gray-600">Published on {new Date(post.publishedAt).toLocaleDateString()} by {post.author.name}</p>
      </div>
    </div>
  );
};

export default PostCard; 