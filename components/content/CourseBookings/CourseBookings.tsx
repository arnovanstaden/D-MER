import { ICourse } from "../../../utils/interfaces";
import { useRef, useState, useEffect } from "react";
import axios from "axios"
import { toast } from 'react-toastify';

// Components
import Container from "../../UI/Library/Container/Container"
import Button from "../../UI/Library/Button/Button"

// Style
import styles from "./bookings.module.scss";
import Checkbox from '../../UI/Checkbox';

interface IProps {
  courses: ICourse[],
  toggle: () => void,
  show: boolean,
  ticked?: string[],
  handleTick: (course_id: string) => void
}

interface ICoupon {
  discount: number;
  code: string;
}

const CourseBookings = ({ courses, toggle, show, ticked, handleTick }: IProps) => {
  // Config
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const couponRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  // State
  const [coupon, setCoupon] = useState<ICoupon>()
  const [total, setTotal] = useState<number>(handleUpdateTotal())

  useEffect(() => {
    setTotal(handleUpdateTotal())
  }, [ticked, coupon])

  // Handlers
  const handleCouponVerification = (e: Event) => {
    e.preventDefault();
    const code = couponRef.current.value.trim();
    if (code === "") {
      return toast("Please enter a valid coupon code");
    }
    toast("Validating Code. Hang tight...");
    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}/coupons/validate`,
      data: {
        code
      }
    }).then(result => {
      toast(result.data.message);
      setCoupon({
        discount: result.data.discount,
        code: result.data.code
      })
    })
      .catch(err => {
        console.log(err)
        toast(err.response.data.message);
      })
  }

  const handleSubmitBooking = (e: Event) => {
    e.preventDefault();
    const form = formRef.current

    if (form.checkValidity() === false) {
      return toast("Please fill in all the required fields correctly.");
    }

    let booking: any = {}
    let prevFormData = new FormData(form);
    prevFormData.forEach((value, key) => booking[key] = value);

    // Add
    if (coupon) {
      booking['coupon-code'] = coupon;
      booking["Coupon Discount"] = `${coupon.discount}%`;
    }
    booking.Total = total;
    const bookedCourses = ticked!.map(item => {
      const course = courses.find(course => course._id === item)
      if (course) {
        return `${course.name}`
      }
    })
    booking["Course(s)"] = bookedCourses.join("; ")

    toast("Booking Course. Hang tight...");

    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}/courses/book`,
      data: booking,
    })
      .then(result => {
        form.reset();
        toast("Thank you for your course booking. You will receive a confirmation email with a payment link soon!");
        toggle()
        setCoupon(undefined)
      })
      .catch(err => console.log(err))
  }

  function handleUpdateTotal(): number {
    let total = 0;
    ticked && ticked.forEach(item => {
      const course = courses.find(course => course._id === item)
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

  const Course = (course: ICourse) => {
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
            onChange={() => handleTick(course._id)}
            checked={ticked!.includes(course._id)}
          />
        </div>
      </div>
    )
  }

  if (!show) {
    return null
  }

  return (
    <section className={styles.bookings}>
      <i className="icon-clear" onClick={toggle}></i>
      <Container>
        <div className={styles.heading}>
          <h2>Book <span>Courses</span></h2>
          <p>Please select the courses you would like to book</p>
        </div>
        <div className={styles.grid}>
          {courses.map((course, index) => (
            <Course {...course} key={index} />
          ))}
        </div>

        <form className={styles.form} ref={formRef}>
          <div className={styles.contact}>
            <h4>Your <span>Details</span></h4>
            <div className={styles.grid}>
              <div className={styles.row}>
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" required />
              </div>
              <div className={styles.row}>
                <label htmlFor="Email">Email</label>
                <input type="email" name="Email" required />
              </div>
              <div className={styles.row}>
                <label htmlFor="Phone">Phone</label>
                <input type="phone" name="Phone" required />
              </div>
              <div className={styles.row}>
                <label htmlFor="Country">Country</label>
                <input type="text" name="Country" required />
              </div>
            </div>
          </div>
          <div className={styles.paymentDetails}>
            <h4><span>Payment</span></h4>
            <p>After a successful booking, you'll receive a confirmation email with a link to Paypal where you can securely pay for your course in USD ($).</p>
            <p>Please use your Full Name and Course as payment reference</p>
            <div className={styles.amount}>
              <h5>Total Amount :</h5>
              <p>R {total}</p>
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
            <Button fill onClick={handleSubmitBooking}>
              Submit Booking
            </Button>
          </div>
        </form>
      </Container>
    </section >
  )
}

export default CourseBookings
