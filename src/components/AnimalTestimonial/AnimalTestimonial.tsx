import { FC } from "react";
import { IconType } from "react-icons";

import styles from "./AnimalTestimonial.module.scss";

interface AnimalTestimonialProps {
  name: string;
  infos: {
    icon: IconType;
    title: string;
    description: string | number | undefined;
  }[];
}

const AnimalTestimonial: FC<AnimalTestimonialProps> = ({ name, infos }) => {
  return (
    <div className={styles.testimonial}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.testimonialData}>
        {infos.map((info) => (
          <div key={info.title} className={styles.info}>
            <div className={styles.title}>
              <info.icon />
              <h4>{info.title}</h4>
            </div>
            <p>{info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalTestimonial;
