import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
  } catch (e) {
    return res.status(400).end();
  }

  return NextResponse.json({ message: "Hello -- GET" });
}
