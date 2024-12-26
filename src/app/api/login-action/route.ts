import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "@/utils/db";
import crypto from "crypto"; // For generating secure session IDs

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Find user in the database
  const user = await db.user.findUnique({
    where: { email }
  });

  console.log("user", user);
  console.log("password", password);

  if (!user) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  }

  // Validate password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  console.log("isPasswordValid", isPasswordValid);

  if (!isPasswordValid) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  }

  // Generate a secure, random session ID (this is the plaintext session ID stored in the cookie)
  const sessionId = crypto.randomBytes(32).toString("hex");

  // Hash the session ID for secure storage in the database
  // const encryptedSessionId = await bcrypt.hash(sessionId, 10);

  // Store the session in the database with the encrypted session ID
  await db.session.create({
    data: {
      userId: user.id,
      token: sessionId, // Store the hashed session ID
      expiresAt: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000) // 1 week expiration
    }
  });

  // Set the session ID as a cookie for the client
  const host = req.headers.get("host");
  const protocol = req.headers.get("x-forwarded-proto") || "http"; // Default to "http" if not set
  const baseUrl = `${protocol}://${host}`;

  const response = NextResponse.redirect(`${baseUrl}/admin`);

  // Set the session cookie with the session ID (plaintext)
  response.cookies.set("session", sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production"
  });

  return response;
}
