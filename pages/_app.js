import Layout from '../comps/Layout';
import '../styles/globals.scss';
//import '../public/icons/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
