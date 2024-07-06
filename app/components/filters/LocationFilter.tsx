import { COLOR } from "@/app/utilities/constants/colors";
import styled from "styled-components";
import AddressInput from "../input/AddressInput";

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  Title: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;

    & > button {
      font-size: 14px;
      color: ${COLOR.GRAY_FILTER};
      text-decoration: underline;
      border: none;
      cursor: pointer;
    }
  `,
};

const LocationFilter = () => {
  return (
    <S.Wrapper>
      <S.Title>
        Location <button>Clear</button>
      </S.Title>
      <AddressInput />
    </S.Wrapper>
  );
};

export default LocationFilter;
