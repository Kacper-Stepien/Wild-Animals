import Overlay from "../../components/Overlay/Overlay";
import Wrapper from "../../components/Wrapper/Wrapper";
import Navbar from "../../components/Navbar/Navbar";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.page}>
      <Overlay>
        <Wrapper direction="column" justify="space-between" align="center">
          <Navbar />
          <div className={styles.content}>
            <ContactInfo />
            <ContactForm />
          </div>
          <Footer />
        </Wrapper>
      </Overlay>
    </div>
  );
}
