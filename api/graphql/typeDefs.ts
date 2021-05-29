// The GraphQL schema in string form

const infrastructureTypes = `
    type Infrastructure {
        regions: [Region!]
    }
    type Region {
        id: ID!
        name: String!
        buildings: [Building!]
    }
    type Building {
        id: ID!
        name: String!
        floors: [Floor!]
    }
    type Floor {
        id: ID!
        name: String!
        rooms: [Room!]
    }
    type Room {
        id: ID!
        name: String
    }
`;

export default `
    type Query { 
        infrastructure: Infrastructure
        region(id: ID!): Region
        building(id: ID!): Building
        floor(id: ID!): Floor
        room(id: ID!): Room
    }
    ${infrastructureTypes}
`;
