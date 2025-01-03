"use client";
import React from 'react';
import { urlFor } from '../../sanity/lib/image'; // Import the urlFor function to generate image URLs

// Define the PostCard component
const PostCard = ({ post }: { post: any }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden mb-4 shadow-md transition-transform transform hover:scale-105">
      {post.mainImage && (
        <img
          src={urlFor(post.mainImage).url()} // Generate the image URL using urlFor
          alt={post.title} // Alt text for the image
          className="w-full h-64 object-cover" // Tailwind CSS classes for styling
        />
      )}
      <div className="p-4">
        <a href={`/post/${post.slug.current}`} className="font-bold text-lg text-indigo-600 hover:underline transition duration-300">
          {post.title}
        </a>
        <p className="mt-2 text-gray-600">Published on {new Date(post.publishedAt).toLocaleDateString()} by {post.author.name}</p>
      </div>
    </div>
  );
};

export default PostCard; 