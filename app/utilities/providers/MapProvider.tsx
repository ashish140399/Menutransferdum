"use client";
import { createContext, useContext, ReactNode, useMemo, useState } from "react";
import { Libraries, useJsApiLoader } from "@react-google-maps/api";

export type MapContextType = {
  address: string;
  setAddress: (val: string) => void;
  mapCenter: google.maps.LatLngLiteral;
  setMapCenter: (val: google.maps.LatLngLiteral) => void;
  map?: google.maps.Map;
  setMap: (val: google.maps.Map) => void;
  isLoaded: boolean;
  loadError?: Error;
};

const libraries: Libraries = ["places", "drawing", "geometry"];

const defaultMapCenter: google.maps.LatLngLiteral = {
  lat: 35.8799866,
  lng: 76.5048004,
};

const mapContextDefaultValues: MapContextType = {
  address: "",
  setAddress: () => {},
  mapCenter: defaultMapCenter,
  setMapCenter: () => {},
  map: undefined,
  setMap: () => {},
  isLoaded: false,
  loadError: undefined,
};

export const MapContext = createContext<MapContextType>(
  mapContextDefaultValues
);

export function useMapContext() {
  return useContext(MapContext);
}

type Props = {
  children: ReactNode;
};

export const MapProvider = ({ children }: Props) => {
  const [address, setAddress] = useState("");
  const [mapCenter, setMapCenter] =
    useState<google.maps.LatLngLiteral>(defaultMapCenter);
  const [map, setMap] = useState<google.maps.Map>();

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
    libraries: libraries,
  });

  const value = useMemo((): MapContextType => {
    return {
      address,
      setAddress,
      mapCenter,
      setMapCenter,
      map,
      setMap,
      isLoaded,
      loadError,
    };
  }, [address, mapCenter, map, isLoaded, loadError]);

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};
