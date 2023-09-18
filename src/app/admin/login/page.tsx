import AdminLoginForm from '@components/admin/Login';
import { GetStaticProps } from 'next';

const AdminLogin = (): JSX.Element | null => {
  return <AdminLoginForm />
};

export default AdminLogin;

export const getStaticProps: GetStaticProps = (ctx) => {

  return {
    props: {
      noLayout: true,
    }
  }
}