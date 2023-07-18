import { FC, useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import AnimalModel from "../../models/Animal";

import styles from "./SearchBar.module.scss";

type SearchBarProps = {
  placeholder?: string;
};

const SearchBar: FC<SearchBarProps> = ({ placeholder = "Search" }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchResults, setSearchResults] = useState<AnimalModel[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [abortController, setAbortController] =
    useState<AbortController | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchResults = async (value: string) => {
    const address = `https://wild-animals-api.onrender.com/api/v1/animals/search/${value}`;
    if (value.length > 0) {
      if (abortController) {
        abortController.abort();
      }
      const newController = new AbortController();
      setAbortController(newController);
      try {
        setIsLoading(true);
        const response = await fetch(address, {
          signal: newController.signal,
        });
        const data = await response.json();
        console.log(data);
        if (data.message == "No animal found with that name") {
          console.log("No results");
          setSearchResults([]);
        } else {
          setSearchResults(data.data.animals);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setSearchResults([]);
    }
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    fetchResults(value);
  };

  const focusHandler = () => {
    setIsFocused(true);
    const value = searchInputRef.current?.value;
    if (searchInputRef.current?.value.length !== 0 && value) {
      fetchResults(value);
    }
  };

  const blurHandler = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.relatedTarget?.className === styles.result) {
      return;
    }
    setIsFocused(false);
    setSearchResults([]);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        ref={searchInputRef}
        placeholder={placeholder}
        aria-label="search"
        className={styles.searchBarInput}
        onChange={changeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />

      <FaSearch className={styles.searchBarIcon} />

      {isFocused && (
        <div className={styles.results}>
          {searchInputRef.current?.value.length !== 0 && (
            <ul className={styles.results_list}>
              {searchResults.map((result) => {
                return (
                  <li key={result._id}>
                    <NavLink
                      to={`/encyclopedia/${result._id}`}
                      className={styles.result}
                    >
                      <p>{result.name}</p>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          )}
          {!isLoading &&
            searchInputRef.current?.value.length !== 0 &&
            searchResults.length === 0 && (
              <p className={styles.message}>No results</p>
            )}
          {!isLoading && searchInputRef.current?.value.length === 0 && (
            <p className={styles.message}>Type something</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
