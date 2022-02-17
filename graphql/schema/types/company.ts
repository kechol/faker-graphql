import faker from "@faker-js/faker";
import { objectType, extendType } from "nexus";
import { setupFaker } from "../types";

export const Company = objectType({
  name: "Company",
  definition(t) {
    t.nonNull.string("bs");
    t.nonNull.string("bsAdjective");
    t.nonNull.string("bsBuzz");
    t.nonNull.string("bsNoun");
    t.nonNull.string("catchPhrase");
    t.nonNull.string("catchPhraseAdjective");
    t.nonNull.string("catchPhraseDescriptor");
    t.nonNull.string("catchPhraseNoun");
    t.nonNull.string("companyName");
    t.nonNull.string("companySuffix");
    t.nonNull.string("suffixes");
  },
});

export const CompanyQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("company", {
      type: "Company",
      resolve: (_parent, _args, ctx: any) => {
        setupFaker(ctx);
        return {
          bs: faker.company.bs(),
          bsAdjective: faker.company.bsAdjective(),
          bsBuzz: faker.company.bsBuzz(),
          bsNoun: faker.company.bsNoun(),
          catchPhrase: faker.company.catchPhrase(),
          catchPhraseAdjective: faker.company.catchPhraseAdjective(),
          catchPhraseDescriptor: faker.company.catchPhraseDescriptor(),
          catchPhraseNoun: faker.company.catchPhraseNoun(),
          companyName: faker.company.companyName(),
          companySuffix: faker.company.companySuffix(),
          suffixes: faker.company.suffixes(),
        };
      },
    });
  },
});
