import faker from "@faker-js/faker";
import { objectType, extendType } from "nexus";
import { setupFaker } from "./_util";

export const Date = objectType({
  name: "Date",
  definition(t) {
    t.nonNull.string("future");
    t.nonNull.string("month");
    t.nonNull.string("past");
    t.nonNull.string("recent");
    t.nonNull.string("soon");
    t.nonNull.string("weekday");
  },
});

export const DateQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("date", {
      type: "Date",
      resolve: (_parent, _args, ctx: any) => {
        setupFaker(ctx);
        return {
          future: faker.date.future().toISOString(),
          month: faker.date.month(),
          past: faker.date.past().toISOString(),
          recent: faker.date.recent().toISOString(),
          soon: faker.date.soon().toISOString(),
          weekday: faker.date.weekday(),
        };
      },
    });
  },
});
