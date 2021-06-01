import { ICourse } from "../../../utils/interfaces";


// Components
import Button from "../../UI/Library/Button/Button"

// Styles
import styles from "./course.module.scss";


const Course = ({ course, toggle }: { course: ICourse, toggle: () => any }) => {
    return (
        <article className={styles.course}>
            <div className={styles.image}>
                <img src="/images/logos/Dmer-Logomark.svg" alt="" />
            </div>
            <div className={styles.content}>
                <h3>{course.name}</h3>

                <div className={styles.row}>
                    <h5>Objective</h5>
                    <p>{course.objective}</p>
                </div>
                <div className={styles.row}>
                    <h5>Description</h5>
                    <p>{course.description}</p>
                </div>
                <div className={`${styles.row} ${styles.price}`}>
                    <h5>Price</h5>
                    <p>R {course.price}</p>
                </div>
                <div className={styles.button}>
                    <Button icon onClick={toggle}>Book</Button>
                </div>
            </div>
        </article>
    )
}

export default Course
