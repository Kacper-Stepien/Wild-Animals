import { FC } from "react";
import styles from "./AnimalDescription.module.scss";

interface AnimalDescriptionProps {
  description: string;
}

const AnimalDescription: FC<AnimalDescriptionProps> = ({ description }) => {
  return (
    <div className={styles.description}>
      <p>{description}</p>
    </div>
  );
};

export default AnimalDescription;
