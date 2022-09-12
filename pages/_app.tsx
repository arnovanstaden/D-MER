import type { AppProps } from 'next/app'
import { toast, ToastContainer } from 'react-toastify';

// Components
import Header from '../components/UI/Header/Header';
import Footer from '../components/UI/Footer/Footer';

// Global Styles
import '../styles/global.scss';
import "../assets/icons/style.css";
import 'react-toastify/dist/ReactToastify.css';

// Fonts
import "typeface-montserrat";
import "typeface-poppins";

// Fonts

function MyApp({ Component, pageProps }: AppProps) {
  toast('hello')

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        autoClose={20000}
        closeOnClick
        hideProgressBar
        icon={false}
        className="notification"
        bodyClassName="notification_body"
        closeButton={false}
        limit={1}
      />
      <Footer />
    </>
  )
}

export default MyApp
