import faker from "@faker-js/faker";
import { objectType, extendType } from "nexus";
import { setupFaker } from "./_util";

export const Lorem = objectType({
  name: "Lorem",
  definition(t) {
    t.nonNull.string("lines");
    t.nonNull.string("paragraph");
    t.nonNull.string("paragraphs");
    t.nonNull.string("sentence");
    t.nonNull.string("sentences");
    t.nonNull.string("slug");
    t.nonNull.string("text");
    t.nonNull.string("word");
    t.nonNull.string("words");
  },
});

export const LoremQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("lorem", {
      type: "Lorem",
      resolve: (_parent, _args, ctx: any) => {
        setupFaker(ctx);
        return {
          lines: faker.lorem.lines(),
          paragraph: faker.lorem.paragraph(),
          paragraphs: faker.lorem.paragraphs(),
          sentence: faker.lorem.sentence(),
          sentences: faker.lorem.sentences(),
          slug: faker.lorem.slug(),
          text: faker.lorem.text(),
          word: faker.lorem.word(),
          words: faker.lorem.words(),
        };
      },
    });
  },
});
