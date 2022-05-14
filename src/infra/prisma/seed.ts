import { PrismaClient } from "@prisma/client";
import console from "console";
const prisma = new PrismaClient();
import { transactionsData } from "./sampleData";

const loadSamples = async () => {
  try {
    await prisma.transaction.deleteMany();
    console.log("Delete records in transaction table");

  transactionsData.map( t => {
      t.createdAt =  new Date(t.createdAt);
      t.transactionDate = new Date(t.transactionDate);
      t.updatedAt = new Date(t.updatedAt);
  })
  console.log("Parsed transaction data date to Date type");
  
    await prisma.transaction.createMany({
      data: transactionsData
    });

    console.log("Added transaction data");

  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  };
}

loadSamples();