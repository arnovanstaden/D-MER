import { IBooking } from '@types';
import { getFirestoreDocumentCollection } from './firestore';

export const getBookingsList = async (): Promise<IBooking[]> => await getFirestoreDocumentCollection<IBooking>('bookings');

