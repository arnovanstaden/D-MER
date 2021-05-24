import ClassNames from "classnames"

// Components
import Container from "../Library/Container/Container";

// Styles
import styles from "./section.module.scss";

interface IProps {
    children: React.ReactNode;
    heading: React.ReactChild;
    reverse?: boolean;
    keywords: string;
}

const Section = (props: IProps) => {

    const classes = ClassNames(
        styles.section,
        props.reverse ? styles.reverse : null
    )

    return (
        <section className={classes}>
            <div className={styles.keywords}>
                <p>{props.keywords}</p>
            </div>
            <Container>
                <div className={styles.grid}>
                    <div className={styles.heading}>
                        {props.heading}
                    </div>
                    <div className={styles.content}>
                        {props.children}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Section
