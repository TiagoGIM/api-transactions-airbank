import { createModule, gql } from 'graphql-modules'
import { GraphQLScalarType, Kind } from "graphql";
import dayjs from "dayjs";
import { DataRange } from '../../domain/entity/transaction';
import { transactionRepository } from '../../infra/repository/transaction.repository';
import { TransactionServiceImpl } from '../../data/services/transactions';

const repo =  new transactionRepository();
const service = new TransactionServiceImpl(repo);

export const transactions = createModule({
  id: 'transaction-module',
  dirname: __dirname,
  typeDefs: [
    gql`
    scalar CustomDate
    type Query {
      getAlltransactions: [Transaction],
      getTransactionByDate(transactionDateInit : String, transactionDateEnd :String): [Transaction],      
    }

    type PartialTransaction {
      id: String
      account: String
      description: String
      category: String
    }
  
    type Transaction {
    id: String
    account: String
    description: String
    category: String
    reference: String
    currency: String
    amount: Float
    status: String
    transactionDate: CustomDate
    createdAt: CustomDate
    updatedAt: CustomDate
  }
  `
  ],
  resolvers: {
    Query: {
      getAlltransactions: async () => {
        return service.getAllTransactions();
      },
      getTransactionByDate: async (_ :any, dataRange: DataRange) => {
        //TODO: add error handller
        return service.getTransictionsByDateRange(dataRange);
      },
    },
    CustomDate: new GraphQLScalarType({
      name: "Date",
      description: "Custom Scalar Type Date",
      parseValue(value) {
        return dayjs(value);
      },
      serialize(value) {
        return dayjs(value).format("MM-DD-YYYY"); 
      },
      parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
          return dayjs(ast.value); 
        }
        return null;
      }
    })
  }
})