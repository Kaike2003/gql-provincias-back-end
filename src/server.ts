import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { join } from "node:path";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const allTypes = loadFilesSync(join(__dirname, "graphql", "**", "*.gql"));
const allResolvers = loadFilesSync(join(__dirname, "graphql", "**", "resolvers.ts"));

const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

const main = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(cors());

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
};

main();
