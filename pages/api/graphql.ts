import type { NextApiRequest, NextApiResponse, PageConfig } from "next";
import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello() {
      return "Hello World!";
    },
  },
};

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const serverStart = server.start();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", ["GET", "POST", "OPTIONS"].join(","));
  res.setHeader("Access-Control-Allow-Headers", ["Origin", "Content-Type", "Accept", "Access-Control-Allow-Headers"].join(","));

  if (req.method === "OPTIONS") {
    res.end();
    return;
  }

  await serverStart;
  await server.createHandler({ path: "/api/graphql" })(req, res);
};
export default handler;
