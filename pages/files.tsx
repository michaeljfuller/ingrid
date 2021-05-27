import React from "react";
import UseLayout from "../decorators/pages/UseLayout";
import styles from "../styles/Page.module.css";
import Head from "next/head";
import Files from "../components/screens/Files";

@UseLayout()
export default class FilesPage extends React.PureComponent {
    render() {
        return <div className={styles.container}>

            <Head>
                <title>Ingrid: Floors</title>
                <meta name="description" content="The Ingrid Files page"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Files />
            </main>

        </div>;
    }
}
