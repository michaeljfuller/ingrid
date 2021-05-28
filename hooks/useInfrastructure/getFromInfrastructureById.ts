import {InfrastructureState} from "../useInfrastructure";

/**
 * A function that can search the InfrastructureState for the given type & ID.
 */
export function getFromInfrastructureById<Type extends InfrastructureType>(
        state: InfrastructureState, type: Type, id: string
    ): InfrastructureFromType<Type>|undefined {
        switch (type) {
            case "region": return state.infrastructure.regions.find(item => item.id === id) as any;
            case "building": return state.region?.buildings.find(item => item.id === id) as any;
            case "floor": return state.building?.floors.find(item => item.id === id) as any;
            case "room": return state.floor?.rooms.find(item => item.id === id) as any;
        }
        return undefined;
    }
export default getFromInfrastructureById;
