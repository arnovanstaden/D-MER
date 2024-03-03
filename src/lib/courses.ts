/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';

import { ICourse } from '@types';
import { addFirestoreDocument, deleteFirestoreDocument, getFirestoreDocument, getFirestoreDocumentCollection, updateFirestoreDocument } from './firestore';
import { revalidatePath } from 'next/cache';

export const getCourse = async (id: string): Promise<ICourse | undefined> => await getFirestoreDocument<ICourse>('courses', id);

export const getCourseList = async (filterDeleted = true): Promise<ICourse[]> => {
  const courses = await getFirestoreDocumentCollection<ICourse>('courses');
  if (filterDeleted) {
    return courses.filter(course => !course.deleted);
  }

  return courses;
}

export const createCourse = async (course: Omit<ICourse, 'id'>): Promise<void> => {
  await addFirestoreDocument<Omit<ICourse, 'id'>>('courses', {
    ...course,
    deleted: false,
  });
  revalidatePath('/admin/courses');
  revalidatePath('/courses');
  revalidatePath('/courses/book');
}

export const updateCourse = async (updatedCourse: ICourse): Promise<void> => {
  await updateFirestoreDocument('courses', updatedCourse.id, updatedCourse);
  revalidatePath('/admin/courses');
  revalidatePath('/courses');
  revalidatePath('/courses/book');
}

export const deleteCourse = async (course: ICourse): Promise<void> => {
  await updateFirestoreDocument('courses', course.id, {
    ...course,
    deleted: true,
  });
  revalidatePath('/admin/courses');
  revalidatePath('/courses');
  revalidatePath('/courses/book');
}