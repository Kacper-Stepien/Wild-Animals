import Overlay from "../../components/Overlay/Overlay";
import Wrapper from "../../components/Wrapper/Wrapper";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Testimonials from "../../components/Testimonials/Testimonials";

import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles.page}>
      <Overlay>
        <Wrapper direction="column" justify="space-between" align="center">
          <Navbar />
          <Testimonials />
          <Footer />
        </Wrapper>
      </Overlay>
    </div>
  );
}
