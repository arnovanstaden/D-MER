// Styles
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './styles.module.scss';
import { ReactPropTypes } from 'react';

interface IProps {
  name: string;
  label?: string;
  register: UseFormRegisterReturn,
  inputProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>
}

const TextArea = (props: IProps): JSX.Element | null => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        {...props.register}
        {...props.inputProps}
      />
    </div>
  );
};

export default TextArea;
