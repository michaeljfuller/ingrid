import {ApolloServer} from "apollo-server-micro";
import {queryServer} from "../../queries";
import createServer from "../../createServer";
import recordsFragment from "../../fragments/recordsFragment";

// Prepend with: query GetRecords($statsFrom: Date = "2021-01-01", $statsTo: Date = "2021-02-01")
export const getRecordsFromInfrastructureQuery = `
{
  recordsFromInfrastructure: infrastructure {
    ...recordsFragment
  }
}
${recordsFragment}
`;
export interface GetRecordsFromInfrastructureResponse {
    recordsFromInfrastructure: Pick<Infrastructure, 'records'>;
}

export function getRecordsFromInfrastructureFromServer(
    dateFrom: Date,
    dateTo: Date,
    server: ApolloServer = createServer()
) {
    const isoFrom = dateFrom.toISOString();
    const isoTo = dateTo.toISOString();
    return queryServer<GetRecordsFromInfrastructureResponse>(
        `query GetRecords($statsFrom: Date = "${isoFrom}", $statsTo: Date = "${isoTo}") ` + getRecordsFromInfrastructureQuery,
        server
    );
}
