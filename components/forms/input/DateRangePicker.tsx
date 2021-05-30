import React from 'react';
import millisecondsToHours from 'date-fns/millisecondsToHours';
import daysToWeeks from 'date-fns/daysToWeeks';
import endOfDay from 'date-fns/endOfDay';
import startOfDay from 'date-fns/startOfDay';

import {KeyboardDatePickerProps, DatePicker} from '@material-ui/pickers';
import type {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";

import PopupInput from "./PopupInput";

// https://material-ui.com/components/pickers/

export interface DateRangePickerProps {
    id?: string;
    dateFrom?: Date;
    dateTo?: Date;
    className?: string;
}

export function DateRangePicker(props: DateRangePickerProps) {
    const [dateFrom, setDateFrom] = React.useState<MaterialUiPickersDate>(null);
    const [dateTo, setDateTo] = React.useState<MaterialUiPickersDate>(null);

    const msDifference = dateTo && dateFrom ? dateTo.valueOf() - dateFrom.valueOf() : 0;
    const daysDifference = millisecondsToHours(msDifference/24);
    const weeksDifference = daysToWeeks(daysDifference);

    console.log('DateRangePicker', {
        msDifference, daysDifference, weeksDifference, dateFrom, dateTo
    });

    const onDateFrom: KeyboardDatePickerProps['onChange'] = date => {
        setDateFrom(date && startOfDay(date));
    };
    const onDateTo: KeyboardDatePickerProps['onChange'] = date => {
        setDateTo(date && endOfDay(date));
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
        <div style={{ paddingLeft: 10, paddingRight: 10, display: 'flex', flexDirection: 'row' }}>
            <DatePicker
                variant="static"
                value={dateFrom}
                onChange={onDateFrom}
                disableFuture
            />
            <DatePicker
                variant="static"
                value={dateTo}
                onChange={onDateTo}
                disablePast
            />
        </div>
    </PopupInput>;
}
export default DateRangePicker;
