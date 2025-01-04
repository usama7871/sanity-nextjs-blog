// app/page.tsx
// import './globals.css';
import React from 'react';
import Hero from './components/Hero'; // Import the Hero component
import PostCard from './components/PostCard'; // Import the PostCard component
import Card from './components/Card'; // Import the Card component
import { client } from '../sanity/lib/client'; // Sanity client import

// Fetch data from Sanity directly in the component
async function fetchPosts() {
  const query = `*[_type == "post"]{_id, title, slug, publishedAt, author->{name}, mainImage} | order(publishedAt desc)`;
  const posts = await client.fetch(query);
  return posts;
}

// HomePage component to display fetched blog posts
export default async function HomePage() {
  const posts = await fetchPosts(); // Fetch posts here

  return (
    <div className="container mx-auto px-4 py-8">
      <Hero /> {/* Include the Hero section */}
      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-6">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <Card key={post._id} title={post.title} content={<PostCard post={post} />}>
              {/* You can add additional content here if needed */}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
