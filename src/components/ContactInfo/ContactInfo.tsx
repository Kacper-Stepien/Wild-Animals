import { FaPhoneAlt, FaEnvelope, FaGithub } from "react-icons/fa";

import styles from "./ContactInfo.module.scss";

export default function ContactInfo() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.title}>Kontakt</h2>
      <div className={styles.element}>
        <FaPhoneAlt className={styles.icon} />
        <a href="tel:782-748-757" className={styles.link}>
          782 748 757
        </a>
      </div>
      <div className={styles.element}>
        <FaEnvelope className={styles.icon} />
        <a href="mailto:wildanimals@gmail.com" className={styles.link}>
          wildanimals@gmail.com
        </a>
      </div>
      <div className={styles.element}>
        <FaGithub className={styles.icon} />
        <p>
          <a href="https://github.com/Kacper-Stepien" className={styles.link}>
            Github
          </a>
        </p>
      </div>
    </div>
  );
}
