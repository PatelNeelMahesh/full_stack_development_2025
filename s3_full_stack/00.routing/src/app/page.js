"use client"; // Needed because we’ll use useRouter (client-side hook)

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  // Example of programmatic navigation
  const goToAbout = () => {
    router.push("/about");
  };

  const goToContact = () => {
    router.push("/contact");
  };

  const goToBlogSlug = () => {
    router.push("/blog/material-ui-integration");
  };

  const goToError = () => {
    router.push("/error");
  };

  const goToNotFound = () => {
    router.push("/not-found");
  };

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Welcome to Next.js Navigation Demo</h1>
      <p>
        This page demonstrates linking between different routes using{" "}
        <code>{"<Link>"}</code> for static navigation and{" "}
        <code>useRouter()</code> for programmatic navigation.
      </p>

      <section style={{ marginTop: "20px" }}>
        <h2>Static Navigation using {"<Link>"}</h2>
        <ul>
          <li>
            <Link href="/about">Go to About Page</Link>
          </li>
          <li>
            <Link href="/contact">Go to Contact Page</Link>
          </li>
          <li>
            <Link href="/blog/material-ui-integration">
              Go to Blog Page with slug "material-ui-integration"
            </Link>
          </li>
          <li>
            <Link href="/error">Go to Error Page</Link>
          </li>
          <li>
            <Link href="/not-found">Go to Not Found Page</Link>
          </li>
        </ul>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Programmatic Navigation using useRouter()</h2>
        <button onClick={goToAbout} style={btnStyle}>
          Go to About Page
        </button>
        <button onClick={goToContact} style={btnStyle}>
          Go to Contact Page
        </button>
        <button onClick={goToBlogSlug} style={btnStyle}>
          Go to Blog (slug: material-ui-integration)
        </button>
        <button onClick={goToError} style={btnStyle}>
          Go to Error Page
        </button>
        <button onClick={goToNotFound} style={btnStyle}>
          Go to Not Found Page
        </button>
      </section>
    </main>
  );
}

const btnStyle = {
  marginRight: "10px",
  marginTop: "5px",
  padding: "8px 12px",
  background: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
