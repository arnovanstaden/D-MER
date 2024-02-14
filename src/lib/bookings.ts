'use server';

import { IBooking } from '@types';
import { addFirestoreDocument, getFirestoreDocumentCollection } from './firestore';
import { revalidatePath } from 'next/cache';
import { expireCoupon } from './coupons';
import { sendEmail } from './email/server';
import { buildCourseBookingEmailMerchant, buildCourseBookingEmailUser } from './email/client';

export const getBookingsList = async (): Promise<IBooking[]> => await getFirestoreDocumentCollection<IBooking>('bookings');

export const createBooking = async (booking: Omit<IBooking, 'id'>): Promise<void> => {
  await addFirestoreDocument<Omit<IBooking, 'id'>>('bookings', booking);
  if (booking.coupon) {
    expireCoupon(booking.coupon)
  }

  // Merchant Email
  await sendEmail({
    subject: 'Website Course Booking',
    body: buildCourseBookingEmailMerchant(booking),
  });

  await sendEmail({
    subject: 'D-MER Course Booking',
    body: buildCourseBookingEmailUser(booking),
    recipient: booking.email,
  });
  revalidatePath('/admin/bookings')
} 