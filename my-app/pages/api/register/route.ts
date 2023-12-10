import bcrypt from "bcrypt";
import prismadb from "@/lib/prismadb";

import { NextApiResponse, NextApiRequest } from "next";
import { NextResponse, NextRequest } from "next/server";

// For /register route POST
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, name, password } = req.body;

    // email:email = email
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json({ error: "Email taken" }, { status: 422 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 400 });
  }
}

// export async function GET() {
//   return NextResponse.json({ message: "Hello -- GET" });
// }
