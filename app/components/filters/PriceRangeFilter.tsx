import { COLOR } from "@/app/utilities/constants/colors";
import styled from "styled-components";
import RangeSlider from "../slider/RangeSlider";
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
  PriceRangePanel: styled.div`
    width: 100%;
  `,
};

const PriceRangeFilter = () => {
  const { filterOptions, setFilterOptions } = useAppContext();

  const updateFilterOptions = (field: "min" | "max", value: number) => {
    const newOptions: FilterOptions = {
      ...filterOptions,
      priceRange: {
        ...filterOptions.priceRange,
        [field]: value,
      },
    };

    setFilterOptions(newOptions);
  };

  return (
    <S.Wrapper>
      <S.Title>
        Price range <button>Clear</button>
      </S.Title>
      <S.PriceRangePanel>
        <RangeSlider
          min={0}
          max={100}
          minValue={filterOptions.priceRange.min}
          setMinValue={(value) => updateFilterOptions("min", value)}
          maxValue={filterOptions.priceRange.max}
          setMaxValue={(value) => updateFilterOptions("max", value)}
        />
      </S.PriceRangePanel>
    </S.Wrapper>
  );
};

export default PriceRangeFilter;
