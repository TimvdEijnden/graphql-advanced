import "graphql-import-node";
import { buildSubgraphSchema } from "@apollo/federation";
import { ApolloServer } from "apollo-server";
import typeDefs from "./schema.gql";
import { resolvers } from "./resolvers";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/category-service");

const server = new ApolloServer({
  schema: buildSubgraphSchema([
    {
      typeDefs,
      // @ts-ignore
      resolvers,
    },
  ]),
});

server.listen(4102).then(({ url }) => {
  console.log(`🚀 Category service ready at ${url}`);
});
