// src/app/api/items/route.js

// Simple in-memory "database"
let items = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 },
];

// Handler for GET requests
export async function GET(request) {
  return new Response(JSON.stringify(items), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// Handler for POST requests
export async function POST(request) {
  const body = await request.json();
  const newItem = {
    id: Date.now(),
    name: body.name,
    price: body.price,
  };
  items.push(newItem);
  return new Response(JSON.stringify(newItem), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}

// Handler for PUT requests
export async function PUT(request) {
  const body = await request.json();
  const { id, ...updateData } = body;

  items = items.map((item) =>
    item.id === id ? { ...item, ...updateData } : item
  );

  return new Response(
    JSON.stringify({ message: "Item updated", items }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

// Handler for DELETE requests
export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get("id"));

  items = items.filter((item) => item.id !== id);

  return new Response(
    JSON.stringify({ message: "Item deleted", items }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
