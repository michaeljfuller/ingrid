import SelectionItem, {InfrastructureSelectionItemProps} from "./InfrastructureSelect/InfrastructureSelectionItem";
import getInfrastructureSelectionFromIds, {InfrastructureSelectionIds} from "../../../utils/infrastructure/getInfrastructureSelectionFromIds";

export interface InfrastructureSelectionProps {
    infrastructure: Infrastructure;
    selection: InfrastructureSelection;
    onSelection: (selection: InfrastructureSelection) => void;
}

/**
 * A series of input items for selecting an Infrastructure tree.
 */
export function InfrastructureSelection({
    infrastructure,
    selection,
    onSelection,
}: InfrastructureSelectionProps) {
    const { region, building, floor, room } = selection || {};
    const ids: InfrastructureSelectionIds = {
        region: selection.region?.id,
        building: selection.building?.id,
        floor: selection.floor?.id,
        room: selection.room?.id,
    };

    const onRegion = createInfrastructureSelectionHandler(infrastructure, ids, onSelection, 'region');
    const onBuilding = createInfrastructureSelectionHandler(infrastructure, ids, onSelection, 'building');
    const onFloor = createInfrastructureSelectionHandler(infrastructure, ids, onSelection, 'floor');
    const onRoom = createInfrastructureSelectionHandler(infrastructure, ids, onSelection, 'room');

    return <fieldset>
        <SelectionItem id="InfrastructureSelection-region"   label="Region"   value={region?.id || ''}   onChange={onRegion}   items={infrastructure.regions}  />
        <SelectionItem id="InfrastructureSelection-building" label="Building" value={building?.id || ''} onChange={onBuilding} items={region?.buildings || []} />
        <SelectionItem id="InfrastructureSelection-floor"    label="Floor"    value={floor?.id || ''}    onChange={onFloor}    items={building?.floors || []}  />
        <SelectionItem id="InfrastructureSelection-room"     label="Room"     value={room?.id || ''}     onChange={onRoom}     items={floor?.rooms || []}      />
    </fieldset>
}
export default InfrastructureSelection;

/**
 * Create a callback for a SelectionItem that updates the InfrastructureSelection
 */
function createInfrastructureSelectionHandler(
    infrastructure: Infrastructure,
    selectionIds: InfrastructureSelectionIds,
    onSelection: InfrastructureSelectionProps['onSelection'],
    key: keyof InfrastructureSelection,
): InfrastructureSelectionItemProps['onChange'] {
    return (event) => {
        const selection = getInfrastructureSelectionFromIds(infrastructure, {
            ...selectionIds, [key]: event.target.value as string
        });
        onSelection(selection);
    };
}

