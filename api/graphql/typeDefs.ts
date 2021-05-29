// The GraphQL schema in string form
export default `
    type Query { 
        infrastructure: Infrastructure
    }
    type Infrastructure {
        regions: [Region]
    }
    type Region {
        id: String,
        name: String,
        buildings: [Building]
    }
    type Building {
        id: String,
        name: String,
        floors: [Floor]
    }
    type Floor {
        id: String,
        name: String,
        rooms: [Room]
    }
    type Room {
        id: String,
        name: String
    }
`;
