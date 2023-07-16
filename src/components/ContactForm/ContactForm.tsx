import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.title}>Wyślij mi wiadomość</h2>
      <form className={styles.contactForm}>
        <input
          type="text"
          placeholder="Imię i nazwisko"
          className={styles.contactInput}
        />
        <input
          type="email"
          placeholder="Adres e-mail"
          className={styles.contactInput}
        />
        <textarea
          placeholder="Wiadomość"
          className={`${styles.contactInput} ${styles.contactTextarea}`}
        />
      </form>
    </div>
  );
}
