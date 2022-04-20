import { DataRange, Transaction,  } from '../entity/transaction';

export interface TransactionService {
  getTransictionsByDateRange(dataRange: DataRange): Promise<Transaction[]>;
  getAllTransactions(): Promise<Transaction[]>;
}