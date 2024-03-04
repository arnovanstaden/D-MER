'use client';

import Link from 'next/link';
import { useRef } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Components
import Container from '../Container/Container'

// Styles
import styles from './header.module.scss';

const Header = () => {
  // Config
  const headerRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const mobileNavRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  if (typeof window !== 'undefined') {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 0) {
        headerRef.current.classList.add(styles.fixed)
      } else {
        headerRef.current.classList.remove(styles.fixed)
      }

      if (prevScrollpos > currentScrollPos) {
        headerRef.current.classList.remove(styles.hide)
      } else {
        headerRef.current.classList.add(styles.hide)
      }
      prevScrollpos = currentScrollPos;
    }
  }

  const Menu = () => {
    return (
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
          <Link href="/contact">
            Contact Us
          </Link>
        </li>
      </ul >
    )
  }

  const handleToggleMobileNav = () => {
    mobileNavRef.current.classList.toggle(styles.open)
  }

  return (
    <header className={styles.header} ref={headerRef}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/">
              <img src="/images/logos/Dmer-Logo.svg" alt="D-MER Logo" />
            </Link>
          </div>
          <Menu />
          <div className={styles.options}>
            <Link href="/courses/book">
              Book a Course
              <ArrowForwardIcon className={styles.icon} />
            </Link>
          </div>
          <MenuIcon className={styles.mobileButton} onClick={handleToggleMobileNav} />
          <div className={styles.mobile} ref={mobileNavRef}>
            <CloseIcon onClick={handleToggleMobileNav} className={styles.closeButton} />
            <div className={styles.inner} onClick={handleToggleMobileNav}>
              <Menu />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
