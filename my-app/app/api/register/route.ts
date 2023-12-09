import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";

import { NextResponse, NextRequest } from "next/server";

// For /register route POST
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { email, name, password } = req.body;

    // email:email = email
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json({ status: 422 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 400 });
  }
}

// export async function GET() {
//   return NextResponse.json({ message: "Hello -- GET" });
// }
