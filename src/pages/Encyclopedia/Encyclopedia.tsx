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
import Pagination from "../../components/Pagination/Pagination";

import Animal from "../../models/Animal";
import FilterReducer from "../../reducers/FilterReducer";
import usePagination from "../../hooks/usePagination";

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
      min_length: Number(params.get("min_length")) || null,
      max_length: Number(params.get("max_length")) || null,
    };
  };
  const getPageFromParams = () => {
    let page = Number(params.get("page")) || 1;
    if (page < 1) page = 1;
    return page;
  };

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [filters, dispatch] = useReducer(FilterReducer, setFiltersFromParams());
  const { currentPage, goToPage, totalPages, setTotalPages } = usePagination(
    getPageFromParams()
  );

  const buildFiltersTempString = () => {
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
    if (filters.min_length) {
      filtersTemp += `&min_length=${filters.min_length}`;
    }
    if (filters.max_length) {
      filtersTemp += `&max_length=${filters.max_length}`;
    }
    if (currentPage) {
      filtersTemp += `&page=${currentPage}`;
    }

    return filtersTemp;
  };

  const fetchAnimals = async () => {
    try {
      setIsLoading(true);
      const filtersTemp = buildFiltersTempString();
      const address = `https://wild-animals-api.onrender.com/api/v1/animals?per_page=6${filtersTemp}`;
      setParams(filtersTemp);
      const response = await fetch(address);
      const data = await response.json();
      setAnimals(data.data.animals);
      let totalPage = Math.ceil(data.totalAnimals / 6);
      if (totalPage === 0) totalPage = 1;
      setTotalPages(totalPage);
      if (currentPage > totalPage) goToPage(totalPage);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimals();
  }, [filters, currentPage]);

  return (
    <div className={styles.page}>
      <Overlay>
        <Wrapper direction="column" justify="space-between" align="center">
          <div className={styles.navigation}>
            <Navbar>
              <SearchBar />
            </Navbar>
            <Filters filters={filters} dispatch={dispatch} />
          </div>
          <main className={styles.content}>
            {!isLoading && animals.length > 0 && (
              <>
                <div className={styles.animalsBox}>
                  {animals.map((animal) => (
                    <AnimalCard key={animal._id} animal={animal} />
                  ))}
                </div>
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  goToPage={goToPage}
                />
              </>
            )}
            {!isLoading && animals.length === 0 && (
              <>
                <p className={styles.noAnimals}>
                  Nie znaleziono zwierząt o wybranych filtrach
                </p>
                <button
                  className={styles.clearBtn}
                  onClick={() => {
                    dispatch({ type: "CLEAR_FILTERS", payload: null });
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
