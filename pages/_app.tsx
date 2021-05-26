import React from 'react';
import '../styles/globals.css'
import type { AppProps as NextAppProps } from 'next/app'
import {WithLayout} from "../decorators/pages/UseLayout";

export type AppProps = NextAppProps & {
  Component: WithLayout<NextAppProps['Component']>;
};

function MyApp({
  Component,
  pageProps
}: AppProps) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
      <Component {...pageProps} />
  );
}
export default MyApp
