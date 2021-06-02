import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {AlertItem} from "./AlertsWidget/AlertItem";

export interface AlertsWidgetProps {
    alerts: AlertRecord[];
    className?: string;
}

export function AlertsWidget(props: AlertsWidgetProps) {
    const styles = useStyles();
    return <Card variant="outlined" className={styles.root+" "+props.className}>
        <CardContent className={styles.CardContent}>
            {props.alerts.map(alert => <AlertItem key={alert.id} alert={alert} />)}
            {props.alerts?.length ? null : "No alerts"}
        </CardContent>
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
        },
        spacer: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    };
});
