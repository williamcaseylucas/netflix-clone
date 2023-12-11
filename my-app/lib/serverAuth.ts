import { getSession } from "next-auth/react";
import { NextRequest } from "next/server";
import prismadb from "@/lib/prismadb";
import { NextApiRequest } from "next";

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });

  console.log("session stuff is happening in serverAuth", session);

  if (!session?.user?.email) {
    throw new Error("Not signed in");
  }

  console.log("signed in ");

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    throw new Error("Not Signed in");
  }

  console.log("db recognized user", currentUser);

  return { currentUser };
};

export default serverAuth;
