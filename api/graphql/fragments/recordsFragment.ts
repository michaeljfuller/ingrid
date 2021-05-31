// https://graphql.org/learn/queries/#fragments
/*
query GetRecords($statsFrom: Date = "2021-01-01", $statsTo: Date = "2021-02-01") {
    infrastructure {
        ...recordsFragment
    }
}
*/
export default `
fragment recordsFragment on InfrastructureRecordOwner {
    records {
        alerts(from: $statsFrom, to: $statsTo) {
            items { id, title, message, level, assignee{email}, timestamp }
        }
        occupancies(from: $statsFrom, to: $statsTo) {
            dailyOccupancy { date, hourlyPercentage }
        }
        indoorAirQualities(from: $statsFrom, to: $statsTo) {
            radon    { current, average, targetUnder }
            voc      { current, average, targetUnder }
            co2      { current, average, targetUnder }
            pressure { current, average, targetUnder }
            humidity { current, average, targetUnder }
        }
        temperatures(from: $statsFrom, to: $statsTo) {
            dailyTemperatures { date, targetCelsius, hourlyCelsius }
        }
    }
}
`
