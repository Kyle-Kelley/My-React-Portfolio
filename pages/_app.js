import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import './src/styles.css';


function MyApp({ Component, pageProps }) {
    return(
        <div>
             <Head>
                <title>Kyle Kelley</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <Component {...pageProps} />
        </div>
    ) 

}

export default MyApp;

// head took from index.js