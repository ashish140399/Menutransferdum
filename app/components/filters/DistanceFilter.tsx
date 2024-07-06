import { COLOR } from "@/app/utilities/constants/colors";
import styled from "styled-components";
import Slider from "../slider/Slider";
import { useAppContext } from "@/app/utilities/contexts/AppContext";

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
  DistancePanel: styled.div`
    width: 100%;
  `,
};

const DistanceFilter = () => {
  const { filterOptions, setFilterOptions } = useAppContext();

  return (
    <S.Wrapper>
      <S.Title>Distance</S.Title>
      <S.DistancePanel>
        <Slider
          value={filterOptions.distance}
          setValue={(val) =>
            setFilterOptions({ ...filterOptions, distance: val })
          }
        />
      </S.DistancePanel>
    </S.Wrapper>
  );
};

export default DistanceFilter;
