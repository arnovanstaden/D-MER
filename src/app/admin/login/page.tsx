import AdminLoginForm from '@components/admin/Login';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Login | D-MER Worldwide',
  robots: {
    index: false,
    follow: false,
  }
}

const AdminLogin = (): JSX.Element | null => {
  return <AdminLoginForm />
};

export default AdminLogin;