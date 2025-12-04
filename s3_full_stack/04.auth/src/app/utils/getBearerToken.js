// utils/getBearerToken.js
export function getBearerToken(req) {
  const auth = (req.headers && typeof req.headers.get === "function") ? req.headers.get("authorization") : (req.headers && req.headers.authorization) || "";
  if (typeof auth === "string" && auth.startsWith("Bearer ")) return auth.slice(7);
  const cookie = (req.headers && typeof req.headers.get === "function") ? req.headers.get("cookie") : (req.headers && req.headers.cookie) || "";
  if (cookie) {
    const m = cookie.match(/(?:^|; )token=([^;]+)/);
    if (m) return m[1];
  }
  return null;
}
