// In-memory students data
const students = [
  { id: 1, name: "Neel", age: 21, course: "Computer Science" },
  { id: 2, name: "Priyesha", age: 22, course: "Electrical Engineering" },
  { id: 3, name: "Mahir", age: 20, course: "Mechanical Engineering" },
];

// Dynamic GET handler
export async function GET(request, { params }) {
  // params.id is a string from the URL
  const id = parseInt(params.id);

  const student = students.find((s) => s.id === id);

  if (!student) {
    return new Response(JSON.stringify({ error: "Student not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(student), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
