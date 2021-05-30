//<editor-fold desc="Infrastructure">

declare interface Infrastructure {
    regions: Region[];
    stats?: Stats;
}
declare interface Region {
    id: string;
    name: string;
    buildings: Building[];
    stats?: Stats;
}
declare interface Building {
    id: string;
    name: string;
    floors: Floor[];
    stats?: Stats;
}
declare interface Floor {
    id: string;
    name: string;
    rooms: Room[];
    stats?: Stats;
}
declare interface Room {
    id: string;
    name: string;
    stats?: Stats;
}

type InfrastructureType = 'region'|'building'|'floor'|'room';
type InfrastructureFromType<T extends InfrastructureType> = (
    T extends 'region'   ? Region :
    T extends 'building' ? Building :
    T extends 'floor'    ? Floor :
    T extends 'room'     ? Room :
    never
);

declare interface InfrastructureSelection {
    region?: Region;
    building?: Building;
    floor?: Floor;
    room?: Room;
}

//</editor-fold>
//<editor-fold desc="Stats">

declare interface Stats {
    health?: HealthRating;
    satisfaction?: SatisfactionRating;
    temperature?: TemperatureRating;
    occupancy?: OccupancyRating;
    indoorAirQuality?: IndoorAirQualityRating;
    noise?: NoiseRating;
    light?: LightRating;
    cleaning?: CleaningRating;
}

declare interface HealthRating {
    percent: number;
    percentChange: number;
    periodLabel: string;
}
declare interface SatisfactionRating {
    percent: number;
    percentChange: number;
    periodLabel: string;
}
declare interface TemperatureRating {
    celsius: number;
    celsiusChange: number;
    periodLabel: string;
}
declare interface OccupancyRating {
    percent: number;
    percentChange: number;
    periodLabel: string;
}
declare interface IndoorAirQualityRating { // "IAQ"
    value: number;
    valueChange: number;
    periodLabel: string;
}
declare interface NoiseRating {
    percent: number;
    percentChange: number;
    periodLabel: string;
}
declare interface LightRating {
    percent: number;
    percentChange: number;
    periodLabel: string;
}
declare interface CleaningRating {
    percent: number;
    percentChange: number;
    periodLabel: string;
}

//</editor-fold>
