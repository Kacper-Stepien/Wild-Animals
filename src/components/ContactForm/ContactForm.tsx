import { useState } from "react";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  const validateInputs = () => {
    let formValid = true;
    if (name.trim() === "") {
      setNameError("Imię i nazwisko jest wymagane");
      formValid = false;
    } else {
      setNameError("");
    }
    if (email.trim() === "") {
      setEmailError("Email jest wymagany");
      formValid = false;
    } else {
      setEmailError("");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Niepoprawny format adresu email");
      formValid = false;
    } else {
      if (emailError === "Niepoprawny format adresu email") {
        setEmailError("");
      }
    }
    if (message.trim() === "") {
      setMessageError("Wiadomość jest wymagana");
      formValid = false;
    } else {
      setMessageError("");
    }
    return formValid;
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }
    clearInputs();
  };

  return (
    <div className={styles.contact}>
      <h2 className={styles.title}>Wyślij mi wiadomość</h2>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.inputField}>
          <input
            type="text"
            value={name}
            placeholder="Imię i nazwisko"
            className={styles.contactInput}
            onChange={(e) => setName(e.target.value)}
          />
          <span className={styles.error}>{nameError}</span>
        </div>
        <input
          type="email"
          value={email}
          placeholder="Adres e-mail"
          className={styles.contactInput}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className={styles.error}>{emailError}</span>
        <textarea
          placeholder="Wiadomość"
          value={message}
          className={`${styles.contactInput} ${styles.contactTextarea}`}
          onChange={(e) => setMessage(e.target.value)}
        />
        <span className={styles.error}>{messageError}</span>
        <button type="submit" className={styles.contactBtn}>
          Wyślij
        </button>
      </form>
    </div>
  );
}
