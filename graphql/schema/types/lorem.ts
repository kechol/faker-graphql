import faker from "@faker-js/faker";
import { objectType, extendType, intArg } from "nexus";

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
      resolve: () => {
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
