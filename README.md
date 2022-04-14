## Endpoints and Mocks
- Heroku
https://api-airbank-transactions.herokuapp.com/api

- Postman
https://7d19cadf-2b61-4342-9168-469e5ad104a2.mock.pstmn.io/query/transactions


### Database
Foi usado dois bancos postgres devido a limitaçao da conta gratuita e necessidade do prisma de ter um segundo banco para fazer migracoes.

Env Variables
DATABASE_URL = url main db
SHADOW_DATABASE_URL = transiction migration db

## Technologies
- Express
- ApolloServer
- Prisma (OMR)
- Postgress
- Graphql
- heroku

## References
- To generate a sample database
https://www.prisma.io/docs/guides/database/seed-database
- SHADOW BASE to cloud db configs
https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database
- Setup and deploy a graphql server with apolloserver
https://tomray.dev/setup-and-deploy-graphql-server#configuring-typescript
- create schema apollo
https://www.apollographql.com/docs/tutorial/schema/
- Working with Dates, Time, Timezones in GraphQL and PostgreSQL
https://hasura.io/blog/working-with-dates-time-timezones-graphql-postgresql/
- GraphQL Modules tutorial: How to modularize GraphQL schema
https://blog.logrocket.com/graphql-modules-tutorial-how-to-modularize-graphql-schema/