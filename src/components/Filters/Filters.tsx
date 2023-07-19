import { useState, FC } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import MultiSelectFilter from "../MultiSelectFilter/MultiSelectFilter";
import NumberFilter from "../NumberFilter/NumberFilter";

import styles from "./Filters.module.scss";

interface FiltersProps {
  filters: {
    location: string[];
    species: string[];
    diet: string[];
    lifestyle: string[];
    min_weight: number | null;
    max_weight: number | null;
    min_length: number | null;
    max_length: number | null;
  };
  dispatch: (action: { type: string; payload: string }) => void;
}

const Filters: FC<FiltersProps> = ({ filters, dispatch }) => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleOpen = () => {
    setFiltersOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.filters}>
      <div className={styles.title} onClick={toggleOpen}>
        <h3>Filtrowanie</h3>
        {filtersOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </div>
      {filtersOpen && (
        <div className={styles.wrapper}>
          <div className={styles.filtersList}>
            <MultiSelectFilter
              label={"Lokalizacja"}
              options={[
                {
                  label: "Europa",
                  value: "europa",
                },
                {
                  label: "Azja",
                  value: "azja",
                },
                {
                  label: "Afryka",
                  value: "afryka",
                },
                {
                  label: "Ameryka Północna",
                  value: "ameryka północna",
                },
                {
                  label: "Ameryka Południowa",
                  value: "ameryka południowa",
                },
                {
                  label: "Ameryka Środkowa",
                  value: "ameryka środkowa",
                },
                {
                  label: "Australia",
                  value: "australia",
                },
                {
                  label: "Antarktyda",
                  value: "antarktyda",
                },
                {
                  label: "Arktyka",
                  value: "arktyka",
                },
              ]}
              dispatch={dispatch}
              checked={filters.location}
              addType="SET_LOCATION"
              removeType="DELETE_LOCATION"
              clearType="CLEAR_LOCATION"
            />
            <MultiSelectFilter
              label={"Gatunek"}
              options={[
                {
                  label: "Ssaki",
                  value: "ssak",
                },
                {
                  label: "Gady",
                  value: "gad",
                },
                {
                  label: "Ptaki",
                  value: "ptak",
                },
                {
                  label: "Ryby",
                  value: "ryba",
                },
                {
                  label: "Płazy",
                  value: "płaz",
                },
                {
                  label: "Owad",
                  value: "owad",
                },
                {
                  label: "Pająki",
                  value: "pająk",
                },
                {
                  label: "Inne",
                  value: "inny",
                },
              ]}
              dispatch={dispatch}
              checked={filters.species}
              addType="SET_SPECIES"
              removeType="DELETE_SPECIES"
              clearType="CLEAR_SPECIES"
            />
            <MultiSelectFilter
              label={"Dieta"}
              options={[
                {
                  label: "Mięsożerne",
                  value: "mięsożerne",
                },
                {
                  label: "Roślinożerne",
                  value: "roślinożerne",
                },
                {
                  label: "Wszystkożerne",
                  value: "wszystkożerne",
                },
                {
                  label: "Pasożyt",
                  value: "pasożyt",
                },
                {
                  label: "Nektarożerne",
                  value: "nektarożerne",
                },
                {
                  label: "Padlinożerne",
                  value: "padlinożerne",
                },
                {
                  label: "Owadożerne",
                  value: "owadożerne",
                },
                {
                  label: "Rybożerne",
                  value: "rybożerne",
                },
                {
                  label: "Glonożerne",
                  value: "glonożerne",
                },
                {
                  label: "Algożerne",
                  value: "algożerne",
                },

                {
                  label: "Miodożerne",
                  value: "miodożerne",
                },
              ]}
              dispatch={dispatch}
              checked={filters.diet}
              addType="SET_DIET"
              removeType="DELETE_DIET"
              clearType="CLEAR_DIET"
            />
            <MultiSelectFilter
              label={"Tryb życia"}
              options={[
                {
                  label: "W stadzie",
                  value: "w stadzie",
                },
                {
                  label: "Samotnik",
                  value: "samotnik",
                },
                {
                  label: "W grupie",
                  value: "w grupie",
                },
                {
                  label: "W parach",
                  value: "w parach",
                },
                {
                  label: "W rodzinie",
                  value: "w rodzinie",
                },
              ]}
              dispatch={dispatch}
              checked={filters.lifestyle}
              addType="SET_LIFESTYLE"
              removeType="DELETE_LIFESTYLE"
              clearType="CLEAR_LIFESTYLE"
            />
            <NumberFilter
              label={"Waga od (kg)"}
              min={0}
              max={10000}
              dispatch={dispatch}
              currentValue={filters.min_weight}
              addType="SET_MIN_WEIGHT"
              removeType="DELETE_MIN_WEIGHT"
            />
            <NumberFilter
              label={"Waga do (kg)"}
              min={20}
              max={10000}
              dispatch={dispatch}
              currentValue={filters.max_weight}
              addType="SET_MAX_WEIGHT"
              removeType="DELETE_MAX_WEIGHT"
            />
            <NumberFilter
              label={"Długość od (cm)"}
              min={0}
              max={10000}
              dispatch={dispatch}
              currentValue={filters.min_length}
              addType="SET_MIN_LENGTH"
              removeType="DELETE_MIN_LENGTH"
            />

            <NumberFilter
              label={"Długość do (cm)"}
              min={20}
              max={10000}
              dispatch={dispatch}
              currentValue={filters.max_length}
              addType="SET_MAX_LENGTH"
              removeType="DELETE_MAX_LENGTH"
            />
          </div>
          <button
            className={styles.resetBtn}
            onClick={() => {
              dispatch({ type: "CLEAR_FILTERS", payload: "" });
            }}
          >
            Wyczyść wszystkie filtry{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Filters;
