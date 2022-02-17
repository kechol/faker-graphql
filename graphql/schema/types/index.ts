import { NextApiRequest } from "next";
import faker from "@faker-js/faker";
export * from "./address";
export * from "./company";
export * from "./date";
export * from "./internet";
export * from "./lorem";
export * from "./name";

export const setupFaker = (ctx: { req: NextApiRequest }) => {
  if (ctx.req.query.seed) {
    faker.seed(+ctx.req.query.seed);
  }
  if (ctx.req.query.locale) {
    faker.setLocale(`${ctx.req.query.locale}`);
  }
};
