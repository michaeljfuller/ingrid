import {makeStyles} from "@material-ui/core/styles";

export interface OccupancyGridCellProps {
    percent: number;
}
export function OccupancyGridCell(props: OccupancyGridCellProps) {
    const styles = useStyles();
    return <div
        className={styles.root}
        title={props.percent + '%'}
        style={{ opacity: props.percent/100 }}
    />;
}
export default OccupancyGridCell;

const useStyles = makeStyles((theme) => {
    return {
        root: {
            userSelect: 'none',
            backgroundColor: theme.palette.secondary.main,
        },
    };
});
