import { useMapContext } from "@/app/utilities/providers/MapProvider";
import { GoogleMap } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const defaultMapContainerStyle = {
  width: "100%",
  height: "100%",
};

const defaultMapZoom = 11;

const defaultMapOptions: google.maps.MapOptions = {
  draggable: true,
  panControl: true,
  mapTypeControl: false,
  fullscreenControl: false,
  streetViewControl: true,
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "roadmap",
};

const Map = () => {
  const { mapCenter, map, setMap, isLoaded } = useMapContext();

  useEffect(() => {
    if (map) {
      map.panTo(mapCenter);
    }
  }, [mapCenter, map]);

  if (!isLoaded) return <p>Loading Google Map ...</p>;

  return (
    <GoogleMap
      mapContainerStyle={defaultMapContainerStyle}
      center={mapCenter}
      zoom={defaultMapZoom}
      options={defaultMapOptions}
      onLoad={(loadedMap) => {
        setMap(loadedMap);
      }}
    ></GoogleMap>
  );
};

export default Map;
