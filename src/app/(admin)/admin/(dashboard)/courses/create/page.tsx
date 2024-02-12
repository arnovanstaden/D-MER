import Course from '@components/admin/courses/Course';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Course | D-MER Worldwide',
  robots: {
    index: false,
    follow: false,
  }
}
const CoursePage = (): JSX.Element | null => <Course />

export default CoursePage;
