import faker from "@faker-js/faker";
import { objectType, extendType } from "nexus";
import { setupFaker } from "../types";

export const Address = objectType({
  name: "Address",
  definition(t) {
    t.nonNull.string("cardinalDirection", {});
    t.nonNull.string("city");
    t.nonNull.string("cityName");
    t.nonNull.string("cityPrefix");
    t.nonNull.string("citySuffix");
    t.nonNull.string("country");
    t.nonNull.string("countryCode");
    t.nonNull.string("county");
    t.nonNull.string("direction");
    t.nonNull.string("latitude");
    t.nonNull.string("longitude");
    t.nonNull.string("ordinalDirection");
    t.nonNull.string("secondaryAddress");
    t.nonNull.string("state");
    t.nonNull.string("stateAbbr");
    t.nonNull.string("streetAddress");
    t.nonNull.string("streetName");
    t.nonNull.string("streetPrefix");
    t.nonNull.string("streetSuffix");
    t.nonNull.string("timeZone");
    t.nonNull.string("zipCode");
  },
});

export const AddressQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("address", {
      type: "Address",
      resolve: (_parent, _args, ctx: any) => {
        setupFaker(ctx);
        return {
          cardinalDirection: faker.address.cardinalDirection(),
          city: faker.address.city(),
          cityName: faker.address.cityName(),
          cityPrefix: faker.address.cityPrefix(),
          citySuffix: faker.address.citySuffix(),
          country: faker.address.country(),
          countryCode: faker.address.countryCode(),
          county: faker.address.county(),
          direction: faker.address.direction(),
          latitude: faker.address.latitude(),
          longitude: faker.address.longitude(),
          ordinalDirection: faker.address.ordinalDirection(),
          secondaryAddress: faker.address.secondaryAddress(),
          state: faker.address.state(),
          stateAbbr: faker.address.stateAbbr(),
          streetAddress: faker.address.streetAddress(),
          streetName: faker.address.streetName(),
          streetPrefix: faker.address.streetPrefix(),
          streetSuffix: faker.address.streetSuffix(),
          timeZone: faker.address.timeZone(),
          zipCode: faker.address.zipCode(),
        };
      },
    });
  },
});
