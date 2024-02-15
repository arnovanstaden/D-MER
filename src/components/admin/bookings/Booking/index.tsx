'use client';

import { IBooking } from '@types';
import styles from './styles.module.scss';
import { useState } from 'react';
import Link from 'next/link';

interface IProps {
  booking: IBooking;
  courses: {
    id: string;
    name: string;
  }[];
}

const Booking: React.FC<IProps> = ({ booking, courses }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <li className={styles.Booking} onClick={() => setExpanded(true)}>
      <div className={styles.top}>
        <p>{booking.name}</p>
        <p>{new Date(booking.date).toISOString().slice(0, 10)}</p>
        <p>$ {booking.total}</p>
      </div>
      {expanded && (
        <div className={styles.expanded}>
          <p><b>Email: </b>
            <a target="_blank" href={`mailto:${booking.email}`}>{booking.email}</a>
          </p>
          <p><b>Phone: </b>
            <a target="_blank" href={`tel:${booking.phone}`}>{booking.phone}</a>
          </p>
          <p><b>Country: </b> {booking.country} </p>
          <p><b>Coupon Used: </b> {!!booking.coupon ? 'True' : 'False'} </p>
          <p><b>Courses: </b>
            <ul className={styles.courses}>
              {courses.map((course) => (
                <li key={course.id}>
                  <Link target="_blank" href={`/admin/courses/${course.id}`}>
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </p>
        </div>
      )}
    </li>
  );
};

export default Booking;
