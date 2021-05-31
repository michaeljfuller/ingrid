import React from "react";
import UseLayout from "../utils/pages/decorators/UseLayout";
import styles from "../styles/Page.module.css";
import Head from "next/head";
import Help from "../components/screens/Help";

@UseLayout()
export default class HelpPage extends React.PureComponent {
    render() {
        return <div className={styles.container}>

            <Head>
                <title>Ingrid: Help</title>
                <meta name="description" content="The Ingrid Help page"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Help />
            </main>

        </div>;
    }
}
