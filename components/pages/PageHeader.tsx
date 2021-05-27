import {PropsWithChildren} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

export interface PageHeaderProps {
    title: string;
}
export function PageHeader(props: PropsWithChildren<PageHeaderProps>) {
    const classes = useStyles();
    return <AppBar position="static" className={classes.appBar}>
        <Toolbar>
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
    title: {
        flexGrow: 1, // Push everything right
    },
}));
