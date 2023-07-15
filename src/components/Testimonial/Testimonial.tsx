import React from "react";
import styles from "./Testimonial.module.scss";

interface TestimonialProps {
  num: number;
  title: string;
  description: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  num,
  title,
  description,
}) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonialNum}>{num}</div>
      <div className={styles.testimonialTitle}>{title}</div>
      <div className={styles.testimonialDescription}>{description}</div>
    </div>
  );
};

export default Testimonial;
