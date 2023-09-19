import { ICourse } from '@types';
import styles from './styles.module.scss';
import Link from 'next/link';
import Button from '@components/UI/Library/Button/Button';

const CourseList = (): JSX.Element | null => {
  const courses: ICourse[] = [{
    _id: '60ae7165adc08e5cfc2081a1',
    name: 'DMAC 11 First Aid for the Commercial Dive Team CPD',
    objective: 'Provision of first aid and the training of divers, supervisors and members of dive teams in first aid.\n\nThis is a CPD course to refresh your first aid theory',
    description: 'Commercial diving exposes divers to a variety of hazards specific to their work in addition to many hazards shared with other workers. While these hazards can be well controlled by adherence to good working practices, the potential for serious injury remains. As a result there is a requirement for contingency planning for medical emergencies caused both by accident and illness occurring during diving operations. Fist Aid is the first step !',
    price: 90,
  }];

  return (
    <div className={styles.CourseList}>
      <div className={styles.actions}>
        <Button link='/admin/courses/create'>
          Create Course
        </Button>
      </div>
      <ul className={styles.list}>
        {courses.map((course) => (
          <Link key={course._id} href={`/admin/courses/${course._id}`}>
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
