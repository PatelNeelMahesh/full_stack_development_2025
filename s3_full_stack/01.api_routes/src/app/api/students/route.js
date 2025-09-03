// src/app/api/students-get/route.js

// Simple in-memory students data
const students = [
  { id: 1, name: "Dax", age: 21, course: "Computer Science" },
  { id: 2, name: "Priyesha", age: 22, course: "Electrical Engineering" },
  { id: 3, name: "Mahir", age: 20, course: "Mechanical Engineering" },
];

// Handle only GET requests
export async function GET() {
  return new Response(JSON.stringify(students), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
