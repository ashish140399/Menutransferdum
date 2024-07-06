import { COLOR } from "@/app/utilities/constants/colors";
import { useMapContext } from "@/app/utilities/providers/MapProvider";
import { Autocomplete } from "@react-google-maps/api";
import { ChangeEvent, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const S = {
  AutoCompleteWrapper: styled.div`
    border-radius: 8px;
    border: 1px solid ${COLOR.GRAY_BORDER};
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;

    input {
      font-size: 18px;
      color: ${COLOR.GRAY_FILTER};
      border: none;
      outline: none;
      width: 200px;
    }

    button {
      cursor: pointer;
      display: block;
      width: 22px;
      height: 22px;
      background: url(/assets/icons/locate.svg) no-repeat center center;
      background-size: contain;
      border: none;
    }
  `,
};

const GoogleAutocompleteStyle = createGlobalStyle`
  div.pac-container {
    border: none;
  }
`;

const AddressInput = () => {
  const [location, setLocation] = useState("");
  const [autoComplete, setAutoComplete] =
    useState<google.maps.places.Autocomplete>();

  const { setAddress, map, setMapCenter, isLoaded } = useMapContext();

  const handlePlaceChanged = () => {
    if (autoComplete) {
      const newPlace = autoComplete.getPlace();
      setLocation(newPlace.formatted_address || "");

      if (newPlace.geometry?.location && newPlace.geometry.viewport) {
        const position: google.maps.LatLngLiteral = {
          lng: newPlace.geometry?.location?.lng(),
          lat: newPlace.geometry?.location?.lat(),
        };

        setMapCenter(position);

        map?.panTo(position);
        // map?.fitBounds(newPlace.geometry.viewport);

        setAddress(newPlace.formatted_address || location);
      }
    }
  };

  return (
    <S.AutoCompleteWrapper>
      {isLoaded ? (
        <>
          <GoogleAutocompleteStyle />
          <Autocomplete
            onLoad={(autocomplete) => setAutoComplete(autocomplete)}
            onPlaceChanged={handlePlaceChanged}
            //   options={{ componentRestrictions: { country } }}
          >
            <input
              placeholder="Enter your address"
              value={location}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setLocation(e.target.value);
              }}
            />
          </Autocomplete>
        </>
      ) : (
        <input placeholder="Enter your address" />
      )}
      <button />
    </S.AutoCompleteWrapper>
  );
};

export default AddressInput;
