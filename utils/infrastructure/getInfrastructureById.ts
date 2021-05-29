export function getRegionById(infrastructure: Infrastructure, id: string): Region|undefined {
    return infrastructure.regions.find(
        region => region.id === id
    );
}

export function getBuildingById(infrastructure: Infrastructure, id: string): Building|undefined {
    let result: Building|undefined;
    infrastructure.regions.find(
        region => region.buildings.find(
            building => result = (building.id === id) ? building : undefined // If match, set result. Because it's truthy, all finds will end.
        )
    );
    return result;
}

export function getFloorById(infrastructure: Infrastructure, id: string): Floor|undefined {
    let result: Floor|undefined;
    infrastructure.regions.find(
        region => region.buildings.find(
            building => building.floors.find(
                floor => result = (floor.id === id) ? floor : undefined // If match, set result. Because it's truthy, all finds will end.
            )
        )
    );
    return result;
}

export function getRoomById(infrastructure: Infrastructure, id: string): Room|undefined {
    let result: Room|undefined;
    infrastructure.regions.find(
        region => region.buildings.find(
            building => building.floors.find(
                floor => floor.rooms.find(
                    room => result = (room.id === id) ? room : undefined // If match, set result. Because it's truthy, all finds will end.
                ),
            ),
        ),
    );
    return result;
}
