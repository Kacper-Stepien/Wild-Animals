import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({ children }) => {
  return (
    <nav className={styles.navbar}>
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
      {children}
    </nav>
  );
};

export default Navbar;
