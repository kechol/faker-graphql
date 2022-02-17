import faker from "@faker-js/faker";
import { objectType, extendType } from "nexus";
import { setupFaker } from ".";

export const Internet = objectType({
  name: "Internet",
  definition(t) {
    t.nonNull.string("avatar");
    t.nonNull.string("color");
    t.nonNull.string("domainName");
    t.nonNull.string("domainSuffix");
    t.nonNull.string("domainWord");
    t.nonNull.string("email");
    t.nonNull.string("exampleEmail");
    t.nonNull.string("httpMethod");
    t.nonNull.string("ip");
    t.nonNull.string("ipv6");
    t.nonNull.string("mac");
    t.nonNull.string("password");
    t.nonNull.string("port");
    t.nonNull.string("protocol");
    t.nonNull.string("url");
    t.nonNull.string("userAgent");
    t.nonNull.string("userName");
  },
});

export const InternetQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("internet", {
      type: "Internet",
      resolve: (_parent, _args, ctx: any) => {
        setupFaker(ctx);
        return {
          avatar: faker.internet.avatar(),
          color: faker.internet.color(),
          domainName: faker.internet.domainName(),
          domainSuffix: faker.internet.domainSuffix(),
          domainWord: faker.internet.domainWord(),
          email: faker.internet.email(),
          exampleEmail: faker.internet.exampleEmail(),
          httpMethod: faker.internet.httpMethod(),
          ip: faker.internet.ip(),
          ipv6: faker.internet.ipv6(),
          mac: faker.internet.mac(),
          password: faker.internet.password(),
          port: faker.internet.port().toString(),
          protocol: faker.internet.protocol(),
          url: faker.internet.url(),
          userAgent: faker.internet.userAgent(),
          userName: faker.internet.userName(),
        };
      },
    });
  },
});
