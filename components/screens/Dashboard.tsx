export interface DashboardProps {
    infrastructureSelection?: Partial<InfrastructureSelection>;
}

export default function Dashboard(props: DashboardProps) {
    return <div>
        <h1>Dashboard</h1>
        <pre>{JSON.stringify(props, null, 4)}</pre>
    </div>
}
