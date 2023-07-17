interface IFilterState {
  location: string[];
  species: string[];
  diet: string[];
  lifestyle: string[];
  min_weight: number | null;
  max_weight: number | null;
  min_width: number | null;
  max_width: number | null;
}

interface IFilterAction {
  type: string;
  payload: string | number | null;
}

const reducerFilter = (
  state: IFilterState,
  action: IFilterAction
): IFilterState => {
  switch (action.type) {
    case "SET_LOCATION":
      const newLocations = [...state.location, action.payload];
      console.log(newLocations);
      return {
        ...state,
        location: newLocations,
      };
    case "DELETE_LOCATION":
      const updatedLocations = state.location.filter(
        (location) => location !== action.payload
      );
      return {
        ...state,
        location: updatedLocations,
      };
    case "CLEAR_LOCATION":
      return {
        ...state,
        location: [],
      };
    case "SET_SPECIES":
      const newSpecies = [...state.species, action.payload];
      return {
        ...state,
        species: newSpecies,
      };
    case "DELETE_SPECIES":
      const updatedSpecies = state.species.filter(
        (species) => species !== action.payload
      );
      return {
        ...state,
        species: updatedSpecies,
      };
    case "CLEAR_SPECIES":
      return {
        ...state,
        species: [],
      };
    case "SET_DIET":
      const newDiet = [...state.diet, action.payload];
      return {
        ...state,
        diet: newDiet,
      };
    case "DELETE_DIET":
      const updatedDiet = state.diet.filter((diet) => diet !== action.payload);
      return {
        ...state,
        diet: updatedDiet,
      };
    case "CLEAR_DIET":
      return {
        ...state,
        diet: [],
      };
    case "SET_LIFESTYLE":
      const newLifestyle = [...state.lifestyle, action.payload];
      return {
        ...state,
        lifestyle: newLifestyle,
      };
    case "DELETE_LIFESTYLE":
      const updatedLifestyle = state.lifestyle.filter(
        (lifestyle) => lifestyle !== action.payload
      );
      return {
        ...state,
        lifestyle: updatedLifestyle,
      };
    case "CLEAR_LIFESTYLE":
      return {
        ...state,
        lifestyle: [],
      };
    case "SET_MIN_WEIGHT":
      return {
        ...state,
        min_weight: action.payload,
      };
    case "DELETE_MIN_WEIGHT":
      return {
        ...state,
        min_weight: null,
      };
    case "SET_MAX_WEIGHT":
      return {
        ...state,
        max_weight: action.payload,
      };
    case "DELETE_MAX_WEIGHT":
      return {
        ...state,
        max_weight: null,
      };
    case "SET_MIN_WIDTH":
      return {
        ...state,
        min_width: action.payload,
      };
    case "SET_MAX_WIDTH":
      return {
        ...state,
        max_width: action.payload,
      };
    case "DELETE_MIN_WIDTH":
      return {
        ...state,
        min_width: null,
      };
    case "CLEAR_FILTERS":
      return {
        location: [],
        species: [],
        diet: [],
        lifestyle: [],
        min_weight: null,
        max_weight: null,
        min_width: null,
        max_width: null,
      };
    case "SET_FILTERS_FROM_URL":
      const newFilters = {
        location: action.payload.getAll("location") || [],
        species: action.payload.getAll("species") || [],
        diet: action.payload.getAll("diet") || [],
        lifestyle: action.payload.getAll("lifestyle") || [],
        min_weight: action.payload.get("min_weight") || null,
        max_weight: action.payload.get("max_weight") || null,
        min_width: action.payload.get("min_width") || null,
        max_width: action.payload.get("max_width") || null,
      };
      return newFilters;
    default:
      throw new Error("Invalid action type");
  }
};

export default reducerFilter;
