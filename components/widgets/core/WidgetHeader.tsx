import CardHeader, {CardHeaderProps} from '@material-ui/core/CardHeader';
import {makeStyles} from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';

import RefreshIcon from '@material-ui/icons/Sync';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ExpandIcon from '@material-ui/icons/ZoomOutMap';

export type WidgetHeaderProps = Omit<CardHeaderProps, 'avatar'> & {
    icon:  CardHeaderProps['avatar'];
    onRefresh?: () => void;
    onSettings?: () => void;
    onExpand?: () => void;
}

export function WidgetHeader(props: WidgetHeaderProps) {
    const {
        icon,
        className,
        onRefresh,
        onSettings,
        onExpand,
        ...headerProps
    } = props;
    const styles = useStyles();
    return <CardHeader {...headerProps}
           className={styles.root+" "+(className || '')}
           avatar={icon}
           action={<div className={styles.action}>
               {props.children}
               <IconButton disabled size="small" aria-label="Refresh" onClick={onRefresh}>
                   <RefreshIcon fontSize="small" />
               </IconButton>
               <IconButton disabled size="small" aria-label="Settings" onClick={onSettings}>
                   <SettingsIcon fontSize="small" />
               </IconButton>
               <IconButton disabled size="small" aria-label="Expand" onClick={onExpand}>
                   <ExpandIcon fontSize="small" />
               </IconButton>
           </div>}
    />;
}
export default WidgetHeader;

const useStyles = makeStyles((theme) => {
    return {
        root: {
            paddingBottom: 0,
        },
        action: {},
    };
});
