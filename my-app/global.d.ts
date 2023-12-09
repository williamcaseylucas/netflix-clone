import { PrismaClient } from "@prisma/client";

// to fix prismadb error from /lib/prismadb.ts
declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
  }
}
