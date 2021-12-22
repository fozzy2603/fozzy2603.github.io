import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="robots" content="noindex" />
                    <link rel="icon" href="./favicon.ico" />
                    <link
                        href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&subset=latin,cyrillic&display=swap"
                        rel="stylesheet"
                        type="text/css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
