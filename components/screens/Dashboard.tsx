import css from "./Dashboard.module.css";
import {repeat} from "../../utils/array";
import StatsGroupWidget from "../widgets/StatsGroupWidget";

export interface DashboardProps {
    infrastructureSelection?: InfrastructureSelection;
    stats?: Stats;
}

export default function Dashboard(props: DashboardProps) {
    return <div className={css.Dashboard}>
        <h1>Dashboard</h1>
        <div className={css.widgetArea}>
            <StatsGroupWidget stats={{
                health: props.stats?.health,
                satisfaction: props.stats?.satisfaction,
            }} />
            <StatsGroupWidget stats={{
                temperature: props.stats?.temperature,
                occupancy: props.stats?.occupancy,
                indoorAirQuality: props.stats?.indoorAirQuality,
                noise: props.stats?.noise,
                light: props.stats?.light,
                cleaning: props.stats?.cleaning,
            }} />
            {
                repeat(8, index => (
                    <div key={index} className={css.widget}>
                        <span>{index+1}</span>
                    </div>
                ))
            }
        </div>
        <pre>{JSON.stringify(props, null, 4)}</pre>
    </div>
}
