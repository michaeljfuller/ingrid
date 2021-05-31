export interface StatsWidgetProps {
    title: string;
    value: string;
    percentChange: number;
    periodLabel: string;
}
export function StatsWidget({
    title,
    value,
    percentChange,
    periodLabel,
}: StatsWidgetProps) {
    return <div style={{ minWidth: 100 }}>
        <p>{value}</p>
        <p style={{
            color: !percentChange ? undefined : (percentChange > 0 ? 'green' : 'red')
        }}>{percentChange}%</p>
        <p>{title}</p>
        <p>{periodLabel} average</p>
    </div>
}
export default StatsWidget;
