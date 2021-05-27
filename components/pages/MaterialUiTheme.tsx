import React, {PropsWithChildren} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../../styles/material-ui/theme";

export interface MaterialUiTheme {}

/**
 * Wrap around the base of the app for MaterialUI support.
 */
export default function MaterialUiTheme(props: PropsWithChildren<MaterialUiTheme>) {
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
    </ThemeProvider>;
}
