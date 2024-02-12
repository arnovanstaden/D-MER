'use client';

import Input from '@components/UI/Library/Input';
import styles from './styles.module.scss';
import TextArea from '@components/UI/Library/TextArea';
import Button from '@components/UI/Library/Button/Button';
import { useState } from 'react';
import { ICourse } from '@types';
import Link from 'next/link';
import { Box, Modal, Typography } from '@mui/material';
import { createCourse, deleteCourse } from '@lib/courses';
import { useRouter } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const Course = ({ course }: { course?: ICourse }): JSX.Element | null => {
  const router = useRouter();
  const isNewCourse = !course;
  const [updatedCourse, setUpdatedCourse] = useState<ICourse>(course || {
    id: '',
    name: '',
    objective: '',
    description: '',
    price: 0,
  });
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const updateCourse = (update: Partial<ICourse>) => setUpdatedCourse((prev) => ({
    ...prev,
    ...update,
  }));

  const handleCreateCourse = async () => {
    await createCourse(updatedCourse);
    router.replace('/admin/courses');
  }

  const handleUpdateCourse = async () => {
    updateCourse(updatedCourse)
    router.replace('/admin/courses');
  }

  const handleDeleteCourse = async () => {
    if (!course) return;
    setOpenDeleteModal(false);
    await deleteCourse(course.id);
    router.replace('/admin/courses');
  }

  return (
    <div className={styles.Course}>
      <div className={styles.actions}>
        <Link href="/admin/courses">
          <Button>
            Cancel
          </Button>
        </Link>
        <div>
          {!isNewCourse && (
            <Button onClick={() => setOpenDeleteModal(true)}>
              Delete Course
            </Button>
          )}
          <Button fill onClick={isNewCourse ? handleCreateCourse : handleUpdateCourse}>
            {isNewCourse ? 'Create Course' : 'Save Course'}
          </Button>
        </div>
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
      <Modal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.deleteModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete Course
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete this course? This action cannot be undone.
          </Typography>
          <div className={styles.actions}>
            <Button onClick={() => setOpenDeleteModal(false)}>
              Cancel
            </Button>
            <Button onClick={handleDeleteCourse} fill>
              Delete Course
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Course;
