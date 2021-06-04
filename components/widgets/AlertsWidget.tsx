import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';

import AlertIcon from '@material-ui/icons/ReportProblemOutlined';
import RefreshIcon from '@material-ui/icons/Sync';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ExpandIcon from '@material-ui/icons/ZoomOutMap';

import {AlertItem} from "./AlertsWidget/AlertItem";

export interface AlertsWidgetProps {
    alerts: AlertRecord[];
    className?: string;
}

export function AlertsWidget(props: AlertsWidgetProps) {
    const styles = useStyles();

    return <Card variant="outlined" className={styles.root+" "+props.className}>
        <CardHeader className={styles.CardHeader}
            title="Alerts"
            avatar={<AlertIcon fontSize="large" />}
            action={<div className={styles.action}>
                <IconButton disabled size="small" aria-label="Refresh"><RefreshIcon fontSize="small" /></IconButton>
                <IconButton disabled size="small" aria-label="Settings"><SettingsIcon fontSize="small" /></IconButton>
                <IconButton disabled size="small" aria-label="Expand"><ExpandIcon fontSize="small" /></IconButton>
            </div>}
        />
        <CardContent className={styles.CardContent}>
            {props.alerts.map(alert => <AlertItem key={alert.id} alert={alert} />)}
            {props.alerts?.length ? null : "No alerts"}
        </CardContent>
        <CardActionArea>{/*props.alerts?.length*/}</CardActionArea>
    </Card>;
}

const useStyles = makeStyles((theme) => {
    return {
        root: {
            minWidth: 300,
        },
        CardHeader: {
            paddingBottom: 0,
        },
        CardContent: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            gap: 3,
            paddingTop: 0,
        },
        spacer: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        action: {},
    };
});
