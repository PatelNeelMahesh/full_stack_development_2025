"use client"; // Required in Next.js 13+ App Router for client components

import { useEffect, useState } from "react";

export default function PostsPage() {
  // Step 1: State to store posts and loading state
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Step 2: Fetch data after component mounts
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data); // Update state with posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    }
    fetchPosts();
  }, []);

  // Step 3: Render UI
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Blog Posts (CSR Example)</h1>

      {/* Show loader while fetching */}
      {loading && <p className="text-gray-500">Loading posts...</p>}

      {/* Render posts */}
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-gray-600 text-sm">{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}