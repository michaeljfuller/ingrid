import {PropsWithChildren} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

export interface PageHeaderProps {
    title: string;
    className?: string;
}
export function PageHeader(props: PropsWithChildren<PageHeaderProps>) {
    const classes = useStyles();
    return <AppBar position="static" className={classes.appBar+" "+props.className}>
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>{props.title}</Typography>
            {props.children}
        </Toolbar>
    </AppBar>;
}
export default PageHeader;

const useStyles = makeStyles(theme => ({
    appBar: {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
    },
    toolbar: {
        padding: 0,
    },
    title: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(1),
        flexGrow: 1, // Push everything right
    },
}));
