'use client';

import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Components
import Container from '../Library/Container/Container'

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
              <i className="icon-arrow-right" />
            </Link>
          </div>
          <i className={`icon-menu ${styles.mobileButton}`} onClick={handleToggleMobileNav}></i>
          <div className={styles.mobile} ref={mobileNavRef}>
            <i className="icon-clear" onClick={handleToggleMobileNav}></i>
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
