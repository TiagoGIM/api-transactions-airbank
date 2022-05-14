# AirBank Transactions
A simple API builted to acomplishe the AirBank interview challenge.
This repository provides a Graphql API to retrieve information about banking transactions. The API are used to be consumed in a VUE application called [My Transactions](https://adorable-banoffee-62308c.netlify.app/).

## Queries
The data can be required by three diferentes queries.
- GetTransactions 
- GetTransactionsByDate
- GetTransactionsById

If the API is being served locally, you can test the queries using [Apollo Studio](https://studio.apollographql.com/sandbox/explorer)

## How run this project
> Production mode
```
$ npm run start
```
> Develop mode
```
$ npm run dev
```

## Requiriments

- [Prisma ORM](https://www.prisma.io/)
- [Postgress Database](https://devcenter.heroku.com/articles/heroku-postgresql)
- [ApolloServer](https://www.apollographql.com/docs/apollo-server/)
- NodeJs & TypeScript

## Postgress db and Prisma ORM

### Seeding the database 
```
npm run seed
```
### Migrations

```
npx prisma migration dev
```

 For using Prisma ORM migrations the db USER   need allow Prisma generate another db called SHADOWBASE, or provide a second URL for this proposit. This happens because when running a dev migration  a temporary db will be created to avoid lost in the main database.
### Endpoints and Mocks
- Heroku
https://api-airbank-transactions.herokuapp.com/api

- Postman
https://7d19cadf-2b61-4342-9168-469e5ad104a2.mock.pstmn.io/query/transactions

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
- Custom Scalars and Enuns
https://master--apollo-server-docs.netlify.app/docs/apollo-server/schema/scalars-enums/
- Custom Scalars Date video
https://www.youtube.com/watch?v=Nx3KcrYDJas
- How to seed a database with Prisma
https://planetscale.com/blog/how-to-seed-a-database-with-prisma-and-next-js