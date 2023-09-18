import { useRouter } from "next/router";

// Components
import Container from "../Library/Container/Container";
import NextImage from "../Library/NextImage/NextImage";
import Button from "../Library/Button/Button";

// Styles
import styles from "./landing.module.scss";

interface IProps {
  image: string;
  children: React.ReactNode;
}

const Landing = ({ children, image }: IProps) => {

  // Config
  const router = useRouter()

  return (
    <section className={styles.landing}>
      <div className={styles.image}>
        <NextImage
          src={image}
          alt="Diver"
          background
          priority
        />
      </div>
      <div className={styles.overlay}></div>
      <Container>
        <div className={styles.content}>
          {children}
          <hr />
          {router.pathname === "/shop"
            ? <Button icon link="/cart">
              Your Cart
            </Button>
            : <Button icon link="/courses#book">
              Online Courses
            </Button>
          }
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
