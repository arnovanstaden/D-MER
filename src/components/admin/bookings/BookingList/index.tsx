import { getBookingsList } from '@lib/bookings';
import styles from './styles.module.scss';
import Booking from '../Booking';

const BookingList = async () => {
  const bookings = await getBookingsList();

  return (
    bookings.length === 0
      ? <p>You have no bookings</p>
      : (
        <ul className={styles.BookingList}>
          {bookings.map((booking) => <Booking key={booking.id} {...booking} />)}
        </ul>
      )
  );
};

export default BookingList;
