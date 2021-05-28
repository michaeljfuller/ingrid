import {Dispatch, useReducer} from 'react';
import InfrastructureAction from './useInfrastructure/InfrastructureAction';
import getFromInfrastructureById from "./useInfrastructure/getFromInfrastructureById";

/**
 * A hook that lets you get/set the infrastructure hierarchy.
 */
export function useInfrastructure(
    infrastructure: Infrastructure,
): [
    InfrastructureState,
    Dispatch<InfrastructureAction>,
] {
    const initialState = infrastructureReducer(
        { infrastructure },
        { type: "set_infrastructure", payload: infrastructure }
    );
    const [state, dispatch] = useReducer(infrastructureReducer, initialState);

    return [state, dispatch];
}
export default useInfrastructure;

function infrastructureReducer(
    state: InfrastructureState,
    action: InfrastructureAction
): InfrastructureState {
    switch (action.type) {

        // Set infrastructure and cascade to default region
        case "set_infrastructure": return infrastructureReducer(
            {...state, infrastructure: action.payload},
            { type: "set_region", payload: action.payload.regions[0] }
        );

        // Set region and cascade to default building
        case "set_region": return infrastructureReducer(
            {...state, region: action.payload},
            { type: "set_building", payload: action.payload?.buildings[0] }
        );

        // Set building and cascade to default floor
        case "set_building": return infrastructureReducer(
            {...state, building: action.payload},
            { type: "set_floor", payload: action.payload?.floors[0] }
        );

        // Set floor and cascade to default room
        case "set_floor": return infrastructureReducer(
            {...state, floor: action.payload},
            { type: "set_room", payload: action.payload?.rooms[0] }
        );

        // Set the room, with nothing to cascade
        case "set_room": return {
            ...state, room: action.payload
        };

        // Find region by ID and cascade
        case "set_region_id":
            const region = getFromInfrastructureById(state, 'region', action.payload);
            if (region) return infrastructureReducer(state, { type: "set_region", payload: region });
            throw new Error(`Region ${action.payload} not found in infrastructureReducer`);

        // Find building by ID and cascade
        case "set_building_id":
            const building = getFromInfrastructureById(state, 'building', action.payload);
            if (building) return infrastructureReducer(state, { type: "set_building", payload: building });
            throw new Error(`Building ${action.payload} not found in infrastructureReducer`);

        // Find floor by ID and cascade
        case "set_floor_id":
            const floor = getFromInfrastructureById(state, 'floor', action.payload);
            if (floor) return infrastructureReducer(state, { type: "set_floor", payload: floor });
            throw new Error(`Floor ${action.payload} not found in infrastructureReducer`);

        // Find room by ID and cascade
        case "set_room_id":
            const room = getFromInfrastructureById(state, 'room', action.payload);
            if (room) return infrastructureReducer(state, { type: "set_room", payload: room });
            throw new Error(`Room ${action.payload} not found in infrastructureReducer`);
    }
    return state;
}

export interface InfrastructureState {
    infrastructure: Infrastructure;
    region?: Region;
    building?: Building;
    floor?: Floor;
    room?: Room;
}

