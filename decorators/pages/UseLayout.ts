import React from "react";
import Layout from "../../components/pages/Layout";

/**
 * Attach a static 'getLayout' function to a page class, for the root App component to call.
 */
export default function UseLayout() {
    return (
        constructor: WithLayout<Function>
    ) => {
        constructor.getLayout = getLayout;
    }
}

export type WithLayout<Component extends Function> = Component & { getLayout?: typeof getLayout };

export function getLayout(page: React.ReactElement) {
    return React.createElement(Layout, {}, page);
}
