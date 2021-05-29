import css from "./Dashboard.module.css";
import {repeat} from "../../utils/array";

export interface DashboardProps {
    infrastructureSelection?: Partial<InfrastructureSelection>;
}

export default function Dashboard(props: DashboardProps) {
    return <div className={css.Dashboard}>
        <h1>Dashboard</h1>
        <div className={css.widgetArea}>{
            repeat(12, index => (
                <div className={css.widget}>
                    <span>{index+1}</span>
                </div>
            ))
        }</div>
        <pre>{JSON.stringify(props, null, 4)}</pre>
    </div>
}
