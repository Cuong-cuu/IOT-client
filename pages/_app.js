import React from 'react'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Quick Parking</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp
