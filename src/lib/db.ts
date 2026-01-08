import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // This helps us see the SQL commands in the terminal
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
