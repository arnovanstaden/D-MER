import type { AppProps } from 'next/app'

// Components
import Header from '../components/UI/Header/Header';
import Footer from '../components/UI/Footer/Footer';

// Global Styles
import '../styles/global.scss';
// import "../assets/icons/style.css";

// Fonts
import "typeface-montserrat";
import "typeface-poppins";

// Fonts

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
