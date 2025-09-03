# **Next.js Routing & Navigation**

This guide covers the routing features of Next.js, including:

1. **File-Based Routing** (Static, Dynamic, and Nested Routes)
2. **Custom 404 and `_error.js` Pages**
3. **Linking Between Pages using `<Link>` and `useRouter`**

We’ll reference the exact code examples we created in our `app` directory and walk through the steps in detail.

---

## **1. File-Based Routing in Next.js**

Next.js uses a **file-system-based router**. This means:

* The structure of your files inside the `app/` directory automatically defines your routes.
* You don’t manually configure routes like in React Router — the file name **is** the route.

---

### **1.1 Static Routes**

Static routes are pages whose paths are fixed and directly mapped to filenames.

**Example:**

```
app/
 ├─ page.js          → `/`
 ├─ about/
 │   └─ page.js      → `/about`
 ├─ contact/
 │   └─ page.js      → `/contact`
```

**Code:**

```jsx
// app/about/page.js
export default function AboutPage() {
  return <h1>About Us</h1>;
}
```

Visiting `http://localhost:3000/about` will load the `AboutPage`.

---

### **1.2 Dynamic Routes**

Dynamic routes allow you to capture values from the URL using **square brackets** in the file name.

**Example:**

```
app/
 ├─ blog/
 │   └─ [slug]/
 │       └─ page.js   → `/blog/:slug`
```

**Code:**

```jsx
// app/blog/[slug]/page.js
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const params = useParams(); // { slug: 'post-title' }
  return <h1>Blog Post: {params.slug}</h1>;
}
```

Visiting `http://localhost:3000/blog/hello-world` shows:

```
Blog Post: hello-world
```

---

### **1.3 Nested Routes**

You can place directories inside directories to create **nested paths**.

**Example:**

```
app/
 ├─ dashboard/
 │   ├─ page.js        → `/dashboard`
 │   └─ settings/
 │       └─ page.js    → `/dashboard/settings`
```

This is useful for grouping related pages under a common URL prefix.

---

## **2. Custom Error Pages**

Next.js lets you create custom pages for when routes don’t exist or when an error occurs.

---

### **2.1 Custom 404 Page**

The `not-found.js` file inside `app/` is used for handling **Page Not Found** errors.

**Code:**

```jsx
// app/not-found.js
export default function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn’t exist.</p>
    </div>
  );
}
```

If you visit a non-existent URL like `/random-page`, this page will be displayed.

---

### **2.2 Custom Error Page**

You can handle **unexpected runtime errors** using the `error.js` file.

**Code:**

```jsx
// app/error.js
'use client'; // must be a Client Component
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Something went wrong!</h1>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
```

This component is shown when there’s a runtime error in rendering.

---

## **3. Linking Between Pages**

Navigation in Next.js can be handled in two main ways:

---

### **3.1 Using `<Link>` for Client-Side Navigation**

Next.js provides a `Link` component for smooth, **client-side transitions** without full page reloads.

**Example Navbar:**

```jsx
// app/components/Navbar.js
'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link> | 
      <Link href="/about">About</Link> | 
      <Link href="/contact">Contact</Link> | 
      <Link href="/blog/hello-world">Blog Example</Link> | 
      <Link href="/error">Error Page</Link>
    </nav>
  );
}
```

Add `<Navbar />` in `app/layout.js` so it appears on all pages.

---

### **3.2 Using `useRouter` for Programmatic Navigation**

When you need to navigate **after an event** (e.g., form submit), use `useRouter`.

**Example:**

```jsx
// app/contact/page.js
'use client';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    router.push('/thank-you'); // redirect to thank-you page
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Your Name" />
      <button type="submit">Send</button>
    </form>
  );
}
```

---

## **4. How It All Fits Together**

Here’s the **full picture** of our setup:

```
app/
 ├─ page.js               → Home page
 ├─ about/page.js         → Static route
 ├─ contact/page.js       → Static route with useRouter
 ├─ blog/[slug]/page.js   → Dynamic route
 ├─ dashboard/settings/   → Nested route example
 ├─ not-found.js          → Custom 404
 ├─ error.js              → Custom error handling
 ├─ components/Navbar.js  → Global navigation links
 └─ layout.js             → Wraps pages with Navbar
```

**Concepts Demonstrated:**

* **Static routes**: `/about`, `/contact`
* **Dynamic routes**: `/blog/:slug`
* **Nested routes**: `/dashboard/settings`
* **Custom error pages**: `not-found.js` and `error.js`
* **Navigation**: `<Link>` for static links, `useRouter` for dynamic navigation

---

## **5. Key Takeaways**

* **File name = Route** in Next.js.
* Use `[param]` for **dynamic URLs**.
* Use nested folders for **nested routes**.
* Create `not-found.js` for **404 pages** and `error.js` for error handling.
* Use `<Link>` for fast, client-side navigation.
* Use `useRouter` when you need to navigate programmatically.

---
