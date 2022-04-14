import { createServer } from "http";
import express from "express";
import { ApolloServer} from "apollo-server-express";
import { application } from "./config/application";

const schema = application.createSchemaForApollo();
const startServer = async () => { 

  const app = express()
  const httpServer = createServer(app)
  const apolloServer = new ApolloServer({
    schema,
  })

  await apolloServer.start()
  apolloServer.applyMiddleware({
      app,
      path: '/api/v1',
  })

  let port = 3300;
  httpServer.listen({ port: process.env.PORT || port }, () =>
    console.log(`Server listening on localhost:${port}${apolloServer.graphqlPath}`)
  )
}

startServer()