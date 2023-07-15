import Overlay from "../../components/Overlay/Overlay";
import Wrapper from "../../components/Wrapper/Wrapper";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";

import styles from "./Encyclopedia.module.scss";

export default function Encyclopedia() {
  return (
    <div className={styles.page}>
      <Overlay>
        <Wrapper direction="column" justify="space-between">
          <Navbar>
            <SearchBar />
          </Navbar>
          <Footer />
        </Wrapper>
      </Overlay>
    </div>
  );
}
