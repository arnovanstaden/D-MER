// Components
import Landing from '@components/UI/Landing/Landing';


// Styles
import styles from './styles.module.scss';


import type { Metadata } from 'next'
import CourseList from '@components/content/CourseList/CourseList';
import { getCourseList } from '@lib/courses';

export const metadata: Metadata = {
  title: 'Courses | D-MER',
  description: 'Book an online CPD course.',
}

const Courses = async () => {
  const courses = await getCourseList();

  return (
    <main className={styles.courses}>
      <Landing
        image="/images/pages/courses/landing.jpg">
        <h1><span>Online</span> Continuous Professional Development <span>Courses</span></h1>
      </Landing>

      <CourseList courses={courses} />
    </main>
  )
}

export default Courses;
