import { FC } from "react";
import { NavLink } from "react-router-dom";
import Animal from "../../models/Animal";
import styles from "./AnimalCard.module.scss";

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard: FC<AnimalCardProps> = ({ animal }) => {
  return (
    <NavLink to={`/encyclopedia/${animal._id}`}>
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <img
            className={styles.cardImage}
            src={`https://wild-animals-api.onrender.com/images/animals/${animal.photos[0]}`}
            alt={animal.name}
          />
        </div>
        <div className={styles.cardBottom}>
          <p className={styles.cardName}>{animal.name}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default AnimalCard;
