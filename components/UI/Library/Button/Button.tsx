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
