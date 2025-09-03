// pages/ssr-posts.js

import React from "react";

export default function SSRPosts({ posts }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Latest Posts (SSR Example)</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Server-Side Rendering with getServerSideProps
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts: posts.slice(0, 5), // Display only first 5 posts
    },
  };
}
