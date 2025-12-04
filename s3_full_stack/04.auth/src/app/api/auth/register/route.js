// app/api/auth/register/route.js
import { NextResponse } from "next/server";
import { hashPassword, createUser, findUserByEmail, signToken } from "../../../lib/auth";

export async function POST(req) {
  try {
    const { name, email, password, role = "customer" } = await req.json();
    if (!name || !email || !password) return NextResponse.json({ error: "name,email,password required" }, { status: 400 });

    if (findUserByEmail(email)) return NextResponse.json({ error: "email exists" }, { status: 409 });

    const passwordHash = await hashPassword(password);
    const user = createUser({ name, email, passwordHash, role });
    const token = signToken({ id: user.id, email: user.email, role: user.role });

    return NextResponse.json({ user: { id: user.id, name: user.name, email: user.email, role: user.role }, token }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
