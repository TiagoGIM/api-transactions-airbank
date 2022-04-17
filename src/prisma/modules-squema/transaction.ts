import { prisma } from '../client'
import { createModule, gql } from 'graphql-modules'

import { GraphQLScalarType, Kind } from "graphql";
import dayjs from "dayjs";
export interface DataRange {
  transactionDateInit : Date;
  transactionDateEnd : Date;
}

export const transactions = createModule({
  id: 'transaction-module',
  dirname: __dirname,
  typeDefs: [
    gql`
    scalar CustomDate
    type Query {
      getAlltransactions: [Transaction],
      getTransactionByDate(transactionDateInit : String, transactionDateEnd :String): [Transaction],
      getTransactionById(id : ID): PartialTransaction
      
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
        return await prisma.transaction.findMany()
      },
      getTransactionByDate: async (_ :any, dataRange: DataRange) => {
        //TODO: segregate responsibility with a respository pattern and service layer
        //TODO: add pagination
        //TODO: add error handller
        let {transactionDateInit, transactionDateEnd} = dataRange;
        if(transactionDateInit && transactionDateEnd){
          transactionDateInit = new Date(transactionDateInit);
          transactionDateEnd = new Date(transactionDateEnd);
          return await prisma.transaction.findMany({
            where: {
              transactionDate: {
                gte: transactionDateInit,
                lte: transactionDateEnd
              }
            }
          })
        }else{
          return await prisma.transaction.findMany();
        }
      },
      getTransactionById: async (_ :any, {id}: {id: string}) => {
        return await prisma.transaction.findUnique({
          where: {
            id: id
          }
        })
      }
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