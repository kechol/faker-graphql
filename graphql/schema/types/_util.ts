import { NextApiRequest } from "next";
import faker from "@faker-js/faker";

export const setupFaker = (ctx: { req: NextApiRequest }) => {
  if (ctx.req.query.seed) {
    faker.seed(+ctx.req.query.seed);
  }
  if (ctx.req.query.locale) {
    faker.setLocale(`${ctx.req.query.locale}`);
  }
};
