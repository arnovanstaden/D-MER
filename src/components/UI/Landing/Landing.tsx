'use client';

import { usePathname } from 'next/navigation';

// Components
import Container from '../Library/Container/Container';
import NextImage from '../Library/NextImage/NextImage';
import Button from '../Library/Button/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Styles
import styles from './landing.module.scss';

interface IProps {
  image: string;
  children: React.ReactNode;
  withCTA?: boolean;
}

const Landing = ({ children, image, withCTA = true }: IProps) => {

  // Config
  const pathname = usePathname() as string;

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
}

export default Landing
