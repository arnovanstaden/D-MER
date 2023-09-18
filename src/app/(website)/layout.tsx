import Footer from '@components/UI/Footer/Footer';
import Header from '@components/UI/Header/Header';

const WebsiteLayout = ({ children }: { children: React.ReactNode }): JSX.Element | null => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default WebsiteLayout;
