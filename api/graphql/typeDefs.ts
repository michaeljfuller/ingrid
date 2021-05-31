import records from "./typeDefs/records";

// The GraphQL schema in string form

const scalarTypes = `
    scalar Date
`;
const userTypes = `
    type User {
        email: String!
    }
`;
const infrastructureTypes = `
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
const statTypes = `
    type Stats {
        health(from: Date, to: Date): HealthRating
        satisfaction(from: Date, to: Date): SatisfactionRating
        temperature(from: Date, to: Date): TemperatureRating
        occupancy(from: Date, to: Date): OccupancyRating
        indoorAirQuality(from: Date, to: Date): IndoorAirQualityRating
        noise(from: Date, to: Date): NoiseRating
        light(from: Date, to: Date): LightRating
        cleaning(from: Date, to: Date): CleaningRating
    }
    type HealthRating {
        percent: Float!
        percentChange: Float!
        periodLabel: String!
    }
    type SatisfactionRating {
        percent: Float!
        percentChange: Float!
        periodLabel: String!
    }
    type TemperatureRating {
        celsius: Float!
        celsiusChange: Float!
        periodLabel: String!
    }
    type OccupancyRating {
        percent: Float!
        percentChange: Float!
        periodLabel: String!
    }
    type IndoorAirQualityRating {
        value: Float!
        valueChange: Float!
        periodLabel: String!
    }
    type NoiseRating {
        percent: Float!
        percentChange: Float!
        periodLabel: String!
    }
    type LightRating {
        percent: Float!
        percentChange: Float!
        periodLabel: String!
    }
    type CleaningRating {
        percent: Float!
        percentChange: Float!
        periodLabel: String!
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
    ${scalarTypes}
    ${userTypes}
    ${infrastructureTypes}
    ${records}
    ${statTypes}
`;
