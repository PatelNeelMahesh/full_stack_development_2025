"use client";

export default function Error({ error, reset }) {
  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "red" }}>Something went wrong</h1>
      <p>{error?.message || "An unexpected error occurred."}</p>

      <button
        onClick={() => reset()}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Try Again
      </button>
    </main>
  );
}
