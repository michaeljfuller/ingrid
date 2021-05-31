export interface VisitorOverviewWidgetItemProps {
    rating?: HealthRating|SatisfactionRating;
}

export function VisitorOverviewWidgetItem(
    {rating}: VisitorOverviewWidgetItemProps
) {
    return <div style={{
        minWidth: 100
    }}>
        <p>{rating ? Math.round(rating.percent) : '?'}%</p>
        <p>{rating ? Math.round(rating.percentChange) : '?'}%</p>
        <p>Health Score</p>
        <p>{rating ? rating.periodLabel : '?'} average</p>
    </div>;
}
export default VisitorOverviewWidgetItem;
