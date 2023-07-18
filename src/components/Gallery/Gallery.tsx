import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import styles from "./Gallery.module.scss";

interface GalleryProps {
  url: string;
  images: string[];
}

export default function Gallery({ url, images }: GalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.gallery} id="gallery">
      <img
        src={`${url}/${images[currentImageIndex]}`}
        alt={`Image ${currentImageIndex + 1} of ${images.length}`}
        className={styles.image}
      />

      <button
        onClick={handlePrevClick}
        className={`${styles.btn} ${styles.prevBtn}`}
      >
        <SlArrowLeft />
      </button>
      <button
        onClick={handleNextClick}
        className={`${styles.btn} ${styles.nextBtn}`}
      >
        <SlArrowRight />
      </button>

      <div className={styles.imageIndex}>
        {currentImageIndex + 1}/{images.length}
      </div>
    </div>
  );
}
