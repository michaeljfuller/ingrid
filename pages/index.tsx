import React from "react";
import Head from 'next/head'
import UseLayout from "../decorators/pages/UseLayout";
import styles from '../styles/Page.module.css'
import Dashboard from "../components/screens/Dashboard";
import PageHeader from "../components/pages/PageHeader";

@UseLayout()
export default class DashboardPage extends React.PureComponent {
    render() {
        return <div className={styles.container}>

            <Head>
                <title>Ingrid: Dashboard</title>
                <meta name="description" content="The Ingrid Dashboard"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header className={styles.header}>
                <PageHeader title="Dashboard">
                    Hello World
                </PageHeader>
            </header>

            <main className={styles.main}>
                <Dashboard />
            </main>

        </div>;
    }
}
