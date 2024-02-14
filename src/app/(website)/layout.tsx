import Footer from '@components/Layout/Footer/Footer';
import Header from '@components/Layout/Header/Header';

export const revalidate = false;

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
