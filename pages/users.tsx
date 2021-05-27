import React from "react";
import UseLayout from "../decorators/pages/UseLayout";
import styles from "../styles/Page.module.css";
import Head from "next/head";
import Users from "../components/screens/Users";

@UseLayout()
export default class UsersPage extends React.PureComponent {
    render() {
        return <div className={styles.container}>

            <Head>
                <title>Ingrid: Users</title>
                <meta name="description" content="The Ingrid Users page"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Users />
            </main>

        </div>;
    }
}
