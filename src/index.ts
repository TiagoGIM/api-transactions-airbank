import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import { application } from "./config/application";
import app from "./server";
const schema = application.createSchemaForApollo();
const startServer = async () => {
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