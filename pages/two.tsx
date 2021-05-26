import React from "react";
import UseLayout from "../decorators/pages/UseLayout";

@UseLayout()
export default class Two extends React.Component {
    render() {
        return <h1>Page Two</h1>
    }
}
