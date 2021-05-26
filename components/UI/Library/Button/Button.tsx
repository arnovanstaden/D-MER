import Link from "next/link";

import styles from "./button.module.scss";

interface IProps {
    link?: string;
    children: string;
    icon?: boolean;
    onClick?: any;
}

const Button = ({ link, children, icon, onClick }: IProps) => {

    const Inner = () => {
        return (
            <button className={styles.button} onClick={onClick}>
                {children}
                {icon ? <i className="icon-arrow-right" /> : null}
            </button>
        )
    }

    if (link) {
        return (
            <Link href={link}>
                <a>
                    <Inner />
                </a>
            </Link>
        )
    }

    return (
        <Inner />
    )
}

export default Button
