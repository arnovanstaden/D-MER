import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin | D-MER Worldwide',
  robots: {
    index: false,
    follow: false,
  }
}

const AdminDashboard = (): JSX.Element | null => <h1>Courses</h1>;

export default AdminDashboard;
