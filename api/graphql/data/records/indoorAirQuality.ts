import {getFromWrappedIndex} from "../../../../utils/array";

export const radon: IndoorAirQualityRecord[] = [
    { current: 98, average: 82, targetUnder: 75 },
    { current: 81, average: 74, targetUnder: 75 },
    { current: 72, average: 81, targetUnder: 75 },
    { current: 75, average: 75, targetUnder: 75 },
    { current: 51, average: 63, targetUnder: 75 },
];
export const voc: IndoorAirQualityRecord[] = [
    { current: 122, average: 125, targetUnder: 150 },
    { current: 155, average: 162, targetUnder: 150 },
    { current: 134, average: 171, targetUnder: 150 },
    { current: 164, average: 148, targetUnder: 150 },
    { current:  77, average:  98, targetUnder: 150 },
];
export const co2: IndoorAirQualityRecord[] = [
    { current: 589, average: 702, targetUnder: 600 },
    { current: 628, average: 592, targetUnder: 600 },
    { current: 522, average: 534, targetUnder: 600 },
    { current: 626, average: 604, targetUnder: 600 },
    { current: 550, average: 569, targetUnder: 600 },
];
export const pressure: IndoorAirQualityRecord[] = [
    { current: 1014, average:  998, targetUnder: 1000 },
    { current: 1010, average: 1002, targetUnder: 1000 },
    { current:  984, average:  976, targetUnder: 1000 },
    { current:  994, average:  970, targetUnder: 1000 },
    { current:  974, average:  982, targetUnder: 1000 },
];
export const humidity: IndoorAirQualityRecord[] = [
    { current: 51, average:  42, targetUnder: 50 },
    { current: 53, average:  53, targetUnder: 50 },
    { current: 48, average:  31, targetUnder: 50 },
    { current: 45, average:  38, targetUnder: 50 },
    { current: 47, average:  57, targetUnder: 50 },
];

export const createIndoorAirQualities = (seed: number, override?: Partial<IndoorAirQualities>) => Object.assign({
    radon: getFromWrappedIndex(seed, radon),
    voc: getFromWrappedIndex(seed, voc),
    co2: getFromWrappedIndex(seed, co2),
    pressure: getFromWrappedIndex(seed, pressure),
    humidity: getFromWrappedIndex(seed, humidity),
} as IndoorAirQualities, override);
