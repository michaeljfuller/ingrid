const healthRatings: HealthRating[] = [
    { percent:  88, percentChange:  5, periodLabel: "" },
    { percent:  70, percentChange: -8, periodLabel: "" },
    { percent: 100, percentChange: 12, periodLabel: "" },
    { percent:  94, percentChange:  0, periodLabel: "" },
];
const satisfactionRatings: SatisfactionRating[] = [
    { percent:  70, percentChange: -8, periodLabel: "" },
    { percent:  94, percentChange:  0, periodLabel: "" },
    { percent: 100, percentChange: 12, periodLabel: "" },
    { percent:  88, percentChange:  5, periodLabel: "" },
];
const temperatureRatings: TemperatureRating[] = [
    { celsius: 22, celsiusChange:   4, periodLabel: "" },
    { celsius: 25, celsiusChange:   0, periodLabel: "" },
    { celsius:  5, celsiusChange: -12, periodLabel: "" },
    { celsius: 12, celsiusChange:   5, periodLabel: "" },
];
const occupancyRatings: OccupancyRating[] = [
    { percent:  32, percentChange: -40, periodLabel: "" },
    { percent:   0, percentChange: -32, periodLabel: "" },
    { percent: 112, percentChange:  35, periodLabel: "" },
    { percent:  64, percentChange:   0, periodLabel: "" },
];
const indoorAirQualityRatings: IndoorAirQualityRating[] = [
    { value: 64, valueChange:   8, periodLabel: "" },
    { value: 71, valueChange:  13, periodLabel: "" },
    { value:  8, valueChange: -28, periodLabel: "" },
    { value: 57, valueChange:   0, periodLabel: "" },
];
const noiseRatings: NoiseRating[] = [
    { percent: 32, percentChange:  20, periodLabel: "" },
    { percent:  8, percentChange: -22, periodLabel: "" },
    { percent: 28, percentChange:   0, periodLabel: "" },
    { percent: 24, percentChange:   3, periodLabel: "" },
];
const lightRatings: LightRating[] = [
    { percent: 32, percentChange:   1, periodLabel: "" },
    { percent: 14, percentChange: -22, periodLabel: "" },
    { percent: 31, percentChange:   0, periodLabel: "" },
    { percent: 58, percentChange:  27, periodLabel: "" },
];
const cleaningRatings: CleaningRating[] = [
    { percent: 85, percentChange:   3, periodLabel: "" },
    { percent: 62, percentChange: -37, periodLabel: "" },
    { percent: 73, percentChange:   0, periodLabel: "" },
    { percent: 82, percentChange:  15, periodLabel: "" },
];

export const createHealthRating = (seed: number, override?: Partial<HealthRating>) => seedFrom(seed, healthRatings, override);
export const createSatisfactionRating = (seed: number, override?: Partial<SatisfactionRating>) => seedFrom(seed, satisfactionRatings, override);
export const createTemperatureRating = (seed: number, override?: Partial<TemperatureRating>) => seedFrom(seed, temperatureRatings, override);
export const createOccupancyRating= (seed: number, override?: Partial<OccupancyRating>) => seedFrom(seed, occupancyRatings, override);
export const createIndoorAirQualityRating = (seed: number, override?: Partial<IndoorAirQualityRating>) => seedFrom(seed, indoorAirQualityRatings, override);
export const createNoiseRating = (seed: number, override?: Partial<NoiseRating>) => seedFrom(seed, noiseRatings, override);
export const createLightRating = (seed: number, override?: Partial<LightRating>) => seedFrom(seed, lightRatings, override);
export const createCleaningRating = (seed: number, override?: Partial<CleaningRating>) => seedFrom(seed, cleaningRatings, override);

function seedFrom<Type = any>(seed: number, array: Type[], override?: Partial<Type>): Type {
    const item = array[Math.floor(seed) % array.length];
    return Object.assign({}, item, override);
}
