import { getBookingsList } from '@lib/bookings';
import styles from './styles.module.scss';
import Booking from '../Booking';
import { getCourseList } from '@lib/courses';
import { IBooking } from '@types';

const BookingList = async () => {
  const bookings = await getBookingsList();
  const courses = await getCourseList(false);
  const coursesForBooking = (booking: IBooking) => courses.filter((course) => booking.courses.includes(course.id));

  return (
    bookings.length === 0
      ? <p>You have no bookings</p>
      : (
        <ul className={styles.BookingList}>
          {bookings.map((booking) => <Booking key={booking.id} booking={booking} courses={coursesForBooking(booking)} />)}
        </ul>
      )
  );
};

export default BookingList;
