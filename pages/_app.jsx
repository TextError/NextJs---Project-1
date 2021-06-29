import SEO from 'next/head';
import Layout from '../components/layout/Layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SEO>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>placeholder title</title>
        <meta name='name' content='lorem' key='name' />
      </SEO>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;