import React from "react";
import UseLayout from "../decorators/pages/UseLayout";
import styles from "../styles/Page.module.css";
import Head from "next/head";
import Floors from "../components/screens/Floors";

@UseLayout()
export default class FloorsPage extends React.PureComponent {
    render() {
        return <div className={styles.container}>

            <Head>
                <title>Ingrid: Floors</title>
                <meta name="description" content="The Ingrid Floors page"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Floors />
            </main>

        </div>;
    }
}
