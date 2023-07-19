import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavbarList.module.scss";

interface NavbarListProps {
  mobile?: boolean;
}

const NavbarList: FC<NavbarListProps> = ({ mobile }) => {
  return (
    <ul className={`${mobile ? styles.mobileList : styles.navbarList}`}>
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
  );
};

export default NavbarList;
