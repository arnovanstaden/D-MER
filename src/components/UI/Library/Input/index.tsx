// Styles
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './styles.module.scss';

interface IProps {
  type: HTMLInputElement['type'];
  name: string;
  label?: string;
  register: UseFormRegisterReturn,
}

const Input = (props: IProps): JSX.Element | null => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        required
        {...props.register}
      />
    </div>
  );
};

export default Input;
