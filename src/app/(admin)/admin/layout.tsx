import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  }
}

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return children;
};

export default AdminLayout;
