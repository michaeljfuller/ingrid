/**
 * Get the values of the passed IDs from the Infrastructure tree.
 */
export function getInfrastructureSelectionFromIds<Type extends InfrastructureType>(
    infrastructure: Infrastructure,
    ids: InfrastructureSelectionIds,
): Partial<InfrastructureSelection> {
    const region = ids.region ? infrastructure.regions.find(item => item.id === ids.region) : undefined;
    const building = ids.building ? region?.buildings.find(item => item.id === ids.building) : undefined;
    const floor = ids.floor ? building?.floors.find(item => item.id === ids.floor) : undefined;
    const room = ids.room ? floor?.rooms.find(item => item.id === ids.room) : undefined;

    return { region, building, floor, room };
}
export default getInfrastructureSelectionFromIds;

export type InfrastructureSelectionIds = Record<keyof InfrastructureSelection, string|undefined>;
