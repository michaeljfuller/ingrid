import React from 'react';
import type { AppProps as NextAppProps } from 'next/app'

import '../styles/globals.css'
import {WithLayout} from "../decorators/pages/UseLayout";
import MaterialUiTheme from "../components/pages/MaterialUiTheme";

export type AppProps = NextAppProps & {
  Component: WithLayout<NextAppProps['Component']>;
};

/**
 * The root of the application.
 * @link https://github.com/mui-org/material-ui/tree/master/examples/nextjs
 */
function MyApp({
  Component,
  pageProps
}: AppProps) {
  const getLayout = Component.getLayout || ((page) => page);
  const page = getLayout( <Component {...pageProps} /> );

  // Remove the server-side injected CSS when client renders.
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles);
  }, []);

  return <>
    <MaterialUiTheme>
      {page}
    </MaterialUiTheme>
  </>;
}
export default MyApp
