'use client';

import Input from '@components/UI/Library/Input';
import styles from './styles.module.scss';
import TextArea from '@components/UI/Library/TextArea';
import Button from '@components/UI/Library/Button/Button';
import { useState } from 'react';
import { CourseProps } from '@types';

const Course = ({ course }: { course?: CourseProps }): JSX.Element | null => {
  const isNewCourse = !course;
  const [updatedCourse, setUpdatedCourse] = useState<CourseProps>(course || {
    _id: '',
    name: '',
    objective: '',
    description: '',
    price: 0,
  });

  const updateCourse = (update: Partial<CourseProps>) => setUpdatedCourse((prev) => ({
    ...prev,
    ...update,
  }));

  return (
    <div className={styles.Course}>
      <div className={styles.actions}>
        {!isNewCourse && (
          <Button>
            Delete Course
          </Button>
        )}
        <Button fill>
          {isNewCourse ? 'Create Course' : 'Save Course'}
        </Button>
      </div>
      <form action="">
        <Input
          label='Course Name'
          name="name"
          inputProps={{ required: true }}
          value={updatedCourse.name}
          onChange={(newValue) => updateCourse({ name: newValue as string })}
        />
        <Input
          label='Price'
          name="price"
          inputProps={{ required: true }}
          value={updatedCourse.price}
          onChange={(newValue) => updateCourse({ price: newValue as number })}
        />
        <TextArea
          label='Objective'
          name="objective" inputProps={{ required: true, rows: 4 }}
          value={updatedCourse.objective}
          onChange={(newValue) => updateCourse({ objective: newValue as string })}
        />
        <TextArea
          label='Description'
          name="description"
          inputProps={{ required: true, rows: 5 }}
          value={updatedCourse.description}
          onChange={(newValue) => updateCourse({ description: newValue as string })}
        />
      </form>
    </div>
  );
};

export default Course;
