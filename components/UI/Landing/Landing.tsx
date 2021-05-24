// Components
import Container from "../Library/Container/Container";
import NextImage from "../NextImage/NextImage";
import Button from "../Library/Button/Button";

// Styles
import styles from "./landing.module.scss";

interface IProps {
    image: string;
    children: React.ReactNode;
}

const Landing = ({ children, image }: IProps) => {
    return (
        <section className={styles.landing}>
            <div className={styles.image}>
                <NextImage
                    src={image}
                    alt="Diver"
                    width={1920}
                    background
                    priority
                />
            </div>
            <div className={styles.overlay}></div>
            <Container>
                <div className={styles.content}>
                    {children}
                    <hr />
                    <Button icon>
                        Book a Course
                    </Button>
                </div>
            </Container>
            <div className={styles.social}>
                <a href="https://www.facebook.com/DMERWorldwide/" target="blank">
                    <i className="icon-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/feed/" target="blank">
                    <i className="icon-linkedin"></i>
                </a>
            </div>
        </section>
    )
}

export default Landing
