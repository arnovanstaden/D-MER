import Link from 'next/link';
import ClassNames from 'classnames';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './button.module.scss';

interface IProps {
  link?: string;
  children: string;
  icon?: boolean;
  onClick?: any;
  fill?: boolean;
  className?: string;
  disabled?: boolean;
}

const Button = ({ link, children, icon, onClick, fill, className, disabled }: IProps) => {
  const classes = ClassNames(
    styles.button,
    className,
    fill ? styles.fill : null
  )

  const Inner = () => {
    return (
      <button className={classes} onClick={onClick} disabled={disabled}>
        {children}
        {icon ? <ArrowForwardIcon className={styles.icon} /> : null}
      </button>
    )
  }

  if (link) {
    return (
      <Link href={link}>
        <Inner />
      </Link>
    )
  }

  return (
    <Inner />
  )
}

export default Button
