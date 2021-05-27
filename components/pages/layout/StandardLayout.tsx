import React, {PropsWithChildren} from "react";
import Sidebar from "../../navigation/Sidebar";

export interface StandardLayoutProps {
    sidebar?: boolean;
}
export function StandardLayout({
    sidebar=true,
    children
}: PropsWithChildren<StandardLayoutProps>): React.ReactElement {
    return sidebar ? <Sidebar>{children}</Sidebar> : <div>{children}</div>;
}
export default StandardLayout;
