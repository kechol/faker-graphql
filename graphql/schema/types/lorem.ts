import { NextApiRequest } from "next";
import faker from "@faker-js/faker";
import { objectType, extendType } from "nexus";

export const Lorem = objectType({
  name: "Lorem",
  definition(t) {
    t.string("lines", {});
    t.string("paragraphs");
    t.string("sentences");
    t.string("words");
  },
});

export const LoremQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("lorem", {
      type: "Lorem",
      resolve: (_parent, _args, ctx: { req: NextApiRequest }) => {
        if (ctx.req.query.seed) {
          faker.seed(+ctx.req.query.seed);
        }
        return {
          lines: faker.lorem.lines(),
          paragraphs: faker.lorem.paragraphs(),
          sentences: faker.lorem.sentences(),
          words: faker.lorem.words(),
        };
      },
    });
  },
});
