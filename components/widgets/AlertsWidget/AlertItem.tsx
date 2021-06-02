export interface AlertItemProps {
    alert: AlertRecord;
    className?: string;
}

export function AlertItem(props: AlertItemProps) {
    return <div style={{border:'1px solid blue'}}>
        <p>{props.alert.title}</p>
        <p>{props.alert.message}</p>
        <p>{props.alert.timestamp}</p>
        <p>{props.alert.assignee?.email}</p>
        <p>{props.alert.level}</p>
    </div>
}
