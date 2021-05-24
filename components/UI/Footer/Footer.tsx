import Link from "next/link";

// Components
import Container from "../Library/Container/Container"

// Styles
import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <a>
                                <img src="/images/logos/Dmer-Logo.svg" alt="D-MER Logo" />
                            </a>
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
                                <Link href="/shop">
                                    Shop
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
                                <i className="icon-facebook"></i>
                            </a>
                            <a href="https://www.linkedin.com/feed/" target="blank">
                                <i className="icon-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div className={styles.copy}>
                        <p>© 2021 - D-MER Worldwide</p>
                        <p>Design &amp; Development by <a href="https://webdacity.dev/" target="blank">Webdacity</a></p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
