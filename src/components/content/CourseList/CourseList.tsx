'use client';

import Container from '@components/UI/Library/Container/Container';
import { useState } from 'react';
import styles from './CourseList.module.scss';
import Course from '@components/content/Course/Course';
import { ICourse } from '@types';

const CourseList: React.FC<{ courses: ICourse[] }> = ({ courses }) => (
  <section className={styles.CourseList}>
    <Container>
      <div className={styles.grid} id="book">
        {courses.map((course, index) => <Course course={course} key={index} />)}
      </div>
    </Container>
  </section>
);

export default CourseList;
