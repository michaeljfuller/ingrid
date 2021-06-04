import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import GroupIcon from '@material-ui/icons/Group';
import ToysIcon from '@material-ui/icons/Toys';

import WidgetHeader from "./core/WidgetHeader";

export interface IndoorAirQualityWidgetProps {
    radon?: IndoorAirQualityRecord;
    voc?: IndoorAirQualityRecord;
    co2?: IndoorAirQualityRecord;
    pressure?: IndoorAirQualityRecord;
    humidity?: IndoorAirQualityRecord;
    className?: string;
}

export function IndoorAirQualityWidget(props: IndoorAirQualityWidgetProps) {
    const styles = useStyles();

    return <Card variant="outlined" className={styles.root+" "+props.className}>
        <WidgetHeader title="Indoor Air Quality" icon={<ToysIcon fontSize="large" />} />
        <CardContent className={styles.CardContent}>

        </CardContent>
    </Card>;
}
export default IndoorAirQualityWidget;

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
    };
});
