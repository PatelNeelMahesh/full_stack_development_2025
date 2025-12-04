// app/api/company/dashboard/route.js
import { NextResponse } from "next/server";
import { verifyToken } from "../../../lib/auth";
import { getBearerToken } from "../../../utils/getBearerToken";

export async function GET(req) {
  const token = getBearerToken(req);
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const payload = verifyToken(token);
  if (!payload) return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  if (payload.role !== "company_head") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  return NextResponse.json({ msg: "company dashboard (demo)", user: payload });
}
