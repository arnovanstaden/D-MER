import CourseList from '@components/admin/CourseList';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Course | D-MER Worldwide',
  robots: {
    index: false,
    follow: false,
  }
}

const CoursePage = (): JSX.Element | null => <h1>Course</h1>;

export default CoursePage;
