// The GraphQL schema in string form

const scalarTypes = `
    scalar Date
`;
const infrastructureTypes = `
    type Infrastructure {
        regions: [Region!]
        stats: Stats
    }
    type Region {
        id: ID!
        name: String!
        buildings: [Building!]
        stats: Stats
    }
    type Building {
        id: ID!
        name: String!
        floors: [Floor!]
        stats: Stats
    }
    type Floor {
        id: ID!
        name: String!
        rooms: [Room!]
        stats: Stats
    }
    type Room {
        id: ID!
        name: String
        stats: Stats
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
        percent: Float
        percentChange: Float
        periodLabel: String
    }
    type SatisfactionRating {
        percent: Float
        percentChange: Float
        periodLabel: String
    }
    type TemperatureRating {
        celsius: Float
        celsiusChange: Float
        periodLabel: String
    }
    type OccupancyRating {
        percent: Float
        percentChange: Float
        periodLabel: String
    }
    type IndoorAirQualityRating {
        value: Float
        valueChange: Float
        periodLabel: String
    }
    type NoiseRating {
        percent: Float
        percentChange: Float
        periodLabel: String
    }
    type LightRating {
        percent: Float
        percentChange: Float
        periodLabel: String
    }
    type CleaningRating {
        percent: Float
        percentChange: Float
        periodLabel: String
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
    ${infrastructureTypes}
    ${statTypes}
`;
