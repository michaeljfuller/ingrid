import {makeStyles} from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {AlertLevelIcon} from "./AlertLevelIcon";
import {dateFromISO, humanDateString} from "../../../utils/date";

export interface AlertItemProps {
    alert: AlertRecord;
    className?: string;
}

export function AlertItem(props: AlertItemProps) {
    const styles = useStyles();
    const {
        title,
        level,
        message,
        assignee,
    } = props.alert;
    const timestamp = props.alert.timestamp && dateFromISO(props.alert.timestamp);

    return <div className={styles.root}>
        <div className={styles.header}>
            <div><AlertLevelIcon level={level} /></div>
            <span className={styles.title}>{title}</span>
            <IconButton disabled aria-label="Open" size="small"><OpenInNewIcon fontSize="small" /></IconButton>
        </div>

        <p>{message}</p>

        <div className={styles.footer}>
            <span className={styles.assignee}>
                Assigned to {assignee ? <a href={'mailto:'+assignee.email}>{assignee.email}</a> : 'nobody'}
            </span>
            <span>{timestamp && humanDateString(timestamp)}</span>
        </div>

    </div>
}

const useStyles = makeStyles((theme) => {
    return {
        root: {
            padding: theme.spacing(2),
            backgroundColor: '#eee',
        },
        header: {
            display: 'flex',
            flexDirection: 'row',
        },
        title: {
            flex: 1,
            paddingLeft: theme.spacing(0.5)
        },
        footer: {
            display: 'flex',
            flexDirection: 'row',
        },
        assignee: {
            flex: 1,
            '& a': {
                color: theme.palette.action.active
            }
        },
    };
});
