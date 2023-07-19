import { useState, useEffect, FC, useRef } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styles from "./MultiSelectFilter.module.scss";

interface MultiSelectFilterProps {
  label: string;
  options: {
    label: string;
    value: string;
  }[];
  dispatch: (action: { type: string; payload: string }) => void;
  checked: string[];
  addType: string;
  removeType: string;
  clearType: string;
}

const MultiSelectFilter: FC<MultiSelectFilterProps> = ({
  label,
  options,
  dispatch,
  checked,
  addType,
  removeType,
  clearType,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (option: string) => {
    if (checked.includes(option)) {
      dispatch({ type: removeType, payload: option });
    } else {
      dispatch({ type: addType, payload: option });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.filter} ref={filterRef}>
      <div onClick={toggleDropdown} className={styles.filterLabel}>
        {label} {checked.length > 0 ? `(${checked.length})` : ""}
        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </div>
      {isOpen && (
        <div className={styles.filterList}>
          {options.map((option, index) => (
            <label key={index} className={styles.checkbox}>
              <input
                type="checkbox"
                value={option.value}
                checked={checked.includes(option.value)}
                onChange={() => handleOptionChange(option.value)}
              />
              {option.label}
            </label>
          ))}
          <button
            className={styles.clearBtn}
            onClick={() => {
              dispatch({ type: clearType });
            }}
          >
            Wyczyść
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiSelectFilter;
