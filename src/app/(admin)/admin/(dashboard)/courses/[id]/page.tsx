import Course from '@components/admin/courses/Course';
import { getCourse } from '@lib/courses';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Edit Course | D-MER Worldwide',
  robots: {
    index: false,
    follow: false,
  }
}

const CoursePage: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const course = await getCourse(params.id);
  return <Course course={course} />
}

export default CoursePage;
