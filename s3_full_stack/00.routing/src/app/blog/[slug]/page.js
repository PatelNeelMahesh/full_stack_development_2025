// app/blog/[slug]/page.js

import React from "react";

const blogPosts = {
  "introduction-to-nextjs": {
    title: "Introduction to Next.js",
    date: "2025-08-12",
    author: "Neel M",
    content:
      "Next.js is a React framework that enables features like server-side rendering and static site generation. It's widely used for production-grade applications.",
  },
  "material-ui-integration": {
    title: "Integrating Material UI in Next.js",
    date: "2025-08-11",
    author: "Neel M",
    content:
      "Material UI is a popular React UI framework following Google’s Material Design guidelines. Integrating it with Next.js allows building responsive and attractive interfaces.",
  },
  "seo-best-practices": {
    title: "SEO Best Practices for Next.js Websites",
    date: "2025-08-10",
    author: "Neel M",
    content:
      "Optimizing SEO in Next.js involves using metadata, sitemaps, canonical tags, and server-side rendering to ensure search engines can properly index your site.",
  },
};

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h1>404 - Blog Post Not Found</h1>
        <p>The blog post you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <main
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "auto",
        lineHeight: "1.6",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>{post.title}</h1>
      <p style={{ color: "#666", fontSize: "0.9rem" }}>
        {post.date} | By {post.author}
      </p>
      <div style={{ marginTop: "20px" }}>{post.content}</div>
    </main>
  );
}

// Optional: Set metadata dynamically
export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug];
  if (!post) {
    return { title: "Blog Post Not Found" };
  }
  return { title: post.title };
}
