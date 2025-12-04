// app/api/auth/login/route.js
import { NextResponse } from "next/server";
import { findUserByEmail, comparePassword, signToken } from "../../../lib/auth";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) return NextResponse.json({ error: "email,password required" }, { status: 400 });

    const user = findUserByEmail(email);
    if (!user || !user.passwordHash) return NextResponse.json({ error: "invalid credentials" }, { status: 401 });

    const ok = await comparePassword(password, user.passwordHash);
    if (!ok) return NextResponse.json({ error: "invalid credentials" }, { status: 401 });

    const token = signToken({ id: user.id, email: user.email, role: user.role });
    return NextResponse.json({ user: { id: user.id, name: user.name, email: user.email, role: user.role }, token });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
