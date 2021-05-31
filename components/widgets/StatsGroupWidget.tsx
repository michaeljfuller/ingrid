import {memo} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import {percentOf} from "../../utils/number";
import RawStatsWidget from "./StatsWidget";
import {weave} from "../../utils/array";
import HorizontalSpacer from "../ui/HorizontalSpacer";

const StatsWidget = memo(RawStatsWidget);

export interface StatsGroupWidgetProps {
    className?: string;
    stats: Stats;
}

export function StatsGroupWidget(props: StatsGroupWidgetProps) {
    const {
        health, satisfaction, temperature, occupancy, indoorAirQuality, noise, light, cleaning
    } = props.stats
    const styles = useStyles();

    let items = [
        health ? <StatsWidget
            key="health"
            title="Health Score"
            value={health.percent+"%"}
            percentChange={health.percentChange}
            periodLabel={health.periodLabel}
        /> : null,
        satisfaction ? <StatsWidget
            key="satisfaction"
            title="Satisfaction"
            value={satisfaction.percent+"%"}
            percentChange={satisfaction.percentChange}
            periodLabel={satisfaction.periodLabel}
        /> : null,
        temperature ? <StatsWidget
            key="temperature"
            title="Temperature"
            value={temperature.celsius+"°"}
            percentChange={percentOf(temperature.celsiusChange, temperature.celsius)}
            periodLabel={temperature.periodLabel}
        /> : null,
        occupancy ? <StatsWidget
            key="occupancy"
            title="Occupancy"
            value={occupancy.percent+"%"}
            percentChange={occupancy.percentChange}
            periodLabel={occupancy.periodLabel}
        /> : null,
        indoorAirQuality ? <StatsWidget
            key="indoorAirQuality"
            title="IAQ"
            value={indoorAirQuality.value.toString()}
            percentChange={percentOf(indoorAirQuality.valueChange, indoorAirQuality.value)}
            periodLabel={indoorAirQuality.periodLabel}
        /> : null,
        noise ? <StatsWidget
            key="noise"
            title="Noise"
            value={noise.percent+"%"}
            percentChange={noise.percentChange}
            periodLabel={noise.periodLabel}
        /> : null,
        light ? <StatsWidget
            key="light"
            title="Light"
            value={light.percent+"%"}
            percentChange={light.percentChange}
            periodLabel={light.periodLabel}
        /> : null,
        cleaning ? <StatsWidget
            key="cleaning"
            title="Cleaning"
            value={cleaning.percent+"%"}
            percentChange={cleaning.percentChange}
            periodLabel={cleaning.periodLabel}
        /> : null,
    ].filter(item => item);
    items = weave(
        items,
        index => <HorizontalSpacer key={`spacer-${index}`} className={styles.spacer} />
    );

    return <Card variant="outlined" className={styles.root+" "+props.className}>
        <CardContent className={styles.CardContent}>
            {items}
        </CardContent>
    </Card>;
}
export default StatsGroupWidget;

const useStyles = makeStyles((theme) => {
    return {
        root: {
            minWidth: 300,
        },
        CardContent: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        spacer: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    };
});
