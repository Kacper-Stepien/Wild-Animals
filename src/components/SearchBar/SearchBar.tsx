import { FC } from "react";
import { FaSearch } from "react-icons/fa";

import styles from "./SearchBar.module.scss";

type SearchBarProps = {
  placeholder?: string;
};

const SearchBar: FC<SearchBarProps> = ({ placeholder = "Search" }) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.searchBarInput}
      />
      <button aria-label="search" className={styles.searchBarBtn}>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
