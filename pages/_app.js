import App from 'next/app';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
    return(
        <div>
            <Header />
            <Component {...pageProps} />
        </div>
    ) 
}

export default MyApp;