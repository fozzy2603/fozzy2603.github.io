import type { AppProps } from 'next/app';
import '../styles/scss/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="page-wrapper">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
