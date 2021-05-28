import React from "react";
import {GetServerSideProps} from 'next'
import Head from 'next/head'
import UseLayout from "../decorators/pages/UseLayout";
import styles from '../styles/Page.module.css'
import Dashboard from "../components/screens/Dashboard";
import DashboardHeader, {DashboardHeaderProps} from "../components/pages/headers/DashboardHeader";

interface DashboardPageProps {
    infrastructure: Infrastructure;
}

//https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps<DashboardPageProps> = async context => {
    return {
        props: {
            infrastructure: {
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
                                ]},
                        ]
                    },
                ],
            },
        },
    }
}

@UseLayout()
export default class DashboardPage extends React.PureComponent<DashboardPageProps> {

    handleInfrastructure: DashboardHeaderProps['onInfrastructureSelection'] = selection => {
        console.log('DashboardPage.handleSelection', selection);
    }

    render() {
        console.log('DashboardPage.render', this.props);
        return <div className={styles.container}>

            <Head>
                <title>Ingrid: Dashboard</title>
                <meta name="description" content="The Ingrid Dashboard"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header className={styles.header}>
                <DashboardHeader
                    infrastructure={this.props.infrastructure}
                    onInfrastructureSelection={this.handleInfrastructure}
                />
            </header>

            <main className={styles.main}>
                <Dashboard />
            </main>

        </div>;
    }
}
