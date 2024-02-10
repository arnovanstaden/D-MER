import { CourseProps } from '@types';


// Components
import Button from '../../UI/Library/Button/Button'

// Styles
import styles from './course.module.scss';
import Link from 'next/link';

interface Props {
  course: CourseProps,
  toggle: () => any
}


const Course: React.FC<Props> = ({ course, toggle }) => {
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
          <p>$ {course.price}</p>
        </div>
        <div className={styles.button}>
          <Link href="/courses/book">
            <Button>Book</Button>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Course;
