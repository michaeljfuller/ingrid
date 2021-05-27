import React from "react";
import UseLayout from "../decorators/pages/UseLayout";
import styles from "../styles/Page.module.css";
import Head from "next/head";
import Alerts from "../components/screens/Alerts";

@UseLayout()
export default class AlertsPage extends React.PureComponent {
    render() {
        return <div className={styles.container}>

            <Head>
                <title>Ingrid: Alerts</title>
                <meta name="description" content="The Ingrid Alerts page"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Alerts />
            </main>

        </div>;
    }
}
