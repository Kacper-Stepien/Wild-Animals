import { FC } from "react";
import styles from "./AnimalTrivia.module.scss";

interface AnimalTriviaProps {
  trivia: string[];
}

const AnimalTrivia: FC<AnimalTriviaProps> = ({ trivia }) => {
  return (
    <div className={styles.trivia}>
      <h3 className={styles.title}>Ciekawostki</h3>
      <ul className={styles.list}>
        {trivia.map((trivia) => (
          <li key={trivia} className={styles.element}>
            {trivia}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalTrivia;
