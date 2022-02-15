import * as path from "path";
import { makeSchema } from "nexus";
import * as types from "./types";

const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(__dirname, "schema.graphql"),
    typegen: path.join(__dirname, "types.d.ts"),
  },
});

export default schema;
