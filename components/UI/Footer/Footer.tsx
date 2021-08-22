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
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a>About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses">
                                    <a>Courses</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Shop</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a>Contact</a>
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
                        <a href="/documents/D-MER - POPIA and PAIA Privacy Policy.pdf" target="download" className={styles.privacy}>Privacy Policy</a>
                        <p>Design &amp; Development by <a href="https://webdacity.dev/" target="blank">Webdacity</a></p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
