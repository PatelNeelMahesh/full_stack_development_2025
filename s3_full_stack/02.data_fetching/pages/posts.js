import React from "react";

// This function runs at build time
export async function getStaticProps() {
  // Fetching posts from JSONPlaceholder API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts, // Passed as props to the page
    },
  };
}

export default function Posts({ posts }) {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Blog Posts (SSG using getStaticProps)</h1>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
