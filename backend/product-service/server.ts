import "graphql-import-node";
import { buildSubgraphSchema } from "@apollo/federation";
import { ApolloServer } from "apollo-server";
import typeDefs from "./schema.gql";
import { resolvers } from "./resolvers";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/product-service");
const server = new ApolloServer({
  schema: buildSubgraphSchema([
    {
      typeDefs,
      // @ts-ignore
      resolvers,
    },
  ]),
});

server.listen(4101).then(({ url }) => {
  console.log(`🚀 Product service ready at ${url}`);
});
