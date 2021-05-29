import React from "react";
import {GetServerSideProps} from 'next'
import Head from 'next/head'
import {NextRouter} from "next/router";

import UseLayout from "../decorators/pages/UseLayout";
import styles from '../styles/Page.module.css'
import Dashboard from "../components/screens/Dashboard";
import DashboardHeader, {DashboardHeaderProps} from "../components/pages/headers/DashboardHeader";
import getInfrastructureSelectionFromIds from "../utils/infrastructure/getInfrastructureSelectionFromIds";
import {getAllInfrastructureFromServer} from "../api/graphql/queries/getAllInfrastructure";

interface DashboardPageServerSideProps {
    infrastructure?: Infrastructure;
    serverErrors: string[];
}
interface DashboardPageProps extends DashboardPageServerSideProps {
    router: NextRouter;
}

//https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps<DashboardPageServerSideProps> = async context => {
    const infrastructureRequest = await getAllInfrastructureFromServer();

    return {
        props: {
            infrastructure: infrastructureRequest.data?.infrastructure,
            serverErrors: [
                ...(infrastructureRequest.errors?.map(error => error.message) || []) ,
            ]
        },
    }
}

@UseLayout()
export default class DashboardPage extends React.PureComponent<DashboardPageProps> {

    /** Update queryString with the InfrastructureSelection. */
    private updateInfrastructureSelectionUri(infrastructure: InfrastructureSelection) {
        const query = {...this.props.router.query};
        const keys = ['region', 'building', 'floor', 'room'] as Array<keyof InfrastructureSelection>;
        keys.forEach(key => {
            delete query[key];
            const id = infrastructure[key]?.id;
            if (id) query[key] = encodeURI(id);
        });
        return this.props.router.replace({ query });
    }

    /** Get InfrastructureSelection from the queryString */
    get infrastructureSelection(): InfrastructureSelection {
        if (this.props.infrastructure) {
            return getInfrastructureSelectionFromIds(this.props.infrastructure, this.props.router.query as any)
        }
        return {};
    }

    handleInfrastructureSelection: DashboardHeaderProps['onInfrastructureSelection'] = async selection => {
        await this.updateInfrastructureSelectionUri(selection);
    }

    render() {
        const {
            serverErrors,
            infrastructure = { regions: [] }
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
                    onInfrastructureSelection={this.handleInfrastructureSelection}
                    infrastructureSelection={infrastructureSelection}
                />
            </header>

            <main className={styles.main}>
                <Dashboard infrastructureSelection={infrastructureSelection} />
            </main>

        </div>;
    }
}
