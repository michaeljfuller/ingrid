import {createElement} from "react";
import type {SvgIcon} from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import OptionalLink, {OptionalLinkProps} from "../OptionalLink";

export interface SidebarItemProps {
    label?: string;
    icon?: typeof SvgIcon;
    href?: OptionalLinkProps['href'];
    onClick?: () => void;
}
export function SidebarItem(props: SidebarItemProps) {
    const {
        label,
        icon,
        href,
        onClick,
    } = props;

    const iconElement = icon ? <ListItemIcon>{ createElement(icon) }</ListItemIcon> : null;
    const labelElement = label ? <ListItemText primary={label} /> : null;

    return <OptionalLink href={href}>
        <ListItem button component="a" onClick={onClick}>
            {iconElement}
            {labelElement}
        </ListItem>
    </OptionalLink>;
}
export default SidebarItem;
