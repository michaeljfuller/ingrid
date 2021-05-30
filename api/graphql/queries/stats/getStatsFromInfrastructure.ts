import {ApolloServer} from "apollo-server-micro";
import {queryServer} from "../../queries";
import createServer from "../../createServer";
import statsFragment from "../../fragments/statsFragment";

// Prepend with: query GetStats($statsFrom: Date = "2021-01-01", $statsTo: Date = "2021-02-01")
export const getStatsFromInfrastructureQuery = `
{
  statsFromInfrastructure: infrastructure {
    ...statsFragment
  }
}
${statsFragment}
`;
export interface GetStatsFromInfrastructureResponse {
    statsFromInfrastructure: Pick<Infrastructure, 'stats'>;
}

export function getStatsFromInfrastructureFromServer(
    dateFrom: Date,
    dateTo: Date,
    server: ApolloServer = createServer()
) {
    const isoFrom = dateFrom.toISOString();
    const isoTo = dateTo.toISOString();
    return queryServer<GetStatsFromInfrastructureResponse>(
        `query GetStats($statsFrom: Date = "${isoFrom}", $statsTo: Date = "${isoTo}") ` + getStatsFromInfrastructureQuery,
        server
    );
}
