import Link from 'next/link';

// Components
import Container from '../Container/Container'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Styles
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Link href="/">
              <img src="/images/logos/Dmer-Logo.svg" alt="D-MER Logo" />
            </Link>
          </div>
          <div className={styles.content}>
            <ul className={styles.menu}>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/courses">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className={styles.social}>
              <a href="https://www.facebook.com/DMERWorldwide/" target="blank">
                <FacebookIcon />
              </a>
              <a href="https://www.linkedin.com/feed/" target="blank">
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className={styles.copy}>
            <p>© 2021 - D-MER Worldwide</p>
            <a href="/documents/D-MER - POPIA and PAIA Privacy Policy.pdf" target="download" className={styles.privacy}>Privacy Policy</a>
            <p>Design &amp; Development by <a href="https://webdacity.dev/" target="blank">Webdacity</a></p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
