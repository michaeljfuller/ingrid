import React from "react";
import UseLayout from "../decorators/pages/UseLayout";
import styles from "../styles/Page.module.css";
import Head from "next/head";
import Buildings from "../components/screens/Buildings";

@UseLayout()
export default class BuildingsPage extends React.PureComponent {
    render() {
        return <div className={styles.container}>

            <Head>
                <title>Ingrid: Buildings</title>
                <meta name="description" content="The Ingrid Buildings page"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Buildings />
            </main>

        </div>;
    }
}
