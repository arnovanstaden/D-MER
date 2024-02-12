'use server';

import { ICourse } from '@types';
import { addFirestoreDocument, deleteFirestoreDocument, getFirestoreDocument, getFirestoreDocumentCollection, updateFirestoreDocument } from './firestore';
import { revalidatePath } from 'next/cache';

export const getCourse = async (id: string): Promise<ICourse | undefined> => await getFirestoreDocument<ICourse>('courses', id);

export const getCourseList = async (): Promise<ICourse[]> => await getFirestoreDocumentCollection<ICourse>('courses');

export const createCourse = async (course: ICourse): Promise<void> => {
  const { id, ...newCourse } = course;
  await addFirestoreDocument<Omit<ICourse, 'id'>>('courses', newCourse);
  revalidatePath('/admin/courses');
  revalidatePath('/courses');
  revalidatePath('/courses/book');
}

export const updateCourse = async (updatedCourse: ICourse): Promise<void> => {
  await updateFirestoreDocument('courses', updatedCourse.id, updatedCourse);
}

export const deleteCourse = async (id: string): Promise<void> => {
  await deleteFirestoreDocument('courses', id);
  revalidatePath('/admin/courses', 'page');
}