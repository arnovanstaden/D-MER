import CourseList from '@components/admin/CourseList';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Course | D-MER Worldwide',
  robots: {
    index: false,
    follow: false,
  }
}
const CoursePage = (): JSX.Element | null => <CourseList />

export default CoursePage;
