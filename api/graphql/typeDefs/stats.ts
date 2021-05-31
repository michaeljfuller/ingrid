export default `
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
