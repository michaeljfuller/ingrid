import React from "react";
import Head from 'next/head'
import UseLayout from "../decorators/pages/UseLayout";
import styles from '../styles/Page.module.css'
import Dashboard from "../components/screens/Dashboard";

@UseLayout()
export default class DashboardPage extends React.PureComponent {
    render() {
        return <div className={styles.container}>

            <Head>
                <title>Ingrid: Dashboard</title>
                <meta name="description" content="The Ingrid Dashboard"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Dashboard />
            </main>

        </div>;
    }
}
