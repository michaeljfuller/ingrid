import React, {PropsWithChildren, useState} from "react";

import {makeStyles} from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import SidebarItem from "./Sidebar/SidebarItem";
import SidebarItemList from "./Sidebar/SidebarItemList";
import SidebarDrawer, {getClosedWidth} from "./Sidebar/SidebarDrawer";

import {mainItems, miscItems} from "./sidebarItems";

export interface SidebarProps {}

/**
 * @link https://material-ui.com/components/drawers/#mini-variant-drawer
 */
export default function Sidebar({
    children
}: PropsWithChildren<SidebarProps>) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const closeDrawer = React.useCallback(() => setOpen(false), [setOpen]);
    const toggleDrawer = React.useCallback(() => setOpen(!open), [open, setOpen]);

    return <>
        <SidebarDrawer open={open}>
            <SidebarItem label="Minimise" icon={open ? ChevronLeftIcon : ChevronRightIcon} onClick={toggleDrawer} />
            <Divider />
            <SidebarItemList items={mainItems} onClick={closeDrawer} />
            <Divider />
            <SidebarItemList items={miscItems} onClick={closeDrawer} />
        </SidebarDrawer>

        <main className={classes.content}>
            {children}
        </main>
    </>;
}

export const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        marginLeft: getClosedWidth(theme),
    },
}));
