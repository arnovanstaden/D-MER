import { IBooking } from '@types';
import { addFirestoreDocument, getFirestoreDocumentCollection } from './firestore';
import { revalidatePath } from 'next/cache';

export const getBookingsList = async (): Promise<IBooking[]> => await getFirestoreDocumentCollection<IBooking>('bookings');

export const createBooking = async (booking: Omit<IBooking, 'id'>): Promise<void> => {
  await addFirestoreDocument<Omit<IBooking, 'id'>>('bookings', booking);
  revalidatePath('/admin/bookings')
} 