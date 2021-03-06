import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/router';

// Components
import Container from "../Library/Container/Container"

// Styles
import styles from "./header.module.scss";

const Header = () => {
  // Config
  const headerRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const mobileNavRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const router = useRouter()

  // State
  const [inShop, setInShop] = useState(false);

  useEffect(() => {
    const verifyShop = router.pathname.includes("/shop") || router.pathname.includes("/cart");
    setInShop(verifyShop)
  })

  if (typeof window !== "undefined") {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;

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

            <a>
              Who We Are
            </a>
          </Link>
        </li>
        <li>
          <Link href="/courses">

            <a>
              Our Courses
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.c-doc.co.za/shop">

            <a>
              Our Products
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">

            <a>
              Contact Us
            </a>
          </Link>
        </li>
        {
          inShop ?
            <li className={styles.cartLink}>
              <Link href="/cart">
                <a>
                  Your Cart
                  <i className="icon-cart"></i>
                </a>
              </Link>
            </li>
            : null
        }
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
              <a>
                <img src="/images/logos/Dmer-Logo.svg" alt="D-MER Logo" />
              </a>
            </Link>
          </div>
          <Menu />
          <div className={styles.options}>
            {inShop ?
              <Link href="/cart">
                <a>
                  Your Cart
                  <i className="icon-cart"></i>
                </a>
              </Link>
              :
              <Link href="/courses#book">
                <a>
                  Online Courses
                  <i className="icon-arrow-right" />
                </a>
              </Link>}
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
