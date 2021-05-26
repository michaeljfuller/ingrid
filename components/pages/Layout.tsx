import React, {PropsWithChildren} from "react";
import Sidebar from "../navigation/Sidebar";

export default function Layout(props: PropsWithChildren<{}>) {
    return <Sidebar>{props.children}</Sidebar>
}
