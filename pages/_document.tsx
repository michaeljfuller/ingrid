import React from 'react';
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../styles/material-ui/theme';

/**
 * @link https://nextjs.org/docs/advanced-features/custom-document
 * @link https://material-ui.com/guides/server-rendering/
 * @link https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js
 */
class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {

        // Render app and page and get the context of the page with collected side effects.
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (
                App
            ) => {
                return (props) => sheets.collect(<App {...props} />);
            },
        });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            // Styles fragment is rendered after the app and page rendering finish.
            styles: [
                ...React.Children.toArray(initialProps.styles),
                sheets.getStyleElement(),
            ],
        };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="theme-color" content={theme.palette.primary.main} /> {/* PWA primary color */}
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
