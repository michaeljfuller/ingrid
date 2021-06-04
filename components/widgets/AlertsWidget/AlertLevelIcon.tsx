import {makeStyles} from "@material-ui/core/styles";
import {AlertLevel} from "../../../utils/enums";

export interface AlertLevelIconProps {
    level: AlertLevel|undefined;
}
export function AlertLevelIcon({level}: AlertLevelIconProps) {
    const styles = useStyles();

    return <span className={styles.root + " " + (level ? styles[level] : '')}>
        {level || '?'}
    </span>;
}

const useStyles = makeStyles((theme) => {
    return {
        root: {
            borderWidth: 2,
            borderStyle: 'solid',
            padding: '0 2px',
            textTransform: 'capitalize',
        },
        [AlertLevel.High]: {
            color: 'red',
            borderColor: 'red',
        },
        [AlertLevel.Mid]: {
            color: 'orange',
            borderColor: 'orange',
        },
        [AlertLevel.Low]: {
            color: 'grey',
            borderColor: 'grey',
        },
    };
});
