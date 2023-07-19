import React, { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({ children }) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <nav className={styles.navbar}>
      {!isMobile && (
        <ul className={styles.navbarList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive
                  ? `${styles.navbarElement} ${styles.navbarElementActive}`
                  : styles.navbarElement;
              }}
            >
              Główna
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/encyclopedia"
              className={({ isActive }) => {
                return isActive
                  ? `${styles.navbarElement} ${styles.navbarElementActive}`
                  : styles.navbarElement;
              }}
            >
              Encyklopedia
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive
                  ? `${styles.navbarElement} ${styles.navbarElementActive}`
                  : styles.navbarElement;
              }}
            >
              O nas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return isActive
                  ? `${styles.navbarElement} ${styles.navbarElementActive}`
                  : styles.navbarElement;
              }}
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
      )}
      {isMobile && (
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen((prevState) => !prevState)}
        >
          {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      )}
      {isMobile && isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive
                    ? `${styles.navbarElement} ${styles.navbarElementActive}`
                    : styles.navbarElement;
                }}
              >
                Główna
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/encyclopedia"
                className={({ isActive }) => {
                  return isActive
                    ? `${styles.navbarElement} ${styles.navbarElementActive}`
                    : styles.navbarElement;
                }}
              >
                Encyklopedia
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive
                    ? `${styles.navbarElement} ${styles.navbarElementActive}`
                    : styles.navbarElement;
                }}
              >
                O nas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive
                    ? `${styles.navbarElement} ${styles.navbarElementActive}`
                    : styles.navbarElement;
                }}
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      {children}
    </nav>
  );
};

export default Navbar;
