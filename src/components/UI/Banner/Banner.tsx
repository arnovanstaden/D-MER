import ClassNames from 'classnames';
import Container from '../../Layout/Container/Container';
import styles from './banner.module.scss';
import Image from 'next/image';

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
      <Image
        src={image}
        alt="Parallax Image"
        className={styles.image}
        fill
      />
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
