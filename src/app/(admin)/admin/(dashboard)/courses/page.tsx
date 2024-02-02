import CourseList from '@components/admin/CourseList';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Courses | D-MER Worldwide',
  robots: {
    index: false,
    follow: false,
  }
}

const AdminDashboard = (): JSX.Element | null => <CourseList />;

export default AdminDashboard;
