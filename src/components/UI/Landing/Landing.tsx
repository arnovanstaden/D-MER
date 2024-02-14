import Container from '../Library/Container/Container';
import Button from '../Library/Button/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './landing.module.scss';
import Image from 'next/image';

interface IProps {
  image: string;
  children: React.ReactNode;
  withCTA?: boolean;
}

const Landing = ({ children, image, withCTA = true }: IProps) => (
  <section className={styles.landing}>
    <div className={styles.image}>
      <Image
        src={image}
        alt="Diver"
        priority
      />
    </div>
    <div className={styles.overlay}></div>
    <Container>
      <div className={styles.content}>
        {children}
        {withCTA && (
          <>
            <hr />
            <Button icon link="/courses/book">
              Online Courses
            </Button></>

        )}
      </div>
    </Container>
    <div className={styles.social}>
      <a href="https://www.facebook.com/DMERWorldwide/" target="blank">
        <FacebookIcon />
      </a>
      <a href="https://www.linkedin.com/feed/" target="blank">
        <LinkedInIcon />
      </a>
    </div>
  </section>
)

export default Landing
