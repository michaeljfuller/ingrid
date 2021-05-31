import {makeStyles} from "@material-ui/core/styles";

export interface HorizontalSpacerProps {
    className?: string;
}

export function HorizontalSpacer({
    className,
    ...props
}: HorizontalSpacerProps) {
    const styles = useStyles();
    className = className ? (styles.root+" "+className) : styles.root;
    return <div className={className} {...props} />;
}
export default HorizontalSpacer;

const useStyles = makeStyles((theme) => {
    const spacerWidth = 1;
    return {
        root: {
            width: 0,
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1) - spacerWidth,
            borderWidth: spacerWidth,
            borderRightStyle: 'solid',
            borderColor: 'grey',
        },
    };
});
