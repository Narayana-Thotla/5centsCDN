import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password || password.length < 6) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 400 }
      );
    }

    // Generate JWT token (valid for 1 hour)
    const token = jwt.sign({ email }, "5centCDN", { expiresIn: "1h" });
    console.log("token inthe backend:", token);

    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json(
      { error: "Error generating token" },
      { status: 500 }
    );
  }
}
