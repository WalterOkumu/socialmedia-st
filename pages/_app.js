import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
          <>
            <Head>
              <title>Rede Social - São Tomé</title>
            </Head>
            <Component {...pageProps} />
          </>
        )
}

export default MyApp
