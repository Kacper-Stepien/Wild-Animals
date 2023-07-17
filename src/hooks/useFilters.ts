import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useFilters = () => {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({});

  const availableFilters = [
    "location",
    "species",
    "diet",
    "lifestyle",
    "min_weight",
    "max_weight",
  ];

  const setFiltersFromUrl = () => {
    const newFilters = {};
    for (const filter of availableFilters) {
      const value = urlSearchParams.getAll(filter);
      if (value) {
        newFilters[filter] = value;
      }
    }
    setFilters(newFilters);
    console.log(newFilters);
  };

  useEffect(() => {
    setFiltersFromUrl();
  }, []);

  return [filters, setFilters];
};

export default useFilters;
