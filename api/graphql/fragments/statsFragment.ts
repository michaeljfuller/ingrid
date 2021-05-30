// https://graphql.org/learn/queries/#fragments
/*
query GetStats($statsFrom: Date = "2021-01-01", $statsTo: Date = "2021-02-01") {
    infrastructure {
        ...statsFragment
    }
}
*/
export default `
fragment statsFragment on InfrastructureStatOwner {
    stats {
        health(from: $statsFrom, to: $statsTo) { percent, percentChange, periodLabel }
        satisfaction(from: $statsFrom, to: $statsTo) { percent, percentChange, periodLabel }
        temperature(from: $statsFrom, to: $statsTo) { celsius, celsiusChange, periodLabel }
        occupancy(from: $statsFrom, to: $statsTo) { percent, percentChange, periodLabel }
        indoorAirQuality(from: $statsFrom, to: $statsTo) { value, valueChange, periodLabel }
        noise(from: $statsFrom, to: $statsTo) { percent, percentChange, periodLabel }
        light(from: $statsFrom, to: $statsTo) { percent, percentChange, periodLabel }
        cleaning(from: $statsFrom, to: $statsTo) { percent, percentChange, periodLabel }
    }
}
`
