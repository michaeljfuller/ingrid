import React, {PropsWithChildren} from 'react';
import clsx from "clsx";
import Drawer, {DrawerClassKey} from "@material-ui/core/Drawer";
import {ThemeOfStyles, WithStylesOptions} from "@material-ui/styles/withStyles/withStyles";
import {makeStyles, Theme} from "@material-ui/core/styles";

export interface SidebarDrawerProps {
    open: boolean;
}
export default function SidebarDrawer({open, children}: PropsWithChildren<SidebarDrawerProps>) {
    const classes = useStyles();
    return <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
        })}
        classes={({
            paper: clsx(classes.drawerPaper, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            }),
        } as WithStylesOptions<ThemeOfStyles<DrawerClassKey>>) as any}
    >{children}</Drawer>;
}

export function getClosedWidth(theme: Theme) {
    return theme.spacing(9) + 1;
}
export function getOpenWidth(theme: Theme) {
    return theme.spacing(24) + 1;
}

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: getClosedWidth(theme),
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerPaper: {
        overflow: 'hidden',
    },
    drawerOpen: {
        width: getOpenWidth(theme),
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: getClosedWidth(theme),
    },
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
        padding: theme.spacing(3),
    },
}));
