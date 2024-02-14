import styles from './styles.module.scss';
import Link from 'next/link';
import Button from '@components/UI/Button/Button';
import { getCourseList } from '@lib/courses';

const CourseList: React.FC = async () => {
  const courses = await getCourseList();

  return (
    <div className={styles.CourseList}>
      <div className={styles.actions}>
        <Button link='/admin/courses/create'>
          Create Course
        </Button>
      </div>
      <ul className={styles.list}>
        {courses.map((course) => (
          <Link key={course.id} href={`/admin/courses/${course.id}`}>
            <li className={styles.item}>
              <p>{course.name}</p>
              <p>$ {course.price}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
