import misc from "./typeDefs/misc";
import infrastructure from "./typeDefs/infrastructure";
import records from "./typeDefs/records";
import stats from "./typeDefs/stats";

// The GraphQL schema in string form
export default `
    type Query { 
        infrastructure: Infrastructure
        region(id: ID!): Region
        building(id: ID!): Building
        floor(id: ID!): Floor
        room(id: ID!): Room
    }
    ${misc}
    ${infrastructure}
    ${records}
    ${stats}
`;
