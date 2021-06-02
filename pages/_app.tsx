import React from 'react';
import type { AppProps as NextAppProps } from 'next/app'
import { useRouter } from 'next/router'

import "@fontsource/roboto";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';

import '../styles/globals.css'
import {WithLayout} from "../utils/pages/decorators/UseLayout";
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
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);
  const page = getLayout( <Component router={router} {...pageProps} /> );

  // Remove the server-side injected CSS when client renders.
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles);
  }, []);

  return <>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MaterialUiTheme>
        {page}
      </MaterialUiTheme>
    </MuiPickersUtilsProvider>
  </>;
}
export default MyApp
