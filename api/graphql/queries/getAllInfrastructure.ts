import {ApolloServer} from "apollo-server-micro";
import {queryServer} from "../queries";
import createServer from "../createServer";

export const getAllInfrastructureQuery = `
{
  infrastructure {
    regions {
      id, name, buildings {
        id, name, floors {
          id, name, rooms {
            id, name
          }
        }
      }
    }
  }
}
`;
export interface GetAllInfrastructureResponse {
    infrastructure: Infrastructure;
}

export function getAllInfrastructureFromServer(server: ApolloServer = createServer()) {
    return queryServer<GetAllInfrastructureResponse>(getAllInfrastructureQuery, server);
}
