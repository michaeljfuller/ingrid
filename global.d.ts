declare interface Infrastructure {
    regions: Region[];
}
declare interface Region {
    id: string;
    name: string;
    buildings: Building[];
}
declare interface Building {
    id: string;
    name: string;
    floors: Floor[];
}
declare interface Floor {
    id: string;
    name: string;
    rooms: Room[];
}
declare interface Room {
    id: string;
    name: string;
}

type InfrastructureType = 'region'|'building'|'floor'|'room';
type InfrastructureFromType<T extends InfrastructureType> = (
    T extends 'region'   ? Region :
    T extends 'building' ? Building :
    T extends 'floor'    ? Floor :
    T extends 'room'     ? Room :
    never
);

