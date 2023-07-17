import { useState, useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";

import Overlay from "../../components/Overlay/Overlay";
import Wrapper from "../../components/Wrapper/Wrapper";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Filters from "../../components/Filters/Filters";
import AnimalCard from "../../components/AnimalCard/AnimalCard";

import Animal from "../../models/Animal";
import FilterReducer from "../../reducers/FilterReducer";

import styles from "./Encyclopedia.module.scss";

export default function Encyclopedia() {
  const [params, setParams] = useSearchParams();
  const setFiltersFromParams = () => {
    return {
      location: params.getAll("location") || [],
      species: params.getAll("species") || [],
      diet: params.getAll("diet") || [],
      lifestyle: params.getAll("lifestyle") || [],
      min_weight: Number(params.get("min_weight")) || null,
      max_weight: Number(params.get("max_weight")) || null,
      min_width: Number(params.get("min_width")) || null,
      max_width: Number(params.get("max_width")) || null,
    };
  };
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [filters, dispatch] = useReducer(FilterReducer, setFiltersFromParams());

  const fetchAnimals = async () => {
    try {
      setIsLoading(true);
      let filtersTemp = "";
      if (filters.location.length > 0) {
        filters.location.forEach((loc) => {
          filtersTemp += `&location=${loc}`;
        });
      }
      if (filters.species.length > 0) {
        filters.species.forEach((spec) => {
          filtersTemp += `&species=${spec}`;
        });
      }
      if (filters.diet.length > 0) {
        filters.diet.forEach((d) => {
          filtersTemp += `&diet=${d}`;
        });
      }
      if (filters.lifestyle.length > 0) {
        filters.lifestyle.forEach((l) => {
          filtersTemp += `&lifestyle=${l}`;
        });
      }
      if (filters.min_weight) {
        filtersTemp += `&min_weight=${filters.min_weight}`;
      }
      if (filters.max_weight) {
        filtersTemp += `&max_weight=${filters.max_weight}`;
      }
      if (filters.min_width) {
        filtersTemp += `&min_width=${filters.min_width}`;
      }
      if (filters.max_width) {
        filtersTemp += `&max_width=${filters.max_width}`;
      }
      const address = `http://localhost:8000/api/v1/animals?per_page=9${filtersTemp}`;
      console.log(address);
      setParams(filtersTemp);
      const response = await fetch(address);
      const data = await response.json();
      console.log(data);
      setAnimals(data.data.animals);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimals();
  }, [filters]);

  return (
    <div className={styles.page}>
      <Overlay>
        <Wrapper direction="column" justify="flex-start" align="center">
          <Navbar>
            <SearchBar />
          </Navbar>
          <Filters filters={filters} dispatch={dispatch} />
          <main className={styles.content}>
            {!isLoading && animals.length > 0 ? (
              <div className={styles.animalsBox}>
                {animals.map((animal) => (
                  <AnimalCard key={animal._id} animal={animal} />
                ))}
              </div>
            ) : (
              <>
                <p className={styles.noAnimals}>
                  Nie znaleziono zwierząt o wybranych filtrach
                </p>
                <button
                  className={styles.clearBtn}
                  onClick={() => {
                    dispatch({ type: "CLEAR_FILTERS" });
                  }}
                >
                  Wyczyść filtry
                </button>
              </>
            )}
            {isLoading ? <LoadingSpinner /> : null}
          </main>

          <Footer />
        </Wrapper>
      </Overlay>
    </div>
  );
}
