import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";

const server = new ApolloServer({
  gateway: new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
      subgraphs: [
        { name: "product", url: "http://localhost:4101" },
        { name: "category", url: "http://localhost:4102" },
      ],
    }),
  }),
});

server.listen(4100).then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`);
});
