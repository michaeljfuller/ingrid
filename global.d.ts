//<editor-fold desc="Infrastructure">

declare interface InfrastructureStatOwner {
    stats?: Stats;
}
declare interface InfrastructureLayer extends InfrastructureStatOwner {
    id: string;
    name?: string;
}

declare interface Infrastructure extends InfrastructureStatOwner {
    regions: Region[];
}
declare interface Region extends InfrastructureLayer {
    buildings: Building[];
}
declare interface Building extends InfrastructureLayer {
    floors: Floor[];
}
declare interface Floor extends InfrastructureLayer {
    rooms: Room[];
}
declare interface Room extends InfrastructureLayer {}

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
//<editor-fold desc="Records">

declare enum AlertLevel { Low, Mid, High }

declare interface AlertRecord {
    id: string;
    title?: string;
    message?: string;
    level?: AlertLevel;
    assignee?: User;
    timestamp?: Date;
}
declare interface AlertsResponse {
    alerts: AlertRecord[];
}

declare interface OccupancyRecord {
    hourlyPercentage?: number[];
    date?: Date;
}

declare interface OccupanciesResponse {
    dailyOccupancy: OccupancyRecord[];
}

declare interface IndoorAirQualityRecord {
    current?: number;
    average?: number;
    targetUnder?: number;
}
declare interface IndoorAirQualitiesResponse {
    radon?: IndoorAirQualityRecord;
    voc?: IndoorAirQualityRecord;
    co2?: IndoorAirQualityRecord;
    pressure?: IndoorAirQualityRecord;
    humidity?: IndoorAirQualityRecord;
}

declare interface TemperatureRecord {
    hourlyCelsius?: number[];
    targetCelsius?: number;
    date?: Date;
}
declare interface TemperaturesResponse {
    dailyTemperatures: TemperatureRecord[];
}

//</editor-fold>
//<editor-fold desc="User">

declare interface User {
    email?: string;
}

//</editor-fold>
//<editor-fold desc="Misc">

/** Represents "from" and "to" Date. Generic, so you can pass true to say it's required. */
declare type DateRange<Required extends true|false = false> = [
    Date|(Required extends true ? never : null),
    Date|(Required extends true ? never : null)
];

//</editor-fold>
