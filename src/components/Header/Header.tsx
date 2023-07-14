import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.headerH2}>Świat</h2>
      <h1 className={styles.headerH1}>Dzikich Zwierząt</h1>
    </header>
  );
}
