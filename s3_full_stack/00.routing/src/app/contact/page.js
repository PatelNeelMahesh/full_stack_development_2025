"use client"; // 👈 This tells Next.js this page is a Client Component

export default function ContactPage() {
  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Contact Us</h1>
      <p>
        If you have any questions, feel free to reach out to us.
      </p>

      <section style={{ marginTop: "20px" }}>
        <h3>Our Office</h3>
        <p>CodingGita HQ, Ahmedabad, India</p>
        <p>Email: contact@codinggita.com</p>
        <p>Phone: +91 98765 43210</p>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h3>Send us a message</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! We’ll get back to you soon.");
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <label>
              Name: <br />
              <input
                type="text"
                name="name"
                required
                style={{ padding: "8px", width: "300px" }}
              />
            </label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>
              Email: <br />
              <input
                type="email"
                name="email"
                required
                style={{ padding: "8px", width: "300px" }}
              />
            </label>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>
              Message: <br />
              <textarea
                name="message"
                required
                style={{ padding: "8px", width: "300px", height: "100px" }}
              />
            </label>
          </div>

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
