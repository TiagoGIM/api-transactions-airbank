import { DataRange, Transaction } from "../../domain/entity/transaction";
import { TransactionService } from "../../domain/use-case/load-transactions";
import { TransactionBaseRepository } from "../contracts/transactions";

export class TransactionServiceImpl implements TransactionService {
  constructor(readonly transactionRepository: TransactionBaseRepository) {
  }

  async getAllTransactions(): Promise<Transaction[]> {
    return await this.transactionRepository.getAll();
  }

  async getTransictionsByDateRange(dataRange: DataRange): Promise<Transaction[]> {
    let {transactionDateInit, transactionDateEnd} = dataRange;
    if (transactionDateInit && transactionDateEnd) {
      transactionDateInit = new Date(transactionDateInit);
      transactionDateEnd = new Date(transactionDateEnd);
      return await this.transactionRepository.getByDate({transactionDateInit, transactionDateEnd});
    }
    return await this.transactionRepository.getAll();
  }
}
