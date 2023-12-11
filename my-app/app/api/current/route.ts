import { NextRequest, NextResponse } from "next/server";

import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { currentUser } = await serverAuth(req);
    console.log("currentUser", currentUser);
    // return res.status(200).json(currentUser);
    return NextResponse.json(currentUser, { status: 200 });
  } catch (e) {
    // return res.status(400).end();
    return NextResponse.json(
      { message: "yo this error though" + e },
      { status: 400 }
    );
  }
  // return NextResponse.json({ message: "Hello -- GET" });
}
