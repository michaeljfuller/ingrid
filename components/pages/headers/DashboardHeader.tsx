import {Dispatch} from "react";
import PageHeader from "../PageHeader";
import useInfrastructure, {InfrastructureState} from "../../../hooks/useInfrastructure";
import InfrastructureSelect, {InfrastructureSelectProps} from "./DashboardHeader/InfrastructureSelect";
import useUpdateEffect from "../../../hooks/useUpdateEffect";
import InfrastructureAction from "../../../hooks/useInfrastructure/InfrastructureAction";
import css from "./DashboardHeader/DashboardHeader.module.css";

export interface DashboardHeaderProps {
    infrastructure: Infrastructure;
    onInfrastructureSelection: (selection: InfrastructureState) => void;
}

/**
 * The header on the Dashboard page, allowing the user to select filters.
 */
export function DashboardHeader(props: DashboardHeaderProps) {
    const [
        {infrastructure, region, building, floor, room},
        dispatchInfrastructure,
    ] = useInfrastructure(props.infrastructure);

    // If a dependency changes after the first render, use the callback.
    useUpdateEffect(() => {
        if (props.onInfrastructureSelection) {
            props.onInfrastructureSelection({ infrastructure, region, building, floor, room });
        }
    }, [region?.id, building?.id, floor?.id, room?.id]);

    // Handle selection changes by creating an InfrastructureAction with the given `type` and event value as the payload.
    const onChangeRegion = createInfrastructureSelectionHandler(dispatchInfrastructure, "set_region_id");
    const onChangeBuilding = createInfrastructureSelectionHandler(dispatchInfrastructure, "set_building_id");
    const onChangeFloor = createInfrastructureSelectionHandler(dispatchInfrastructure, "set_floor_id");
    const onChangeRoom = createInfrastructureSelectionHandler(dispatchInfrastructure, "set_room_id");

    return <PageHeader title="Dashboard" className={css.root}>
        <form>
            <fieldset>
                <InfrastructureSelect id="dashboard-header-region"   label="Region"   value={region?.id || ''}   onChange={onChangeRegion}   items={infrastructure.regions}  />
                <InfrastructureSelect id="dashboard-header-building" label="Building" value={building?.id || ''} onChange={onChangeBuilding} items={region?.buildings || []} />
                <InfrastructureSelect id="dashboard-header-floor"    label="Floor"    value={floor?.id || ''}    onChange={onChangeFloor}    items={building?.floors || []}  />
                <InfrastructureSelect id="dashboard-header-room"     label="Room"     value={room?.id || ''}     onChange={onChangeRoom}     items={floor?.rooms || []}      />
            </fieldset>
        </form>
    </PageHeader>
}
export default DashboardHeader;

function createInfrastructureSelectionHandler(
    dispatcher: Dispatch<InfrastructureAction>,
    type: "set_region_id"|"set_building_id"|"set_floor_id"|"set_room_id"
): InfrastructureSelectProps['onChange'] {
    return (event) => dispatcher({ type, payload: event.target.value as string });
}
