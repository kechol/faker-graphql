import type { NextApiRequest, NextApiResponse, PageConfig } from "next";
import { ApolloServer } from "apollo-server-micro";
import schema from "../../graphql/schema";

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const server = new ApolloServer({
  schema,
  context: (ctx: any) => ({ ...ctx }),
  introspection: true,
});
const startServer = server.start();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", ["GET", "POST", "OPTIONS"].join(","));
  res.setHeader("Access-Control-Allow-Headers", ["Origin", "Content-Type", "Accept", "Access-Control-Allow-Headers"].join(","));

  if (req.method === "OPTIONS") {
    res.end();
    return;
  }

  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
};
export default handler;
