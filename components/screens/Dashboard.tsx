import css from "./Dashboard.module.css";
import {repeat} from "../../utils/array";
import VisitorOverviewWidget from "../widgets/VisitorOverviewWidget";

export interface DashboardProps {
    infrastructureSelection?: InfrastructureSelection;
    stats?: Stats;
}

export default function Dashboard(props: DashboardProps) {
    return <div className={css.Dashboard}>
        <h1>Dashboard</h1>
        <div className={css.widgetArea}>
            <VisitorOverviewWidget className={css.widget} health={props.stats?.health} satisfaction={props.stats?.satisfaction} />
            {
                repeat(12, index => (
                    <div key={index} className={css.widget}>
                        <span>{index+1}</span>
                    </div>
                ))
            }
        </div>
        <pre>{JSON.stringify(props, null, 4)}</pre>
    </div>
}
