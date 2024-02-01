import ClassNames from 'classnames'

// Components
import Container from '../Library/Container/Container';

// Styles
import styles from './section.module.scss';

interface IProps {
    children: React.ReactNode;
    className?: string;
    heading?: React.ReactChild;
    reverse?: boolean;
    keywords?: string;
}

const Section = ({ children, heading, reverse, keywords, className }: IProps) => {

    const classes = ClassNames(
        styles.section,
        className,
        reverse ? styles.reverse : null
    )

    return (
        <section className={classes}>
            <div className={styles.keywords}>
                <p>{keywords}</p>
            </div>
            <Container>
                <div className={styles.grid}>
                    <div className={styles.heading}>
                        {heading}
                    </div>
                    <div className={styles.content}>
                        {children}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Section
