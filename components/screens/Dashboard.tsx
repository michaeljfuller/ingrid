import css from "./Dashboard.module.css";
import {repeat} from "../../utils/array";
import StatsGroupWidget from "../widgets/StatsGroupWidget";
import AlertsWidget from "../widgets/AlertsWidget";
import OccupancyWidget from "../widgets/OccupancyWidget";
import IndoorAirQualityWidget from "../widgets/IndoorAirQualityWidget";
import TemperatureWidget from "../widgets/TemperatureWidget";

export interface DashboardProps {
    infrastructureSelection?: InfrastructureSelection;
    stats?: Stats;
    records?: Records;
}

export default function Dashboard({
    infrastructureSelection,
    stats,
    records
}: DashboardProps) {
    return <div className={css.Dashboard}>
        <h1>Dashboard</h1>
        <div className={css.widgetArea}>
            <StatsGroupWidget stats={{
                health: stats?.health,
                satisfaction: stats?.satisfaction,
            }} />
            <StatsGroupWidget stats={{
                temperature: stats?.temperature,
                occupancy: stats?.occupancy,
                indoorAirQuality: stats?.indoorAirQuality,
                noise: stats?.noise,
                light: stats?.light,
                cleaning: stats?.cleaning,
            }} />
            <AlertsWidget
                alerts={records?.alerts?.items || []}
            />
            <OccupancyWidget
                records={records?.occupancies?.dailyOccupancy || []}
            />
            <IndoorAirQualityWidget
                radon={records?.indoorAirQualities?.radon}
                voc={records?.indoorAirQualities?.voc}
                co2={records?.indoorAirQualities?.co2}
                pressure={records?.indoorAirQualities?.pressure}
                humidity={records?.indoorAirQualities?.humidity}
            />
            <TemperatureWidget
                records={records?.temperatures?.dailyTemperatures || []}
            />
            {
                repeat(8, index => (
                    <div key={index} className={css.widget}>
                        <span>{index+1}</span>
                    </div>
                ))
            }
        </div>

        <h3>Stats</h3>
        <pre>{JSON.stringify(stats, null, 4)}</pre>

        <h3>Records</h3>
        <pre>{JSON.stringify(records, null, 4)}</pre>

        <h3>Infrastructure Selection</h3>
        <pre>{JSON.stringify(infrastructureSelection, null, 4)}</pre>

    </div>
}
