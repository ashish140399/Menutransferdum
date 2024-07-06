import { COLOR } from "@/app/utilities/constants/colors";
import { useAppContext } from "@/app/utilities/contexts/AppContext";
import styled from "styled-components";
import CookingStyleFilter from "../filters/CookingStyleFilter";
import DistanceFilter from "../filters/DistanceFilter";
import LifeStyleFilter from "../filters/LifeStyleFilter";
import LocationFilter from "../filters/LocationFilter";
import PriceRangeFilter from "../filters/PriceRangeFilter";
import StarRatingFilter from "../filters/StarRatingFilter";
import { PrimaryButton } from "../button/buttons";
import HorizontalFilterOptions from "../filters/HorizontalFilterOptions";

const S = {
  FiltersPanel: styled.div<{ $opened: boolean }>`
    width: 320px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 36px;

    @media (max-width: 768px) {
      position: fixed;
      left: -100vw;
      top: 0;
      padding: 16px;
      gap: 0;
      background: ${COLOR.WHITE};
      z-index: 13;
      width: 100vw;
      height: 100vh;
      overflow-y: auto;
      transform: translateX(${({ $opened }) => ($opened ? "100%" : "0")});
      transition: transform 0.3s ease-in-out;
    }
  `,
  FilterPanelTitle: styled.div`
    font-size: 28px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > button {
      font-size: 16px;
      border: none;
      color: ${COLOR.GRAY_FILTER};
      cursor: pointer;
    }

    @media (max-width: 768px) {
      margin: 0 -16px;
      padding: 0 16px 16px;
      border-bottom: 1px solid ${COLOR.GRAY_BORDER};
    }
  `,
  BtnClose: styled.button`
    border: none;
    width: 18px;
    height: 18px;
    background: url(/assets/icons/close_black.svg) no-repeat center center;
    background-size: contain;
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  `,
  Filters: styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;

    &::-webkit-scrollbar {
      width: 0 !important;
      background: transparent !important;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      border: none;
    }

    @media (max-width: 768px) {
      gap: 32px;
      overflow-y: auto;
      padding: 32px 0;
    }
  `,
  FilterPanelBottom: styled.div`
    display: none;
    flex-direction: column;
    padding: 6px 0 18px;
    gap: 14px;
    border-top: 1px solid ${COLOR.GRAY_BORDER};

    @media (max-width: 768px) {
      display: flex;
    }
  `,
  BtnSearch: styled(PrimaryButton)`
    font-size: 16px;
    padding: 8px 0;
    border-radius: 5px;
  `,
};

const FilterPanel = () => {
  const { filterOpened, setFilterOpened } = useAppContext();

  return (
    <S.FiltersPanel $opened={filterOpened}>
      <S.FilterPanelTitle>
        <S.BtnClose onClick={() => setFilterOpened(false)} />
        Filters
        <button>Clear All</button>
      </S.FilterPanelTitle>
      <S.Filters>
        <LocationFilter />
        <DistanceFilter />
        <CookingStyleFilter />
        <LifeStyleFilter />
        <StarRatingFilter />
        <PriceRangeFilter />
      </S.Filters>
      <S.FilterPanelBottom>
        <HorizontalFilterOptions />
        <S.BtnSearch>Show 1000+ results</S.BtnSearch>
      </S.FilterPanelBottom>
    </S.FiltersPanel>
  );
};

export default FilterPanel;
