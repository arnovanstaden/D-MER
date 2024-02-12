import CreateCoupons from '@components/admin/coupons/CreateCoupons';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coupons | D-MER Worldwide',
  robots: {
    index: false,
    follow: false,
  }
}

const AdminDashboard = (): JSX.Element | null => <CreateCoupons />;

export default AdminDashboard;
