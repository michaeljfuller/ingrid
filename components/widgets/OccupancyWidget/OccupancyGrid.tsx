import {ReactNode} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {dateFromISO, dayOfWeek} from "../../../utils/date";
import OccupancyGridCell from "./OccupancyGridCell";

export interface OccupancyGridProps {
    records: OccupancyRecord[];
}
export function OccupancyGrid(props: OccupancyGridProps) {
    const styles = useStyles();
    const cells: ReactNode[] = [];
    props.records.forEach((record, recordIndex) => {
        const date = record.date ? dateFromISO(record.date) : undefined;
        const day = date ? dayOfWeek(date) : undefined;
        const key = day || recordIndex;
        const hourlyPercentage = record.hourlyPercentage || [];
        while (hourlyPercentage.length < 24) hourlyPercentage.push(0);

        cells.push(
            <div
                key={key}
                title={day}
                className={styles.day}
            >{day ? day[0] : '?'}</div>,
            ...hourlyPercentage.map(
                (value, index) => <OccupancyGridCell key={key+"-"+index} percent={value} />
            )
        );
    });

    return <div className={styles.root}>
        <div className={styles.grid}>
            {cells}
            <div className={styles.hour} style={{gridColumn: '2/5', textAlign: 'left'}}>12 AM</div>
            <div className={styles.hour} style={{gridColumn: '5/11'}}>6 AM</div>
            <div className={styles.hour} style={{gridColumn: '11/17'}}>12 PM</div>
            <div className={styles.hour} style={{gridColumn: '17/23'}}>6 PM</div>
            <div className={styles.hour} style={{gridColumn: '23/26', textAlign: 'right'}}>12 AM</div>
        </div>
    </div>;
}
export default OccupancyGrid;

const useStyles = makeStyles((theme) => {
    const border = '1px solid black';
    const dateWidth = '16px';
    return {
        root: {
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: '20px '+ Array(24).fill(dateWidth).join(' '),
            gridTemplateRows: '20px',
        },
        day: {
            userSelect: 'none',
            borderRight: border,
        },
        hour: {
            userSelect: 'none',
            borderTop: border,
            textAlign: 'center',
        },
    };
});
