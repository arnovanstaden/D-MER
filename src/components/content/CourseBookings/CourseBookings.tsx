'use client';

import { IBooking, ICoupon, ICourse } from '@types';
import { useRef, useState, useEffect } from 'react';

// Components
import Container from '../../Layout/Container/Container'
import Button from '../../UI/Button/Button'

// Style
import styles from './CourseBookings.module.scss';
import Checkbox from '../../UI/Checkbox';
import Loader from '@components/UI/Loader';
import { getCouponByCode } from '@lib/coupons';
import { enqueueSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import Input from '@components/UI/Input';
import { createBooking } from '@lib/bookings';

interface CourseProps {
  course: ICourse;
  handleTick: (id: string) => void;
  checked: boolean;
}

const Course: React.FC<CourseProps> = ({ course, handleTick, checked }) => {
  return (
    <div className={styles.course}>
      <div className={styles.text}>
        <h5>{course.name}</h5>
        <p>{course.objective}</p>
      </div>
      <div className={styles.price}>
        <p>$ {course.price}</p>
      </div>
      <div className={styles.check}>
        <Checkbox
          onChange={() => handleTick(course.id)}
          checked={checked}
        />
      </div>
    </div>
  )
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  country: string;
};

const CourseBookings: React.FC<{ courses: ICourse[] }> = ({ courses }) => {
  // Config
  const couponRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  // State
  const [coupon, setCoupon] = useState<ICoupon>()
  const [total, setTotal] = useState<number>(0)
  const [ticked, setTicked] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false);

  const handleTick = (id: string) => {
    setTicked((prev) => {
      if (!prev.includes(id)) {
        return [...prev, id]
      }
      return prev.filter((prevId) => prevId !== id);
    })
  }

  // Handlers
  const handleCouponVerification = async (e: Event) => {
    enqueueSnackbar('Validating Coupon. Hang tight...');
    e.preventDefault();
    const code = couponRef.current.value.trim();

    if (code === '') {
      return enqueueSnackbar('Please enter a valid coupon code');
    }

    setLoading(true);
    enqueueSnackbar('Validating Coupon. Hang tight...');
    const couponData = await getCouponByCode(code);
    setLoading(false);

    if (!couponData) {
      enqueueSnackbar('Coupon is Invalid');
      couponRef.current.value = '';
      return;
    }

    if (couponData.expiry < new Date()) {
      enqueueSnackbar('Coupon is Expired');
      couponRef.current.value = '';
      return;
    }

    if (couponData.redeemed) {
      enqueueSnackbar('Coupon already redeemed');
      couponRef.current.value = '';
      return;
    }

    setCoupon(couponData)
    enqueueSnackbar('Coupon Validated Successfully');
  }

  const handleSubmitBooking = async (bookingData: FormData) => {
    const booking: Omit<IBooking, 'id'> = {
      ...bookingData,
      date: new Date(),
      courses: ticked,
      total,
      ...(coupon && { coupon: coupon.code }),
    }

    setLoading(true);
    enqueueSnackbar('Booking Course. Hang tight...');
    try {
      await createBooking(booking);
      enqueueSnackbar('Thank you for your course booking. You will receive a confirmation email with a payment link soon!');
      reset();
    } catch (e) {
      console.error(e)
      enqueueSnackbar('Oops... Something went wrong with your booking. Please try again');
    } finally {
      setLoading(false);
    }
  }

  const handleUpdateTotal = (): number => {
    let total = 0;
    ticked && ticked.forEach(item => {
      const course = courses.find(course => course.id === item)
      if (course) {
        total += course.price
      }
    })

    if (coupon) {
      total = Math.round(total * ((100 - coupon.discount) / 100))
      return total
    }
    return total
  }

  useEffect(() => {
    setTotal(handleUpdateTotal())
  }, [ticked, coupon])

  return (
    <section className={styles.bookings}>
      <Container>
        <div className={styles.heading}>
          <h2>Book <span>Online Courses</span></h2>
          <p>Please select the courses you would like to book</p>
        </div>
        <div className={styles.grid}>
          {courses.map((course, index) => (
            <Course
              course={course}
              key={index}
              handleTick={handleTick}
              checked={ticked.includes(course.id)}
            />
          ))}
        </div>

        <form className={styles.form} onSubmit={handleSubmit(handleSubmitBooking)}>
          <div className={styles.contact}>
            <h4>Your <span>Details</span></h4>
            <div className={styles.grid}>
              <div className={styles.row}>
                <Input
                  inputProps={{
                    type: 'text',
                    autoComplete: 'name'
                  }}
                  name='name'
                  register={{ ...register('name', { required: true }) }}
                  label="Full Name"
                  error={errors.name?.type === 'required' ? 'First name is required' : undefined}
                />
              </div>
              <div className={styles.row}>
                <Input
                  inputProps={{
                    type: 'email',
                    autoComplete: 'email'
                  }}
                  name='email'
                  register={{ ...register('email', { required: true }) }}
                  label="Email"
                  error={errors.email?.type === 'required' ? 'Email is required' : undefined}
                />
              </div>
              <div className={styles.row}>
                <Input
                  inputProps={{
                    type: 'phone',
                    autoComplete: 'phone'
                  }}
                  name='email'
                  register={{ ...register('phone', { required: true }) }}
                  label="Phone"
                  error={errors.phone?.type === 'required' ? 'Phone is required' : undefined}
                />
              </div>
              <div className={styles.row}>
                <Input
                  inputProps={{
                    type: 'text',
                    autoComplete: 'country'
                  }}
                  name='country'
                  register={{ ...register('country', { required: true }) }}
                  label="Country"
                  error={errors.country?.type === 'required' ? 'Country is required' : undefined}
                />
              </div>
            </div>
          </div>
          <div className={styles.paymentDetails}>
            <h4><span>Payment</span></h4>
            <p>After a successful booking, you'll receive a confirmation email with a link to Paypal where you can securely pay for your course in USD ($).</p>
            <p>Please use your Full Name and Course as payment reference</p>
            <div className={styles.amount}>
              <h5>Total Amount :</h5>
              <p>$ {total}</p>
            </div>
            <div className={styles.coupon}>
              <div className={styles.row}>
                <label>Coupon Code:</label>
                <input type="text" name="coupon-code" ref={couponRef} />
              </div>
              <Button onClick={handleCouponVerification}>
                Apply Code
              </Button>
            </div>
          </div>
          <div className={styles.submit}>
            <Button fill disabled={ticked.length < 1}>
              Submit Booking
            </Button>
          </div>
        </form>
      </Container>
      <Loader open={loading} />
    </section >
  )
}

export default CourseBookings
