import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';

// Components
import Header from '../components/UI/Header/Header';
import Footer from '../components/UI/Footer/Footer';

// Global Styles
import '../styles/global.scss';
import '../assets/icons/style.css';
import 'react-toastify/dist/ReactToastify.css';

// Fonts
import { Montserrat, Poppins } from 'next/font/google'
import classNames from 'classnames';

// Fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  preload: true,
  variable: '--font-montserrat',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  preload: true,
  variable: '--font-poppins',
  display: 'swap',
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className={classNames(poppins.variable, montserrat.variable)}>
      <Header />
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        hideProgressBar
        icon={false}
        className="notification"
        bodyClassName="notification_body"
        closeButton={false}
        limit={2}
      />
      <Footer />
    </div>
  )
}

export default MyApp
