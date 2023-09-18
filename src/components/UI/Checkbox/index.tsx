import classNames from 'classnames';
import styles from './styles.module.scss';

const Checkbox = ({ checked, onChange }: {
  onChange: () => void,
  checked: boolean,
}): JSX.Element => {
  const classes = classNames(
    styles.checkbox,
    {
      [styles.checked]: checked,
    }
  )
  return (
    <div className={classes} onClick={onChange}>
      {checked && <img src='/images/icons/check.svg' alt="" />}
    </div >
  );
};

export default Checkbox;
