import Link from "next/link";

import styles from "./button.module.scss";

interface IProps {
    link?: string;
    children: string;
    icon?: boolean
}

const Button = ({ link, children, icon }: IProps) => {

    const Inner = () => {
        return (
            <button className={styles.button}>
                {children}
                {icon ? <i className="icon-arrow-right" /> : null}
            </button>
        )
    }

    if (link) {
        <Link href={link}>
            <Inner />
        </Link>
    }

    return (
        <Inner />
    )
}

export default Button
