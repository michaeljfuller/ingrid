import React, {PropsWithChildren, useState} from "react";

export interface SidebarProps {

}

export default function Sidebar({
    children
}: PropsWithChildren<SidebarProps>) {
    const [count, setCount] = useState(0);
    return <div>
        <h1>Sidebar</h1>
        <button onClick={() => setCount(count+1)}>{count}</button>
        {children}
    </div>
}
