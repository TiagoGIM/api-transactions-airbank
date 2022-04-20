import { DataRange, Transaction } from "../../domain/entity/transaction";

export interface TransactionBaseRepository {
  getByDate(dataRange: DataRange): Promise<Transaction[]>;
  getAll(): Promise<Transaction[]>;
}