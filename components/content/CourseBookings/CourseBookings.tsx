import { ICourse } from "../../../utils/interfaces";
import { useRef, useState } from "react";
import toaster from "toasted-notes";
import axios from "axios"

// Components
import Container from "../../UI/Library/Container/Container"
import Button from "../../UI/Library/Button/Button"
import Checkbox from '@bit/mui-org.material-ui.checkbox';

// Style
import styles from "./bookings.module.scss";

const CourseBookings = ({ courses }: { courses: ICourse[] }) => {
    // Config
    const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
    const couponRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    // State
    const [coupon, setCoupon] = useState(undefined)

    // Handlers
    const handleCouponVerification = (e: Event) => {
        e.preventDefault();
        const code = couponRef.current.value.trim();
        if (code === "") {
            return toaster.notify("Please enter a valid coupon code");
        }
        toaster.notify("Validating Code. Hang tight...");
        axios({
            method: "post",
            url: `${process.env.NEXT_PUBLIC_API_URL}/coupons/validate`,
            data: {
                code
            }
        }).then(result => {
            toaster.notify(result.data.message);
            setCoupon({
                discount: result.data.discount,
                code: result.data.code
            })
        })
            .catch(err => {
                console.log(err)
                toaster.notify(err.response.data.message);
            })
    }

    const handleSubmitBooking = (e: Event) => {
        e.preventDefault();
        const form = formRef.current

        if (form.checkValidity() === false) {
            return toaster.notify("Please fill in all the required fields correctly.");
        }

        let enquiry: any = {}
        const formData = new FormData(form);
        formData.forEach((value, key) => enquiry[key] = value);

        axios({
            method: "POST",
            url: `${process.env.NEXT_PUBLIC_API_URL}/enquiry/contact`,
            data: enquiry
        })
            .then(result => {
                form.reset()
                toaster.notify("Thank you for your message. We'll get back to you soon!");
            })
            .catch(err => console.log(err))
    }



    const Course = (course: ICourse) => {
        return (
            <div className={styles.course}>
                <div className={styles.text}>
                    <h5>{course.name}</h5>
                    <p>{course.objective}</p>
                </div>
                <div className={styles.price}>
                    <p>R {course.price}</p>
                </div>
                <div className={styles.check}>
                    <Checkbox

                    />
                </div>
            </div>
        )
    }

    return (
        <section className={styles.bookings}>
            <i className="icon-clear"></i>
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
                        <h4><span>Payment</span> Details</h4>
                        <ul>
                            <li><span>Bank:</span> ABSA Bank</li>
                            <li><span>Sort Code:</span> 632 005</li>
                            <li><span>Account Number:</span> 405 - 119 - 0044</li>
                            <li><span>SWIFT code:</span> 7ABSAZAJJXXX</li>
                            <li><span>Reference :</span> FIRST NAME/SURNAME/COURSE</li>
                            <li><span>Amount :</span>
                                {/* <p className={styles.total}
                                        id="booking-total"
                                    >
                                        {selectedCourse ?
                                            `R ${selectedCourse.price - (coupon ? selectedCourse.price * (coupon.discount / 100) : 0)}`
                                            : "Select Course"}
                                    </p> */}
                            </li>

                        </ul>
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
                    <div className={styles.pop}>
                        <label htmlFor="Proof of Payment">Proof of Payment</label>
                        <input type="file" name="Proof of Payment" id="ProofOfPayment" required accept="application/pdf" />
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
