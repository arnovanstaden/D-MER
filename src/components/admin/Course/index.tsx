import Input from '@components/UI/Library/Input';
import styles from './styles.module.scss';
import TextArea from '@components/UI/Library/TextArea';
import Button from '@components/UI/Library/Button/Button';

const Course = (): JSX.Element | null => {
  const course = {
    _id: '60ae7165adc08e5cfc2081a1',
    name: 'DMAC 11 First Aid for the Commercial Dive Team CPD',
    objective: 'Provision of first aid and the training of divers, supervisors and members of dive teams in first aid.\n\nThis is a CPD course to refresh your first aid theory',
    description: 'Commercial diving exposes divers to a variety of hazards specific to their work in addition to many hazards shared with other workers. While these hazards can be well controlled by adherence to good working practices, the potential for serious injury remains. As a result there is a requirement for contingency planning for medical emergencies caused both by accident and illness occurring during diving operations. Fist Aid is the first step !',
    price: 90,
  };

  return (
    <div className={styles.Course}>
      <div className={styles.actions}>
        <Button>
          Delete Course
        </Button>
        <Button fill>
          Save Course
        </Button>
      </div>
      <form action="">
        <Input label='Course Name' name="name" inputProps={{ required: true }} />
        <Input label='Price' name="price" inputProps={{ required: true }} />
        <TextArea label='Objective' name="objective" inputProps={{ required: true, rows: 2 }} />
        <TextArea label='Description' name="description" inputProps={{ required: true, rows: 5 }} />
      </form>
    </div>
  );
};

export default Course;
