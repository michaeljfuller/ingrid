import PageHeader from "../PageHeader";
import css from "./DashboardHeader/DashboardHeader.module.css";
import InfrastructureSelection from "../../forms/fieldset/InfrastructureSelection";
import DateRangePicker from "../../forms/input/DateRangePicker";

export interface DashboardHeaderProps {
    infrastructure: Infrastructure;
    onInfrastructureSelection: (selection: InfrastructureSelection) => void;
    infrastructureSelection: InfrastructureSelection;
}

/**
 * The header on the Dashboard page, allowing the user to select filters.
 */
export const DashboardHeader = function DashboardHeader(props: DashboardHeaderProps) {
    return <PageHeader title="Dashboard">
        <form className={css.form}>
            <InfrastructureSelection
                infrastructure={props.infrastructure}
                selection={props.infrastructureSelection}
                onSelection={props.onInfrastructureSelection}
            />
            <div className={css.dateRangePicker}>
                <DateRangePicker />
            </div>
        </form>
    </PageHeader>
};
export default DashboardHeader;
