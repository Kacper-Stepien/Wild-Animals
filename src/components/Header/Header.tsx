import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerH2}>Świat</h1>
      <h1 className={styles.headerH1}>Dzikich Zwierząt</h1>
    </header>
  );
}
