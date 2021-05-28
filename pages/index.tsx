import React from "react";
import {GetServerSideProps} from 'next'
import Head from 'next/head'
import {NextRouter} from "next/router";

import UseLayout from "../decorators/pages/UseLayout";
import styles from '../styles/Page.module.css'
import Dashboard from "../components/screens/Dashboard";
import DashboardHeader, {DashboardHeaderProps} from "../components/pages/headers/DashboardHeader";
import getInfrastructureSelectionFromIds from "../utils/infrastructure/getInfrastructureSelectionFromIds";

interface DashboardPageServerSideProps {
    infrastructure: Infrastructure;
}
interface DashboardPageProps extends DashboardPageServerSideProps{
    router: NextRouter;
}

//https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps<DashboardPageServerSideProps> = async context => {
    return {
        props: {
            infrastructure: { // TODO Move to GraphQL
                regions: [
                    {
                        id: 'r1', name: 'Region 1', buildings: []
                    }, {
                        id: 'r2', name: 'Region 2', buildings: [
                            {
                                id: 'b1', name: 'First Building', floors: []
                            }, {
                                id: 'b2', name: 'Second Building', floors: [
                                    {
                                        id: 'f1', name: '1st Floor', rooms: [],
                                    }, {
                                        id: 'f2', name: '2nd Floor', rooms: [
                                            {id: 'r1', name: 'Room 101'},
                                            {id: 'r2', name: 'Room 102'},
                                        ]
                                    }
                                ]
                            },
                        ]
                    },
                ],
            },
        },
    }
}

@UseLayout()
export default class DashboardPage extends React.PureComponent<DashboardPageProps> {

    /** Update queryString with the InfrastructureSelection. */
    private updateInfrastructureSelectionUri(infrastructure: Partial<InfrastructureSelection>) {
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
    get infrastructureSelection() {
        return getInfrastructureSelectionFromIds(this.props.infrastructure, this.props.router.query as any)
    }

    handleInfrastructureSelection: DashboardHeaderProps['onInfrastructureSelection'] = async selection => {
        await this.updateInfrastructureSelectionUri(selection);
    }

    render() {
        console.log('DashboardPage.render');
        const infrastructureSelection = this.infrastructureSelection;

        return <div className={styles.container}>

            <Head>
                <title>Ingrid: Dashboard</title>
                <meta name="description" content="The Ingrid Dashboard"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header className={styles.header}>
                <DashboardHeader
                    infrastructure={this.props.infrastructure}
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
