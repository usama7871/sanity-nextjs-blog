//app/authors/page.tsx
import React from 'react';
import { client } from '../../sanity/lib/client'; // Sanity client import
import Link from 'next/link';

type Author = {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
};

async function fetchAuthors(): Promise<Author[]> {
  const query = `*[_type == "author"]{_id, name, slug}`;
  const authors: Author[] = await client.fetch(query);
  return authors;
}

export default async function AuthorsPage() {
  const authors = await fetchAuthors();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Authors</h1>
      <ul className="space-y-2">
        {authors.map((author) => (
          <li key={author._id}>
            <Link href={`/authors/${author.slug.current}`} className="text-blue-500 hover:underline">
              {author.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 