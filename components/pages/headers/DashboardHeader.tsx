import PageHeader from "../PageHeader";
import css from "./DashboardHeader/DashboardHeader.module.css";
import InfrastructureSelection from "../../forms/fieldset/InfrastructureSelection";

export interface DashboardHeaderProps {
    infrastructure: Infrastructure;
    onInfrastructureSelection: (selection: Partial<InfrastructureSelection>) => void;
    infrastructureSelection: Partial<InfrastructureSelection>;
}

/**
 * The header on the Dashboard page, allowing the user to select filters.
 */
export const DashboardHeader = function DashboardHeader(props: DashboardHeaderProps) {
    return <PageHeader title="Dashboard" className={css.root}>
        <form>
            <InfrastructureSelection
                infrastructure={props.infrastructure}
                selection={props.infrastructureSelection}
                onSelection={props.onInfrastructureSelection}
            />
        </form>
    </PageHeader>
};
export default DashboardHeader;
