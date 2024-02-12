import { ICourse } from '@types';

// Styles
import styles from './styles.module.scss';


import type { Metadata } from 'next'
import CourseBookings from '@components/content/CourseBookings/CourseBookings';
import Landing from '@components/UI/Landing/Landing';
import { getCourseList } from '@lib/courses';

export const metadata: Metadata = {
  title: 'Course Bookings | D-MER',
  description: 'Book an online CPD course.',
}

const CoursesBookings = async () => {
  const courses = await getCourseList();

  return (
    <main className={styles.courses}>
      <Landing
        image="/images/pages/courses/landing.jpg"
        withCTA={false}
      >
        <h1><span>Book</span> a Course</h1>
      </Landing>

      <CourseBookings courses={courses} />
    </main>
  )
}

export default CoursesBookings;
