import Footer from '@components/UI/Footer/Footer';
import Header from '@components/UI/Header/Header';
import { ToastContainer } from 'react-toastify';

const WebsiteLayout = ({ children }: { children: React.ReactNode }): JSX.Element | null => {
  return (
    <>
      <Header />
      {children}
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
    </>
  );
};

export default WebsiteLayout;
