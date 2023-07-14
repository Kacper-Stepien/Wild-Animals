import Wrapper from "../../components/Wrapper/Wrapper";
import Overlay from "../../components/Overlay/Overlay";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <Overlay>
        <Wrapper direction="column" justify="space-between">
          <Navbar />
          <Header />
          <Footer />
        </Wrapper>
      </Overlay>
    </div>
  );
};

export default Home;
