
import Head from 'next/head';
import Hero from './hero/hero';
import Footer from "./footer/footer";
import Nav from "./nav/nav";
import SecondaryNav from './nav/secondary-nav';



const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <Head>
                <title>Favian Ibra Yanuarta</title>
                <meta name="description" content="Software Engineer" />
                <link rel="icon" href="/favicon.ico" />
                
            </Head>
            <SecondaryNav/>
            <Hero/>
            <Nav/>
            { children }
            <Footer/>
        </div>
     );
}
 
export default Layout;