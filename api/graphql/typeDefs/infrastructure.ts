export default `
    interface InfrastructureStatOwner {
        stats: Stats!
    }
    interface InfrastructureRecordOwner {
        records: Records!
    }
    interface InfrastructureLayer {
        id: ID!
        name: String!
    }

    type Infrastructure implements InfrastructureStatOwner & InfrastructureRecordOwner {
        stats: Stats!
        records: Records!
        regions: [Region!]
    }
    type Region implements InfrastructureLayer & InfrastructureStatOwner & InfrastructureRecordOwner {
        id: ID!
        name: String!
        stats: Stats!
        records: Records!
        buildings: [Building!]
    }
    type Building implements InfrastructureLayer & InfrastructureStatOwner & InfrastructureRecordOwner {
        id: ID!
        name: String!
        stats: Stats!
        records: Records!
        floors: [Floor!]
    }
    type Floor implements InfrastructureLayer & InfrastructureStatOwner & InfrastructureRecordOwner {
        id: ID!
        name: String!
        stats: Stats!
        records: Records!
        rooms: [Room!]
    }
    type Room implements InfrastructureLayer & InfrastructureStatOwner & InfrastructureRecordOwner {
        id: ID!
        name: String!
        stats: Stats!
        records: Records!
    }
`;
