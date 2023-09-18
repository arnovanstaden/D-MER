import Link from "next/link";
import ClassNames from "classnames";

import styles from "./button.module.scss";

interface IProps {
  link?: string;
  children: string;
  icon?: boolean;
  onClick?: any;
  fill?: boolean;
}

const Button = ({ link, children, icon, onClick, fill }: IProps) => {

  const classes = ClassNames(
    styles.button,
    fill ? styles.fill : null
  )

  const Inner = () => {
    return (
      <button className={classes} onClick={onClick}>
        {children}
        {icon ? <i className="icon-arrow-right" /> : null}
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
