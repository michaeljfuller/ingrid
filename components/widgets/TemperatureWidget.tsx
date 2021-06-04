import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import GroupIcon from '@material-ui/icons/Group';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import WidgetHeader from "./core/WidgetHeader";

export interface TemperatureWidgetProps {
    records: TemperatureRecord[];
    className?: string;
}

export function TemperatureWidget(props: TemperatureWidgetProps) {
    const styles = useStyles();

    return <Card variant="outlined" className={styles.root+" "+props.className}>
        <WidgetHeader title="Temperature" icon={<AcUnitIcon fontSize="large" />} />
        <CardContent className={styles.CardContent}>

        </CardContent>
    </Card>;
}
export default TemperatureWidget;

const useStyles = makeStyles((theme) => {
    return {
        root: {
            minWidth: 300,
        },
        CardContent: {
        },
    };
});
