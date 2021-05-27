import React, {PropsWithChildren, useState} from "react";

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import HelpIcon from '@material-ui/icons/HelpOutlineOutlined';

import {SidebarItem} from "./Sidebar/SidebarItem";
import SidebarDrawer, {getClosedWidth} from "./Sidebar/SidebarDrawer";

import sidebarItems from "./sidebarItems";
import {makeStyles} from "@material-ui/core/styles";

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
            <div className={classes.toolbar}>
                <SidebarItem
                    label="Minimise"
                    icon={open ? ChevronLeftIcon : ChevronRightIcon}
                    onClick={toggleDrawer}
                />
            </div>

            <Divider />

            <List>
                {sidebarItems.map(itemProps => <SidebarItem key={itemProps.label} onClick={closeDrawer} {...itemProps} />)}
            </List>

            <Divider />

            <SidebarItem label="Settings" icon={SettingsIcon} />
            <SidebarItem label="Help" icon={HelpIcon} />

        </SidebarDrawer>

        <main className={classes.content}>
            {children}
        </main>
    </>;
}

export const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        marginLeft: getClosedWidth(theme),
    },
}));
