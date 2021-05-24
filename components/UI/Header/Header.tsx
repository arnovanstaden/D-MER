import Link from "next/link";

// Components
import Container from "../Library/Container/Container"

// Styles
import styles from "./header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <a>
                                <img src="/images/logos/Dmer-Logo.svg" alt="D-MER Logo" />
                            </a>
                        </Link>
                    </div>
                    <ul className={styles.menu}>
                        <li>
                            <Link href="/about">
                                Who We Are
                            </Link>
                        </li>
                        <li>
                            <Link href="/courses">
                                Our Courses
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                Our Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.bookings}>
                        <Link href="/courses">
                            Book a Course
                        </Link>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Header
