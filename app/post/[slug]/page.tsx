import React from 'react';
import { client } from '../../../sanity/lib/client'; // Import the Sanity client for fetching data
import { urlFor } from '../../../sanity/lib/image'; // Import the urlFor function to generate image URLs
import { PortableText } from '@portabletext/react'; // Import PortableText for rendering block content

// Define the Post type to match the structure of the post document in Sanity
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
  body: any[]; // Body of the post, stored as Portable Text
  publishedAt: string; // Date the post was published
  author: {
    name: string; // Name of the author
  };
};

// Fetch the post data based on the slug
async function fetchPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{_id, title, slug, mainImage, body, publishedAt, author->{name}}`;
  const post: Post | null = await client.fetch(query, { slug }); // Fetch post data from Sanity
  return post; // Return the fetched post or null if not found
}

// PostPage component to display the post's details
export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug); // Fetch the post based on the slug

  // Handle the case where the post is not found
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.mainImage && (
        <img
          src={urlFor(post.mainImage).url()} // Generate the image URL using urlFor
          alt={post.title} // Alt text for the image
          className="w-full h-64 object-cover mb-4"
        />
      )}
      <p className="text-gray-500 text-sm">Published on {new Date(post.publishedAt).toLocaleDateString()} by {post.author.name}</p>
      <PortableText value={post.body} /> {/* Render the post's body using PortableText */}
    </div>
  );
} 