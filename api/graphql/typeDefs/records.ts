export default `
    type Records {
        alerts             (from: Date!, to: Date!): Alerts
        occupancies        (from: Date!, to: Date!): Occupancies
        indoorAirQualities (from: Date!, to: Date!): IndoorAirQualities
        temperatures       (from: Date!, to: Date!): Temperatures
    }
    
    type Alerts {
        items: [AlertRecord!]
    }
    type Occupancies {
        dailyOccupancy: [OccupancyRecord!]
    }
    type IndoorAirQualities {
        radon: IndoorAirQualityRecord
        voc: IndoorAirQualityRecord
        co2: IndoorAirQualityRecord
        pressure: IndoorAirQualityRecord
        humidity: IndoorAirQualityRecord
    }
    type Temperatures {
        dailyTemperatures: [TemperatureRecord]
    }
    
    enum AlertLevel {
      Low
      Mid
      High
    }
    
    type AlertRecord {
        id: ID!
        title: String!
        message: String
        level: AlertLevel!
        assignee: User
        timestamp: Date!
    }
    type OccupancyRecord {
        hourlyPercentage: [Float]!
        date: Date!
    }
    type IndoorAirQualityRecord {
        current: Int!
        average: Int!
        targetUnder: Int!
    }
    type TemperatureRecord {
        hourlyCelsius: [Int]!
        targetCelsius: Int!
        date: Date!
    }
`;
