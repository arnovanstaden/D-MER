'use client';

import { GetStaticProps } from 'next';
import { ICourse } from '@types';
import { useState } from 'react'

// Components
import Landing from '@components/UI/Landing/Landing';
import Container from '@components/UI/Library/Container/Container';
import Course from '@components/content/Course/Course';
import Bookings from '@components/content/CourseBookings/CourseBookings'
// Styles
import styles from './styles.module.scss';


import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Courses | D-MER',
  description: 'Book an online CPD course.',
}


const Courses = ({ courses }: { courses: ICourse[] }) => {
  const [showBookings, setShowBookings] = useState(false)
  const [ticked, setTicked] = useState<string[]>([])

  const handleBookingToggle = () => {
    setShowBookings(prev => !prev);
  }

  const handleUpdateAndToggle = (course_id: string) => {
    handleUpdateTicked(course_id);
    handleBookingToggle()
  }

  const handleUpdateTicked = (course_id: string) => {
    let updatedTicked: string[] = [];
    if (ticked.includes(course_id)) {
      return;
    } else {
      updatedTicked = [...ticked, course_id]
      setTicked(updatedTicked)
    }
  }

  return (
    <main className={styles.courses}>

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
    </main>
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
