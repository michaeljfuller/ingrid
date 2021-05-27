import {createElement} from "react";
import type {SvgIcon} from "@material-ui/core";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export interface SidebarItemProps {
    label?: string;
    icon?: typeof SvgIcon;
    onClick?: () => void;
}
export function SidebarItem(props: SidebarItemProps) {
    const { label, icon } = props;
    const iconElement = icon ? <ListItemIcon>{ createElement(icon) }</ListItemIcon> : null;
    const labelElement = label ? <ListItemText primary={label} /> : null;

    return <ListItem button onClick={props.onClick}>
        {iconElement}
        {labelElement}
    </ListItem>;
}
export default SidebarItem;
