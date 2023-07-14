import React, { FC } from "react";
import styles from "./Overlay.module.scss";

interface OverlayProps {
  children: React.ReactNode;
}

const Overlay: FC<OverlayProps> = ({ children }) => {
  return <div className={styles.overlay}>{children}</div>;
};

export default Overlay;
