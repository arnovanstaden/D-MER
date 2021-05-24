
// Styles
import styles from "./landing.module.scss";

interface IProps {
    text: string;
    image: string;
}

const Landing = ({ text, image }: IProps) => {
    return (
        <section className={styles.landing}>

        </section>
    )
}

export default Landing
