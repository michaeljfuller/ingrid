export default `
    interface InfrastructureStatOwner {
        stats: Stats!
    }
    interface InfrastructureLayer {
        id: ID!
        name: String!
    }

    type Infrastructure implements InfrastructureStatOwner {
        stats: Stats!
        regions: [Region!]
    }
    type Region implements InfrastructureLayer & InfrastructureStatOwner {
        id: ID!
        name: String!
        stats: Stats!
        buildings: [Building!]
    }
    type Building implements InfrastructureLayer & InfrastructureStatOwner {
        id: ID!
        name: String!
        stats: Stats!
        floors: [Floor!]
    }
    type Floor implements InfrastructureLayer & InfrastructureStatOwner {
        id: ID!
        name: String!
        stats: Stats!
        rooms: [Room!]
    }
    type Room implements InfrastructureLayer & InfrastructureStatOwner {
        id: ID!
        name: String!
        stats: Stats!
    }
`;
