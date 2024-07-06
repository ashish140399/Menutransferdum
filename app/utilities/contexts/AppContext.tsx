"use client";

import { createContext, useContext, ReactNode, useMemo, useState } from "react";

export type AppContextType = {
  dropdownOpened: boolean;
  setDropdownOpened: (val: boolean) => void;
  dropupOpened: boolean;
  setDropupOpened: (val: boolean) => void;
  modalOpened: boolean;
  setModalOpened: (val: boolean) => void;
  filterOpened: boolean;
  setFilterOpened: (val: boolean) => void;
  mapOpened: boolean;
  setMapOpened: (val: boolean) => void;
  filterOptions: FilterOptions;
  setFilterOptions: (val: FilterOptions) => void;
  sortOption: string;
  setSortOption: (val: string) => void;
};

const defaultFilterOptions: FilterOptions = {
  cookingStyle: [
    { id: 1, name: "Grilled", value: 22 },
    { id: 2, name: "Roasted", value: 12 },
    { id: 3, name: "Pan-Fried", value: 9 },
    { id: 4, name: "Deep-Fried", value: 8 },
    { id: 5, name: "Baked", value: 8 },
    { id: 6, name: "Steamed", value: 5 },
    { id: 7, name: "Sauteed", value: 4 },
  ],
  lifeStyle: [
    { id: 1, name: "Low FODMAP", value: 20 },
    { id: 2, name: "COELIAC", value: 18 },
    { id: 3, name: "GLUTEN FREE", value: 12 },
    { id: 4, name: "PALEO / KETO", value: 10 },
    { id: 5, name: "DIABETIC", value: 8 },
  ],
  location: "",
  distance: 10,
  rating: 1,
  priceRange: {
    min: 10,
    max: 30,
  },
};

const defaultMapCenter: google.maps.LatLngLiteral = {
  lat: 35.8799866,
  lng: 76.5048004,
};

const appContextDefaultValues: AppContextType = {
  dropdownOpened: false,
  setDropdownOpened: () => {},
  dropupOpened: false,
  setDropupOpened: () => {},
  modalOpened: false,
  setModalOpened: () => {},
  filterOpened: false,
  setFilterOpened: () => {},
  mapOpened: false,
  setMapOpened: () => {},
  filterOptions: defaultFilterOptions,
  setFilterOptions: () => {},
  sortOption: "",
  setSortOption: () => {},
};

export const AppContext = createContext<AppContextType>(
  appContextDefaultValues
);

export function useAppContext() {
  return useContext(AppContext);
}

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [dropupOpened, setDropupOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [filterOpened, setFilterOpened] = useState(false);
  const [mapOpened, setMapOpened] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [filterOptions, setFilterOptions] =
    useState<FilterOptions>(defaultFilterOptions);

  const value = useMemo((): AppContextType => {
    return {
      dropdownOpened,
      setDropdownOpened,
      modalOpened,
      setModalOpened,
      filterOpened,
      setFilterOpened,
      mapOpened,
      setMapOpened,
      dropupOpened,
      setDropupOpened,
      filterOptions,
      setFilterOptions,
      sortOption,
      setSortOption,
    };
  }, [
    dropdownOpened,
    modalOpened,
    filterOpened,
    mapOpened,
    dropupOpened,
    filterOptions,
    sortOption,
  ]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
