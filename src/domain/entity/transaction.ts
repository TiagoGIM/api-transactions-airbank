export type Transaction = {
  id: String
  account: String
  description: String
  category: String
  reference: String
  currency: String
  amount: number
  status: String
  transactionDate: Date
  createdAt: Date
  updatedAt: Date
}

export interface DataRange {
  transactionDateInit : Date;
  transactionDateEnd : Date;
}

export type PartialTransaction = {
  id: String
  account: String
  description: String
  category: String
}