import faker from "@faker-js/faker";
import { objectType, extendType } from "nexus";
import { setupFaker } from ".";

export const Name = objectType({
  name: "Name",
  definition(t) {
    t.nonNull.string("firstName");
    t.nonNull.string("gender");
    t.nonNull.string("jobArea");
    t.nonNull.string("jobDescriptor");
    t.nonNull.string("jobTitle");
    t.nonNull.string("jobType");
    t.nonNull.string("lastName");
    t.nonNull.string("middleName");
    t.nonNull.string("prefix");
    t.nonNull.string("suffix");
    t.nonNull.string("title");
  },
});

export const NameQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("name", {
      type: "Name",
      resolve: (_parent, _args, ctx: any) => {
        setupFaker(ctx);
        return {
          firstName: faker.name.firstName(),
          gender: faker.name.gender(),
          jobArea: faker.name.jobArea(),
          jobDescriptor: faker.name.jobDescriptor(),
          jobTitle: faker.name.jobTitle(),
          jobType: faker.name.jobType(),
          lastName: faker.name.lastName(),
          middleName: faker.name.middleName(),
          prefix: faker.name.prefix(),
          suffix: faker.name.suffix(),
          title: faker.name.title(),
        };
      },
    });
  },
});
