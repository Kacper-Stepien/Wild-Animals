interface Animal {
  _id: string;
  name: string;
  species: string;
  description: string;
  location: string[];
  habitat: string[];
  population: number;
  diet: string;
  prey: string[];
  min_weight: number;
  max_weight: number;
  max_speed: number;
  predators: string[];
  gestation_period: string;
  average_litter_size: number;
  age_of_weaning: string;
  lifestyle: string;
  min_life_span: number;
  max_life_span: number;
  skin_type: string;
  min_length: number;
  max_length: number;
  min_height: number;
  max_height: number;
  color: string[];
  photos: string[];
  trivia: string[];
}

export default Animal;
