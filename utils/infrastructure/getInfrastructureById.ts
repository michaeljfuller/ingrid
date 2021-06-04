import {forEachUntil} from "../array";

export function getRegionById(infrastructure: Infrastructure, id: string): Region|undefined {
    return infrastructure.regions.find(
        region => region.id === id
    );
}

export function getBuildingById(infrastructure: Infrastructure, id: string): Building|undefined {
    return forEachUntil(infrastructure.regions,
        region => forEachUntil(region.buildings,
            building => building.id === id ? building : undefined
        )
    );
}

export function getFloorById(infrastructure: Infrastructure, id: string): Floor|undefined {
    return forEachUntil(infrastructure.regions,
        region => forEachUntil(region.buildings,
            building => forEachUntil(building.floors,
                floor => floor.id === id ? floor : undefined
            )
        )
    );
}

export function getRoomById(infrastructure: Infrastructure, id: string): Room|undefined {
    return forEachUntil(infrastructure.regions,
        region => forEachUntil(region.buildings,
            building => forEachUntil(building.floors,
                floor => forEachUntil(floor.rooms,
                    room => room.id === id ? room : undefined
                )
            )
        )
    );
}
