import {PropsWithChildren, useState, useRef, useEffect, MouseEventHandler, MutableRefObject} from "react";
import {withStyles} from "@material-ui/core/styles";
import TextField, {TextFieldProps} from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Popover from "@material-ui/core/Popover";

export interface DateRangePickerFieldProps extends Omit<TextFieldProps, 'InputProps'|'inputRef'> {
    inputRef?: MutableRefObject<HTMLInputElement|undefined>;
}

/**
 * Shows the passed value. When the dropdown is clicked, a popup opens displaying the children.
 */
export function PopupInput(props: PropsWithChildren<DateRangePickerFieldProps>) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement|null>(null);
    const open = Boolean(anchorEl);

    // Disable the input text element
    const inputRef = props.inputRef || useRef<HTMLInputElement|undefined>();
    useEffect(() => inputRef.current?.setAttribute('disabled', 'true'), [inputRef.current]);

    const openPopup: MouseEventHandler<HTMLElement> = (event) => setAnchorEl(event.currentTarget);
    const closePopup: MouseEventHandler<HTMLElement> = () => setAnchorEl(null);

    return <>
        <TextField
            {...props}
            inputRef={inputRef}
            value={props.value || ''}
            onClick={openPopup}
            InputProps={{
                endAdornment: <InputAdornment position="end">
                    <IconButton
                        edge="end"
                        aria-label="Open date range selection"
                        onClick={openPopup}
                    >
                        {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </IconButton>
                </InputAdornment>
            }}
        />
        <StyledPopover
            id={open && props.id ? props.id+"-popover" : undefined}
            open={open}
            anchorEl={anchorEl}
            onClose={closePopup}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            {props.children}
        </StyledPopover>
    </>;
}
export default PopupInput;

const StyledPopover = withStyles({
    paper: {
        marginTop: 5, // Move a few pixels down
    },
})(Popover);
