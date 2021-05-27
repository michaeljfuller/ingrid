import List from "@material-ui/core/List";
import {SidebarItem, SidebarItemProps} from "./SidebarItem";

export interface SidebarItemListProps {
    items: SidebarItemProps[];
    onClick?: () => void;
}

export function SidebarItemList({
    items, onClick
}: SidebarItemListProps) {
    return <List>
        {items.map(
            itemProps => <SidebarItem key={itemProps.label} onClick={onClick} {...itemProps} />
        )}
    </List>
}
export default SidebarItemList;
