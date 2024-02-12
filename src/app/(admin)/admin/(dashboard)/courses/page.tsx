import CourseList from '@components/admin/CourseList';
import type { Metadata } from 'next';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Courses | D-MER Worldwide',
  robots: {
    index: false,
    follow: false,
  }
}

const CourseListPage = (): JSX.Element | null => <CourseList />;

export default CourseListPage;
