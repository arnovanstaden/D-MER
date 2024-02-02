import { ICourse } from '@types';

// Components
import Landing from '@components/UI/Landing/Landing';


// Styles
import styles from './styles.module.scss';


import type { Metadata } from 'next'
import { getFirestoreDocumentCollection } from '@lib/firestore';
import CourseList from '@components/content/CourseList/CourseList';

export const metadata: Metadata = {
  title: 'Courses | D-MER',
  description: 'Book an online CPD course.',
}

const Courses = async () => {
  const courses = await getFirestoreDocumentCollection<ICourse>('courses');

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
