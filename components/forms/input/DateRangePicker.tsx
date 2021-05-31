import React from 'react';
import {KeyboardDatePickerProps, DatePicker} from '@material-ui/pickers';
import withStyles from "@material-ui/styles/withStyles";

import PopupInput from "./PopupInput";

// https://material-ui.com/components/pickers/

export interface DateRangePickerProps {
    id?: string;
    dateRange?: DateRange;
    onDateRange: (range: DateRange) => void;
    dateFrom?: Date;
    dateTo?: Date;
    className?: string;
}

export function DateRangePicker(props: DateRangePickerProps) {
    const [
        dateFrom = new Date,
        dateTo = new Date
    ] = props.dateRange || [];

    const onDateFrom: KeyboardDatePickerProps['onChange'] = selected => {
        props.onDateRange([selected, dateTo]);
    };
    const onDateTo: KeyboardDatePickerProps['onChange'] = selected => {
        props.onDateRange([dateFrom, selected]);
    };

    return <PopupInput
        value={
            `${dateFrom?.toLocaleDateString()} - ${dateTo?.toLocaleDateString()}`
        }
        id={props.id}
        aria-label="Date range"
        placeholder="Date Range"
        hiddenLabel
        required
        className={props.className}
    >
        <div style={{ display: 'flex', flexDirection: 'row', gap: 1, paddingBottom: 5 }}>
            <DatePicker
                variant="static"
                value={dateFrom}
                onChange={onDateFrom}
                disableFuture
                maxDate={dateTo}
            />
            <DatePicker
                variant="static"
                value={dateTo}
                onChange={onDateTo}
                disableFuture
                minDate={dateFrom}
            />
        </div>
    </PopupInput>;
}
export default DateRangePicker;
