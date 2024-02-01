import { GetStaticProps } from 'next';
import { ICourse } from '../utils/interfaces';
import { useState } from 'react'

// Components
import Page from '../components/UI/Page/Page';
import Landing from '../components/UI/Landing/Landing';
import Container from '../components/UI/Library/Container/Container';
import Course from '../components/content/Course/Course';
import Bookings from '../components/content/CourseBookings/CourseBookings'
// Styles
import styles from '../styles/pages/courses.module.scss';


const Courses = ({ courses }: { courses: ICourse[] }) => {

  const [showBookings, setShowBookings] = useState(false)
  const [ticked, setTicked] = useState<string[]>([])

  const handleBookingToggle = () => {
    setShowBookings(prev => !prev);
  }

  const handleUpdateAndToggle = (courseId: string) => {
    handleUpdateTicked(courseId);
    handleBookingToggle()
  }

  const handleUpdateTicked = (courseId: string) => {
    let updatedTicked: string[] = [];
    if (ticked.includes(courseId)) {
      return;
    } else {
      updatedTicked = [...ticked, courseId]
      setTicked(updatedTicked)
    }
  }

  return (
    <Page
      head={{
        title: 'Courses | D-MER',
        description: 'Book an online CPD course.',
        canonical: '/courses',
      }}
      className={styles.courses}
    >

      <Landing
        image="/images/pages/courses/landing.jpg">
        <h1><span>Online</span> Continuous Professional Development <span>Courses</span></h1>
      </Landing>

      <section>
        <Container>
          <div className={styles.grid} id="book">
            {courses.map((course, index) => (<Course course={course} key={index} toggle={() => handleUpdateAndToggle(course._id)} />))}
          </div>
        </Container>
      </section>

      <Bookings show={showBookings} toggle={handleBookingToggle} courses={courses} ticked={ticked} handleTick={handleUpdateTicked} />
    </Page>
  )
}

export default Courses

export const getStaticProps: GetStaticProps = async () => {
  const coursesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`);
  const courses = await coursesResponse.json();

  return {
    props: {
      courses
    },
  }
}
