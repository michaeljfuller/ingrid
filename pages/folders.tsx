import React from "react";
import UseLayout from "../utils/pages/decorators/UseLayout";
import styles from "../styles/Page.module.css";
import Head from "next/head";
import Folders from "../components/screens/Folders";

@UseLayout()
export default class FoldersPage extends React.PureComponent {
    render() {
        return <div className={styles.container}>

            <Head>
                <title>Ingrid: Folders</title>
                <meta name="description" content="The Ingrid Folders page"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Folders />
            </main>

        </div>;
    }
}
