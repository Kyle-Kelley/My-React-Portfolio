import App from 'next/app';
import Header from '../components/Header';
import './src/styles.css';

function MyApp({ Component, pageProps }) {
    return(
        <div>
            <Header />
            <Component {...pageProps} />
        </div>
    ) 
}

export default MyApp;