type Tag = {
  name: string;
  color: string;
};

type Ingredient = {
  name: string;
  description: string;
  image: string;
};

type Restaurant = {
  id: number;
  name: string;
  description: string;
  image: string;
  geometry: {
    lat: number;
    lng: number;
    address?: string;
  };
};

type Menu = {
  id: number;
  dish_name: string;
  description: string;
  local_origin: string;
  rate: number;
  price: number;
  image: string;
  category: string;
  restaurant: Restaurant;
  ingredients?: Ingredient[];
  is_featured?: boolean;
  tags?: Tag[];
  like?: boolean;
};

type ChartItem = {
  name: string;
  value: number;
  image?: string;
  color?: string;
};

type CategoryItem = {
  name: string;
  value: number;
};

type CookingStyle = {
  id: number;
  name: string;
  value: number;
  checked?: boolean;
};

type LifeStyle = {
  id: number;
  name: string;
  value: number;
  checked?: boolean;
};

type FilterOptions = {
  cookingStyle: CookingStyle[];
  lifeStyle: LifeStyle[];
  location: string;
  distance: number;
  rating: number;
  priceRange: {
    min: number;
    max: number;
  };
};
