import { makeSchema } from "nexus";
import * as HelloTypes from "./hello";

const schema = makeSchema({
  types: [HelloTypes],
});

export default schema;
