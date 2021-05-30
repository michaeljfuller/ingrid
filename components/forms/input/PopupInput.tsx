import {PropsWithChildren, useState} from "react";
import TextField, {TextFieldProps} from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Popover from "@material-ui/core/Popover";

export type DateRangePickerFieldProps = Omit<TextFieldProps, 'InputProps'>;

/**
 * Shows the passed value. When the dropdown is clicked, a popup opens displaying the children.
 */
export function PopupInput(props: PropsWithChildren<DateRangePickerFieldProps>) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement|null>(null);
    const open = Boolean(anchorEl);

    return <>
        <TextField
            {...props}
            value={props.value || ''}
            InputProps={{
                endAdornment: <InputAdornment position="end">
                    <IconButton
                        edge="end"
                        aria-label="Open date range selection"
                        onClick={event => setAnchorEl(event.currentTarget)}
                    >
                        {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </IconButton>
                </InputAdornment>
            }}
        />
        <Popover
            id={open && props.id ? props.id+"-popover" : undefined}
            open={open}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            {props.children}
        </Popover>
    </>;
}
export default PopupInput;
