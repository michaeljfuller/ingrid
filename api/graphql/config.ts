import {Config} from "apollo-server-micro";
import {makeExecutableSchema} from "graphql-tools";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default {
    schema,
    resolvers,
} as Config;
