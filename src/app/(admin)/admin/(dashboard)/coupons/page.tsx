import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coupons | D-MER Worldwide',
  robots: {
    index: false,
    follow: false,
  }
}

const AdminDashboard = (): JSX.Element | null => <h1>Coupons</h1>;

export default AdminDashboard;
