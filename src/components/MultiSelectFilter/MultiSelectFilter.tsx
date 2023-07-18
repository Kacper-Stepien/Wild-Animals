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

  // Ustawienie opcji "Wszystkie" na początku
  const allOption = { label: "Wszystkie", value: "all" };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (option: string) => {
    console.log(option);
    if (checked.includes(option)) {
      dispatch({ type: removeType, payload: option });
      console.log("remove");
    } else {
      dispatch({ type: addType, payload: option });
      console.log("add");
    }
  };

  //   const handleOptionChange = (option) => {
  //     if (option.value === allOption.value) {
  //       if (selectedOptions.length === options.length) {
  //         setSelectedOptions([]);
  //       } else {
  //         setSelectedOptions(options.map((option) => option.value));
  //       }
  //     } else {
  //       const updatedOptions = [...selectedOptions];
  //       if (updatedOptions.includes(option.value)) {
  //         updatedOptions.splice(updatedOptions.indexOf(option.value), 1);
  //       } else {
  //         updatedOptions.push(option.value);
  //       }
  //       setSelectedOptions(updatedOptions);
  //       console.log(updatedOptions);
  //     }
  //   };
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
          {/* <label className={styles.checkbox}>
            <input
              type="checkbox"
              value={allOption.value}
              checked={allOptionSelected}
              onChange={() => handleOptionChange(option.value)}
            />
            {allOption.label}
          </label> */}
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
