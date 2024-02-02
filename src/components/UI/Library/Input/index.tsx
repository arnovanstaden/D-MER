// Styles
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './styles.module.scss';
import { ReactPropTypes } from 'react';
import { ICourse } from '@types';

interface IProps {
  name: string;
  label?: string;
  register?: UseFormRegisterReturn,
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>,
  value: string | number;
  onChange?: (newValue: number | string) => void;
}

const Input = (props: IProps): JSX.Element | null => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        value={props.value}
        onChange={(e) => props.onChange ? props.onChange(e.target.value) : undefined}
        {...props.register}
        {...props.inputProps}
      />
    </div>
  );
};

export default Input;
