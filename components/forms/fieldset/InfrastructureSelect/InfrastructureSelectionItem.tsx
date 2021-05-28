import InputLabel from "@material-ui/core/InputLabel";
import Select, {SelectProps} from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

export interface InfrastructureSelectionItemProps {
    id: string;
    label: string;
    value: string;
    onChange: SelectProps['onChange'];
    items: Array<{
        id: string;
        name: string;
    }>
}

/**
 * A selection box to pick a Region/Building/Floor/Room.
 */
export function InfrastructureSelectionItem(props: InfrastructureSelectionItemProps) {
    const labelId = props.id+'-label';
    const inputId = props.id+'-input';
    const classes = useStyles();

    return <FormControl id={props.id} className={classes.formControl}>
        <InputLabel id={labelId}>{props.label}</InputLabel>
        <Select
            labelId={labelId}
            id={inputId}
            value={props.value}
            onChange={props.onChange}
            className={classes.selectEmpty}
            disabled={props.items.length === 0}
        >
            {props.items.map(
                item => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
            )}
        </Select>
    </FormControl>
}
export default InfrastructureSelectionItem;

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
