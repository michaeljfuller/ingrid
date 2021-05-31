import {makeStyles} from "@material-ui/core/styles";
import PageHeader from "../PageHeader";
import InfrastructureSelection from "../../forms/fieldset/InfrastructureSelection";
import DateRangePicker from "../../forms/input/DateRangePicker";

export interface DashboardHeaderProps {
    infrastructure: Infrastructure;
    infrastructureSelection: InfrastructureSelection;
    onInfrastructureSelection: (selection: InfrastructureSelection) => void;
    dateRange: DateRange;
    onDateRange: (range: DateRange) => void;
}

/**
 * The header on the Dashboard page, allowing the user to select filters.
 */
export const DashboardHeader = function DashboardHeader(props: DashboardHeaderProps) {
    const classes = useStyles();
    return <PageHeader title="Dashboard">
        <form className={classes.form}>
            <InfrastructureSelection
                infrastructure={props.infrastructure}
                selection={props.infrastructureSelection}
                onSelection={props.onInfrastructureSelection}
            />
            <div className={classes.dateRangePickerContainer}>
                <DateRangePicker
                    className={classes.DateRangePicker}
                    dateRange={props.dateRange}
                    onDateRange={props.onDateRange}
                />
            </div>
        </form>
    </PageHeader>
};
export default DashboardHeader;

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto',
    },
    dateRangePickerContainer: {
        minWidth: 150,
        overflow: 'hidden',
    },
    DateRangePicker: {
        // Adjust dateRangePicker to match other items
        margin: theme.spacing(1),
        height: 48,
    },
}));
