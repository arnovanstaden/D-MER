import { getBookingsList } from '@lib/bookings';
import styles from './styles.module.scss';
import Booking from '../Booking';

const BookingList = async () => {
  const bookings = await getBookingsList();

  return (
    <ul className={styles.BookingList}>
      {bookings.map((booking) => <Booking key={booking.id} {...booking} />)}
    </ul>
  );
};

export default BookingList;
