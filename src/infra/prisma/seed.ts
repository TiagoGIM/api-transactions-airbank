import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { transactionsData } from "./sampleData";

async function runSeeder() {
  for (const transactionData of transactionsData) {
    const parseTransactionDate = new Date(transactionData.transactionDate);
    const parseCreatedAt = new Date(transactionData.createdAt);
    const parseUpdatedAt = new Date(transactionData.updatedAt);
    await prisma.transaction.create({
      data: {
        ...transactionData,
        transactionDate: parseTransactionDate,
        createdAt: parseCreatedAt,
        updatedAt: parseUpdatedAt,
      },
    });
  }
}

runSeeder()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });