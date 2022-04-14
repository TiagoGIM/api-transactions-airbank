import { createServer } from "http";
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const startServer = async () => { 

  const app = express()
  const httpServer = createServer(app)

  const typeDefs = gql`
  type Query {
    transactions: [Transaction]
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
  transactionDate: String
  createdAt: String
  updatedAt: String
}
`;

  const resolvers = {
    Query: {
      transactions: () => {
        return prisma.transaction.findMany()
      },
    },
  };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await apolloServer.start()
  apolloServer.applyMiddleware({
      app,
      path: '/api'
  })
  let port = 3300;
  httpServer.listen({ port: process.env.PORT || 3300 }, () =>
    console.log(`Server listening on localhost:${port}${apolloServer.graphqlPath}`)
  )
}

startServer()