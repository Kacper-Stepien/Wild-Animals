import { FC } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  goToPage,
}) => {
  const pageButtons = [];

  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button
        key={i}
        className={
          currentPage === i
            ? `${styles.pageBtn} ${styles.active}`
            : styles.pageBtn
        }
        onClick={() => goToPage(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.prevBtn} ${
          currentPage === 1 ? styles.disabled : ""
        }`}
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <SlArrowLeft />
      </button>

      {pageButtons}

      <button
        className={`${styles.nextBtn} ${
          currentPage === totalPages ? styles.disabled : ""
        }`}
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <SlArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
