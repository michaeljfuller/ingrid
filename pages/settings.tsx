import React from "react";
import UseLayout from "../decorators/pages/UseLayout";
import styles from "../styles/Page.module.css";
import Head from "next/head";
import Settings from "../components/screens/Settings";

@UseLayout()
export default class SettingsPage extends React.PureComponent {
    render() {
        return <div className={styles.container}>

            <Head>
                <title>Ingrid: Settings</title>
                <meta name="description" content="The Ingrid Settings page"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Settings />
            </main>

        </div>;
    }
}
