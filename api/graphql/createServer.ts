import {ApolloServer, Config} from "apollo-server-micro";
import {makeExecutableSchema} from "graphql-tools";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

/** Create the ApolloServer */
export default function createServer(config?: Partial<Config>) {
    return new ApolloServer(
        Object.assign(
            { schema, resolvers } as Config,
            config
        )
    );
}

