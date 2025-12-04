// app/middleware.js
import { NextResponse } from "next/server";
import { verifyToken } from "./lib/auth.js";

const PUBLIC = ["/api/auth/login", "/api/auth/register", "/_next", "/favicon.ico"];

function requiredRoles(path) {
  if (path.startsWith("/api/company")) return ["company_head"];
  if (path.startsWith("/api/admin")) return ["admin","company_head"];
  if (path.startsWith("/api/seller")) return ["seller","admin","company_head"];
  if (path.startsWith("/api/customer")) return ["customer","seller","admin","company_head"];
  return null;
}

export function middleware(req) {
  const { pathname } = req.nextUrl;
  if (!pathname.startsWith("/api/") || PUBLIC.some(p => pathname.startsWith(p))) return NextResponse.next();

  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const payload = verifyToken(token);
  if (!payload) return NextResponse.json({ error: "Invalid token" }, { status: 401 });

  const roles = requiredRoles(pathname);
  if (roles && !roles.includes(payload.role)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  return NextResponse.next();
}

export const config = { matcher: ["/api/:path*"] };
