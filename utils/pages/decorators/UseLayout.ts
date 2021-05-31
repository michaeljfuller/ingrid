import React, {ReactElement, ComponentType, Attributes} from "react";
import {StandardLayout, StandardLayoutProps} from "../../../components/pages/layout/StandardLayout";

/**
 * Use the given LayoutComponent on the target page, with the passed props.
 */
export function UseLayout<P extends {}>(
    LayoutComponent: ComponentType<P>,
    props: Attributes & P
): ClassDecorator;

/**
 * Use StandardLayout on the target page, with the passed StandardLayoutProps.
 */
export function UseLayout(
    props?: StandardLayoutProps
): ClassDecorator;


/**
 * Attach a static 'getLayout' function to a page class, for the root App component to call.
 */
export function UseLayout<
    P extends {}
>(
    propsOrComponent?: P | ComponentType<P>,
    props?: P,
) {
    const Component: ComponentType<P> = typeof propsOrComponent === "function"
        ? propsOrComponent as ComponentType<P>
        : StandardLayout;
    const properties: P = (
        props // Use props if passed
        || typeof propsOrComponent === "object"
            ? propsOrComponent // Use passed propsOrComponent if object
            : ( // Otherwise, use defaults
                Component === StandardLayout // If it's the StandardLayout
                    ? {} as StandardLayoutProps // Use default StandardLayoutProps
                    : {} as any // Use empty props
            )
    );

    return (
        constructor: WithLayout<ComponentType>
    ) => {
        constructor.getLayout = function getLayout(page: React.ReactElement) {
            return React.createElement(Component, properties, page);
        }
    };
}
export default UseLayout;

/** Attach 'getLayout' to the ComponentType */
export type WithLayout<Component extends ComponentType> = Component & { getLayout?: GetLayout };

/** Method that returns a layout component with the page embedded. */
export type GetLayout = (page: React.ReactElement) => ReactElement;
