// lib/auth.js
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

const JWT_SECRET = process.env.JWT_SECRET || "change-me-in-dev";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

// JWT
export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}
export function verifyToken(token) {
  try { return jwt.verify(token, JWT_SECRET); } catch { return null; }
}

// Password
export async function hashPassword(p) { const s = await bcrypt.genSalt(10); return bcrypt.hash(p, s); }
export async function comparePassword(p, h) { return bcrypt.compare(p, h); }

// In-memory store
const USERS = new Map();
// create user
export function createUser({ name, email, passwordHash, role = "customer" }) {
  const u = { id: uuidv4(), name, email: email.toLowerCase(), passwordHash, role };
  USERS.set(u.email, u);
  return u;
}
export function findUserByEmail(email) { return USERS.get((email||"").toLowerCase()) || null; }
export function listUsers() { return Array.from(USERS.values()); }

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyNzkyNDA1LTgzODktNGM1OC04ZmZlLTYzNmI0M2JiMzMzYiIsImVtYWlsIjoibmVlbEBleGFtcGxlLmNvbSIsInJvbGUiOiJjb21wYW55X2hlYWQiLCJpYXQiOjE3NjA1MjMyNjcsImV4cCI6MTc2MTEyODA2N30.yggvvS_8AyWc1sZaTeu6Vi28HdC3EgQ_AD4TbARdOrI