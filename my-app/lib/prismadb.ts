import { PrismaClient } from "@prisma/client";

// Ensures next.js doesn't rerender this too many times
const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;
