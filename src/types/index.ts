export type ProductType = {
  id: number;
  name: string;
  price: number;
  type: string;
  intensity: string;
  image: string;
};

export type RecipeType = {
  id: number;
  name: string;
  instruction: string[];
  ingredients: string[];
  prep_time: string;
  image: string;
};
