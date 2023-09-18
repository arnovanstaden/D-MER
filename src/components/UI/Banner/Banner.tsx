import { Parallax } from 'react-parallax';
import ClassNames from 'classnames';
import Container from '../Library/Container/Container';
import styles from './banner.module.scss';

interface IProps {
  image: string;
  children: React.ReactNode;
  reverse?: boolean
}

const Banner = ({ children, image, reverse }: IProps) => {
  const classes = ClassNames(
    styles.banner,
    reverse ? styles.reverse : null
  )
  return (
    <section className={classes}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </Container>
      <div className={styles.overlay}>            </div>
    </section>
  )
}

export default Banner
