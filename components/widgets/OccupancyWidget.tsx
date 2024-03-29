import {memo} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import GroupIcon from '@material-ui/icons/Group';

import WidgetHeader from "./core/WidgetHeader";
import RawOccupancyGrid from "./OccupancyWidget/OccupancyGrid";
const OccupancyGrid = memo(RawOccupancyGrid);

export interface OccupancyWidgetProps {
    records: OccupancyRecord[];
    className?: string;
}

export function OccupancyWidget(props: OccupancyWidgetProps) {
    const styles = useStyles();

    return <Card variant="outlined" className={styles.root+" "+props.className}>
        <WidgetHeader title="Occupancy" icon={<GroupIcon fontSize="large" />} />
        <CardContent className={styles.CardContent}>
            <OccupancyGrid records={props.records} />
        </CardContent>
    </Card>;
}
export default OccupancyWidget;

const useStyles = makeStyles((theme) => {
    return {
        root: {
            minWidth: 300,
        },
        CardContent: {

        },
    };
});
