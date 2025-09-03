import React from "react";

export default function Blogs({ posts, time }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>Blog List (ISR Example)</h1>
      <p>Page generated at: {time}</p>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
      <p>
        (This page will revalidate every <strong>30 seconds</strong>)
      </p>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
      time: new Date().toLocaleTimeString(),
    },
    revalidate: 30, // ISR interval
  };
}
