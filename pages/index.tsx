import React from "react";
import {GetServerSideProps} from 'next'
import Head from 'next/head'
import {NextRouter} from "next/router";

import UseLayout from "../utils/pages/decorators/UseLayout";
import styles from '../styles/Page.module.css'
import Dashboard from "../components/screens/Dashboard";
import DashboardHeader, {DashboardHeaderProps} from "../components/pages/headers/DashboardHeader";
import getInfrastructureSelectionFromIds, {InfrastructureSelectionIds} from "../utils/infrastructure/getInfrastructureSelectionFromIds";
import {getAllInfrastructureFromServer} from "../api/graphql/queries/getAllInfrastructure";
import updateParsedUrlQuery from "../utils/pages/updateParsedUrlQuery";
import {mapObject} from "../utils/object";
import {dateToISO, dateFromISO, subtractDate} from "../utils/date";
import {getStatsFromInfrastructureFromServer} from "../api/graphql/queries/stats/getStatsFromInfrastructure";
import createServer from "../api/graphql/createServer";

interface DashboardPageServerSideProps {
    infrastructure?: Infrastructure;
    stats?: Stats;
    serverErrors: string[];
}
interface DashboardPageProps extends DashboardPageServerSideProps {
    router: NextRouter;
}

//https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps<DashboardPageServerSideProps> = async context => {
    const graphServer = createServer();
    const query = context.query as UrlQuery;
    const [from, to] = dateRangeFromUrlQuery(query);

    const infrastructureRequest = await getAllInfrastructureFromServer(graphServer);
    const statsRequest = await getStatsFromInfrastructureFromServer(from, to, graphServer);

    return {
        props: {
            infrastructure: infrastructureRequest.data?.allInfrastructure,
            stats: statsRequest.data?.statsFromInfrastructure.stats,
            serverErrors: [
                ...(infrastructureRequest.errors?.map(error => error.message) || []),
                ...(statsRequest.errors?.map(error => error.message) || []),
            ]
        },
    }
}

type UrlQuery = InfrastructureSelectionIds & {
    from?: string;
    to?: string;
}

@UseLayout()
export default class DashboardPage extends React.PureComponent<DashboardPageProps> {

    /** Update queryString with the InfrastructureSelection. */
    private updateInfrastructureSelectionUri(infrastructure: InfrastructureSelection) {
        const query = updateParsedUrlQuery(
            this.props.router.query,
            mapObject(infrastructure, item => ({value: item?.id, remove: !item})),
            ['region', 'building', 'floor', 'room']
        );
        return this.props.router.replace({ query });
    }

    /** Update queryString with the DateRange. */
    private updateDateSelectionUri(dateRange?: DateRange) {
        const [from, to] = dateRange || [];
        const query = updateParsedUrlQuery(
            this.props.router.query,
            mapObject({from, to}, date => ({ value: date && dateToISO(date) })),
        );
        return this.props.router.replace({ query });
    }

    /** Get InfrastructureSelection from the queryString */
    get infrastructureSelection(): InfrastructureSelection {
        if (this.props.infrastructure) {
            return getInfrastructureSelectionFromIds(this.props.infrastructure, this.props.router.query as UrlQuery)
        }
        return {};
    }

    /** Get DateRange from the queryString */
    get dateRange() {
        return dateRangeFromUrlQuery(this.props.router.query as UrlQuery);
    }

    handleInfrastructureSelection: DashboardHeaderProps['onInfrastructureSelection'] = async selection => {
        await this.updateInfrastructureSelectionUri(selection);
    }
    handleDateRangeSelection: DashboardHeaderProps['onDateRange'] = async selection => {
        await this.updateDateSelectionUri(selection);
    }

    render() {
        const {
            serverErrors,
            infrastructure = { regions: [] },
            stats,
        } = this.props;
        const infrastructureSelection = this.infrastructureSelection;

        serverErrors.forEach(error => console.error('Server Error:', error));

        return <div className={styles.container}>

            <Head>
                <title>Ingrid: Dashboard</title>
                <meta name="description" content="The Ingrid Dashboard"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header className={styles.header}>
                <DashboardHeader
                    infrastructure={infrastructure}
                    infrastructureSelection={infrastructureSelection}
                    onInfrastructureSelection={this.handleInfrastructureSelection}
                    dateRange={this.dateRange}
                    onDateRange={this.handleDateRangeSelection}
                />
            </header>

            <main className={styles.main}>
                <Dashboard infrastructureSelection={infrastructureSelection} stats={stats} />
            </main>

        </div>;
    }
}

/** Get DateRange from the queryString, with defaults. */
function dateRangeFromUrlQuery({from, to}: UrlQuery): DateRange<true> {
    let dateTo = to ? dateFromISO(to) : new Date();
    let dateFrom = from ? dateFromISO(from) : subtractDate(dateTo, {days: 7});
    return [dateFrom, dateTo];
}
