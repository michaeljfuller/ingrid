export type InfrastructureAction = (
    SetInfrastructure |
    SetRegion | SetRegionId |
    SetBuilding | SetBuildingId |
    SetFloor | SetFloorId |
    SetRoom | SetRoomId
);
export default InfrastructureAction;

interface InfrastructureActionBase {
    type: string;
}

export interface SetInfrastructure extends InfrastructureActionBase {
    type: 'set_infrastructure';
    payload: Infrastructure;
}
export interface SetRegion extends InfrastructureActionBase {
    type: 'set_region';
    payload: Region|undefined;
}
export interface SetBuilding extends InfrastructureActionBase {
    type: 'set_building';
    payload: Building|undefined;
}
export interface SetFloor extends InfrastructureActionBase {
    type: 'set_floor';
    payload: Floor|undefined;
}
export interface SetRoom extends InfrastructureActionBase {
    type: 'set_room';
    payload: Room|undefined;
}

export interface SetRegionId extends InfrastructureActionBase {
    type: 'set_region_id';
    payload: string;
}
export interface SetBuildingId extends InfrastructureActionBase {
    type: 'set_building_id';
    payload: string;
}
export interface SetFloorId extends InfrastructureActionBase {
    type: 'set_floor_id';
    payload: string;
}
export interface SetRoomId extends InfrastructureActionBase {
    type: 'set_room_id';
    payload: string;
}
