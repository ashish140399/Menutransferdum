import { useEffect, useState } from "react";

type Location = {
  loaded: boolean;
  coordinates?: { lat: number; lng: number };
  error?: {
    code: number;
    message: string;
  };
};

const useGeoLocation = () => {
  const [location, setLocation] = useState<Location>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });

  const onSuccess: PositionCallback = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError: PositionErrorCallback = (error) => {
    setLocation({
      loaded: true,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    // if the browser does not support geo-location (unlikely)
    if (!("geolocation" in navigator)) {
      setLocation({
        loaded: true,
        error: {
          code: 0,
          message: "Geolocation is not supported",
        },
      });
    } else {
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeoLocation;
