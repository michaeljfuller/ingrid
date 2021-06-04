import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from '@material-ui/core/CardActionArea';

import AlertIcon from '@material-ui/icons/ReportProblemOutlined';

import WidgetHeader from "./core/WidgetHeader";
import {AlertItem} from "./AlertsWidget/AlertItem";

export interface AlertsWidgetProps {
    alerts: AlertRecord[];
    className?: string;
}

export function AlertsWidget(props: AlertsWidgetProps) {
    const styles = useStyles();

    return <Card variant="outlined" className={styles.root+" "+props.className}>
        <WidgetHeader title="Alerts" icon={<AlertIcon fontSize="large" />} />
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
        CardContent: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            gap: 3,
            paddingTop: 0,
        },
        action: {},
    };
});
