interface FilterState {
  location: string[];
  species: string[];
  diet: string[];
  lifestyle: string[];
  min_weight: number | null;
  max_weight: number | null;
  min_length: number | null;
  max_length: number | null;
}

interface FilterAction {
  type: string;
  payload: string | number | null;
}

const reducerFilter = (
  state: FilterState,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case "SET_LOCATION":
      if (typeof action.payload !== "string") throw new Error("Invalid type");
      const newLocations = [...state.location, action.payload];
      return {
        ...state,
        location: newLocations,
      };
    case "DELETE_LOCATION":
      if (typeof action.payload !== "string") throw new Error("Invalid type");
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
      if (typeof action.payload !== "string") throw new Error("Invalid type");
      const newSpecies = [...state.species, action.payload];
      return {
        ...state,
        species: newSpecies,
      };
    case "DELETE_SPECIES":
      if (typeof action.payload !== "string") throw new Error("Invalid type");
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
      if (typeof action.payload !== "string") throw new Error("Invalid type");
      const newDiet = [...state.diet, action.payload];
      return {
        ...state,
        diet: newDiet,
      };
    case "DELETE_DIET":
      if (typeof action.payload !== "string") throw new Error("Invalid type");
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
      if (typeof action.payload !== "string") throw new Error("Invalid type");
      const newLifestyle = [...state.lifestyle, action.payload];
      return {
        ...state,
        lifestyle: newLifestyle,
      };
    case "DELETE_LIFESTYLE":
      if (typeof action.payload !== "string") throw new Error("Invalid type");
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
      if (typeof action.payload === "string") throw new Error("Invalid type");
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
      if (typeof action.payload === "string") throw new Error("Invalid type");
      return {
        ...state,
        max_weight: action.payload,
      };
    case "DELETE_MAX_WEIGHT":
      return {
        ...state,
        max_weight: null,
      };
    case "SET_MIN_LENGTH":
      if (typeof action.payload === "string") throw new Error("Invalid type");
      return {
        ...state,
        min_length: action.payload,
      };
    case "DELETE_MIN_LENGTH":
      return {
        ...state,
        min_length: null,
      };
    case "SET_MAX_LENGTH":
      if (typeof action.payload === "string") throw new Error("Invalid type");
      return {
        ...state,
        max_length: action.payload,
      };
    case "DELETE_MAX_LENGTH":
      return {
        ...state,
        max_length: null,
      };
    case "CLEAR_FILTERS":
      return {
        location: [],
        species: [],
        diet: [],
        lifestyle: [],
        min_weight: null,
        max_weight: null,
        min_length: null,
        max_length: null,
      };

    default:
      throw new Error("Invalid action type");
  }
};

export default reducerFilter;
