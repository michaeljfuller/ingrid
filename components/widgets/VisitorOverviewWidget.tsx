import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import VisitorOverviewWidgetItem from "./VisitorOverviewWidget/VisitorOverviewWidgetItem";

export interface VisitorOverviewWidgetProps {
    className?: string;
    health?: HealthRating;
    satisfaction?: SatisfactionRating;
}

export function VisitorOverviewWidget(props: VisitorOverviewWidgetProps) {
    const styles = useStyles();
    return <Card variant="outlined" className={styles.root+" "+props.className}>
        <CardContent className={styles.CardContent}>
            <VisitorOverviewWidgetItem rating={props.health} />
            <VisitorOverviewWidgetItem rating={props.satisfaction} />
        </CardContent>
    </Card>;
}
export default VisitorOverviewWidget;

const useStyles = makeStyles({
    root: {
        minWidth: 300,
    },
    CardContent: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
})
