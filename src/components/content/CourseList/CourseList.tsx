'use client';

import Container from '@components/UI/Library/Container/Container';
import { ICourse } from '@types';
import { useState } from 'react';
import styles from './CourseList.module.scss';
import Course from '@components/content/Course/Course';
import CourseBookings from '@components/content/CourseBookings/CourseBookings';

const CourseList: React.FC<{ courses: ICourse[] }> = ({ courses }) => {
  const [showBookings, setShowBookings] = useState(false)
  const [ticked, setTicked] = useState<string[]>([])

  const handleBookingToggle = () => {
    setShowBookings((prev) => !prev);
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
    <div>
      <section>
        <Container>
          <div className={styles.grid} id="book">
            {courses.map((course, index) => (<Course course={course} key={index} toggle={() => handleUpdateAndToggle(course._id)} />))}
          </div>
        </Container>
      </section>

      <CourseBookings show={showBookings} toggle={handleBookingToggle} courses={courses} ticked={ticked} handleTick={handleUpdateTicked} />
    </div>
  );
};

export default CourseList;
