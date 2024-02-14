'use client';

import Input from '@components/UI/Input';
import styles from './styles.module.scss';
import TextArea from '@components/UI/TextArea';
import Button from '@components/UI/Button/Button';
import { useState } from 'react';
import { ICourse } from '@types';
import Link from 'next/link';
import { Box, Modal, Typography } from '@mui/material';
import { createCourse, deleteCourse, updateCourse } from '@lib/courses';
import { useRouter } from 'next/navigation';
import Loader from '@components/UI/Loader';
import { enqueueSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';

const Course = ({ course }: { course?: ICourse }): JSX.Element | null => {
  const router = useRouter();
  const isNewCourse = !course;

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ICourse>();

  const handleCreateCourse = async (newCourse: ICourse) => {
    setLoading(true);
    await createCourse(newCourse);
    setLoading(false);
    enqueueSnackbar('Course Created');
    router.replace('/admin/courses');
    reset();
  }

  const handleUpdateCourse = async (updatedCourse: ICourse) => {
    setLoading(true);
    await updateCourse(updatedCourse)
    setLoading(false);
    enqueueSnackbar('Course Updated');
    router.replace('/admin/courses');
  }

  const handleDeleteCourse = async () => {
    if (!course) return;
    setOpenDeleteModal(false);
    setLoading(true);
    await deleteCourse(course.id);
    setLoading(false);
    enqueueSnackbar('Course Deleted');
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
          <Button fill onClick={isNewCourse ? handleSubmit(handleCreateCourse) : handleSubmit(handleUpdateCourse)}>
            {isNewCourse ? 'Create Course' : 'Save Course'}
          </Button>
        </div>
      </div>
      <form action="">
        <Input
          label='Course Name'
          name="name"
          inputProps={{
            type: 'text',
          }}
          register={{ ...register('name', { required: true, value: course?.name }) }}
          error={errors.name?.type === 'required' ? 'First name is required' : undefined}
        />
        <Input
          label='Price'
          name="price"
          inputProps={{
            type: 'number',
          }}
          register={{ ...register('price', { required: true, value: course?.price }) }}
          error={errors.price?.type === 'required' ? 'Price is required' : undefined}
        />
        <TextArea
          label='Objective'
          name="objective"
          textareaProps={{ required: true, rows: 4 }}
          register={{ ...register('objective', { required: true, value: course?.objective }) }}
          error={errors.objective?.type === 'required' ? 'Objective is required' : undefined}
        />
        <TextArea
          label='Description'
          name="description"
          textareaProps={{ rows: 5 }}
          register={{ ...register('description', { required: true, value: course?.objective }) }}
          error={errors.description?.type === 'objective' ? 'Description is required' : undefined}
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
      <Loader open={loading} />
    </div>
  );
};

export default Course;
