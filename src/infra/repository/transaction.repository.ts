import { TransactionBaseRepository } from "../../data/contracts/transactions";
import { DataRange, Transaction } from "../../domain/entity/transaction";

import { prisma } from "../prisma/client";

export class transactionRepository implements TransactionBaseRepository {
  async getAll(): Promise<Transaction[]> {
    return await prisma.transaction.findMany();
  }
  async getByDate(dataRange: DataRange): Promise<Transaction[]> {
    /**TODO:
     * Imp Error Handler using Prisma codes.
     */
    let {transactionDateInit, transactionDateEnd} = dataRange;
    return await prisma.transaction.findMany({
      where: {
        transactionDate: {
          gte: transactionDateInit,
          lte: transactionDateEnd
        }
      }
    });
  }
}