import React, { FC, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

import NavbarList from "./NavbarList";

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
      {!isMobile && <NavbarList />}
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
          <NavbarList mobile={true} />
        </div>
      )}
      {children}
    </nav>
  );
};

export default Navbar;
