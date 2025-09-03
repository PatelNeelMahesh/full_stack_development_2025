# CRUD API Basics in Next.js 15 (App Router)

This guide explains how we implemented basic CRUD operations (Create, Read, Update, Delete) in **Next.js 15** using the **App Router** and `/app/api` routes.
We’ll use a **simple in-memory dataset** so you can focus on understanding the API logic rather than database complexity.

---

## 1. Understanding API Routes in Next.js (App Router)

In Next.js 15 with the **App Router**, API endpoints are created inside the `/app/api` directory.
Each folder inside `/app/api` becomes an **API route**.

Example:

```
/app/api/students/route.js
```

This creates an endpoint at:

```
http://localhost:3000/api/students
```

---

## 2. The In-Memory Dataset

For simplicity, we store student data in a plain JavaScript array:

```javascript
let students = [
  { id: 1, name: "Arjun", age: 20 },
  { id: 2, name: "Priya", age: 22 },
];
```

Since we’re not using a database, **any changes will be lost** when you restart the server.
The goal is to understand API mechanics, not persistence.

---

## 3. HTTP Methods in Our CRUD API

### 3.1 GET – Read All Students

**Purpose:** Retrieve all student records.
When a client sends a **GET** request to `/api/students`, our server returns the `students` array as JSON.

**How it works:**

- The function `GET()` is exported from `route.js`.
- It returns a `Response` object with `JSON.stringify(students)`.

**Key points:**

- `GET` should **not** change data.
- The response is always **read-only**.

---

### 3.2 GET (Dynamic) – Read a Single Student

**Purpose:** Retrieve a student by `id`.
Example: `/api/students/2` returns the student with ID 2.

**How it works:**

- We create a new folder `/app/api/students/[id]/route.js`.
- `[id]` is a **dynamic route parameter**.
- We extract the `id` from `params` and search for the matching student.
- If found, return the student object; otherwise return a **404**.

**Key points:**

- Dynamic routes allow filtering data based on URL parameters.
- Always validate the parameter before using it.

---

### 3.3 POST – Create a Student

**Purpose:** Add a new student to the array.
Example request body:

```json
{ "name": "Ravi", "age": 21 }
```

**How it works:**

- The function `POST(request)` is exported.
- We use `await request.json()` to parse incoming JSON.
- A new ID is generated (e.g., `students.length + 1`).
- The new student object is pushed into the array.
- Response returns the created student with status `201`.

**Key points:**

- POST is used for **creation only**.
- Always validate inputs before storing.

---

### 3.4 PUT – Update a Student

**Purpose:** Modify an existing student’s details.
Example: Updating `/api/students/2` with:

```json
{ "name": "Priya Sharma", "age": 23 }
```

**How it works:**

- We use `/app/api/students/[id]/route.js` again.
- The `PUT(request, { params })` function reads both `id` and body data.
- We find the student by `id` and update its values.
- The updated student is returned as a response.

**Key points:**

- PUT replaces the entire resource (or its given fields).
- If the student doesn’t exist, return a **404**.

---

### 3.5 DELETE – Remove a Student

**Purpose:** Delete a student record by ID.
Example: `/api/students/1` deletes the student with ID 1.

**How it works:**

- We use `/app/api/students/[id]/route.js` again.
- The `DELETE(_, { params })` function finds the index of the student.
- We use `splice()` to remove it from the array.
- Return a success message or 404 if not found.

**Key points:**

- DELETE should not return sensitive data.
- Always confirm resource existence before deleting.

---

## 4. How Middleware and Headers Fit In

Although not used in our simple example:

- **Middleware** in `/middleware.js` can intercept requests before they reach the API (useful for authentication).
- **Custom Headers** can be added to `Response` objects to control caching, security policies, etc.

Example:

```javascript
return new Response(JSON.stringify(data), {
  headers: { "Content-Type": "application/json" },
});
```

---

## 5. Summary of CRUD Flow

| HTTP Method | Purpose  | URL Pattern          | Example Request Body               | Example Response           |
| ----------- | -------- | -------------------- | ---------------------------------- | -------------------------- |
| GET         | Read all | `/api/students`      | –                                  | `[{}, {}, ...]`            |
| GET (id)    | Read one | `/api/students/{id}` | –                                  | `{}`                       |
| POST        | Create   | `/api/students`      | `{ "name": "Ravi", "age": 21 }`    | `{ "id": 3, ... }`         |
| PUT         | Update   | `/api/students/{id}` | `{ "name": "Updated", "age": 25 }` | `{ "id": 1, ... }`         |
| DELETE      | Remove   | `/api/students/{id}` | –                                  | `{ "message": "Deleted" }` |

---
