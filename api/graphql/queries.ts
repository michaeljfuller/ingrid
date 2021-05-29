import type {GraphQLFormattedError} from "graphql";
import {ApolloServer} from "apollo-server-micro";
import createServer from "./createServer";

export * from "./queries/getAllInfrastructure";

type ResponsePayload = Record<string, any>;

export interface GraphQLResponse<
    Data extends ResponsePayload | null,
    Error extends ResponsePayload = ResponsePayload,
> {
    data?: Data;
    errors?: ReadonlyArray<GraphQLFormattedError<Error>>;
}

/** Run a query on the server. */
export function queryServer<
    Data extends ResponsePayload,
    Error extends ResponsePayload = ResponsePayload,
>(
    query: string,
    server: ApolloServer = createServer()
) {
    return server.executeOperation({ query }) as Promise<GraphQLResponse<Data, Error>>;
}
