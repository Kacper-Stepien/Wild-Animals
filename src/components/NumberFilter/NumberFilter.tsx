import { FC, useState, useEffect } from "react";
import styles from "./NumberFilter.module.scss";

interface NumberFilterProps {
  label: string;
  min: number;
  max: number;
  dispatch: (action: { type: string; payload: string | number }) => void;
  currentValue: number | null;
  addType: string;
  removeType: string;
}

const NumberFilter: FC<NumberFilterProps> = ({
  label,
  min,
  max,
  dispatch,
  currentValue,
  addType,
  removeType,
}) => {
  const [inputValue, setInputValue] = useState<number | null>(currentValue);
  const [clueIsVisible, setClueIsVisible] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue !== "" ? parseFloat(newValue) : null);
  };

  const handleInputBlur = () => {
    if (inputValue !== null) {
      dispatch({ type: addType, payload: inputValue });
    } else if (currentValue) {
      dispatch({ type: removeType, payload: "" });
    }
  };

  const handleInputKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.currentTarget.blur();
    }
  };

  useEffect(() => {
    setInputValue(currentValue);
  }, [currentValue]);

  return (
    <div
      className={styles.filter}
      onMouseEnter={() => setClueIsVisible(true)}
      onMouseLeave={() => setClueIsVisible(false)}
    >
      <input
        type="number"
        min={min}
        max={max}
        value={inputValue !== null ? inputValue : ""}
        placeholder={label}
        className={styles.input}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onKeyPress={handleInputKeyPress}
      />
      {clueIsVisible && inputValue !== null && (
        <div className={styles.clue}>{label}</div>
      )}
    </div>
  );
};

export default NumberFilter;
