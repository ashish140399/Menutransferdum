import { COLOR } from "@/app/utilities/constants/colors";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { mockMenuList1 } from "@/app/utilities/constants/mock";
import DishCardLg from "../card/DishCardLg";
import Pagination from "../pagination/Pagination";
import Carousel from "../carousel/Carousel";
import DishCardSm from "../card/DishCardSm";
import { useAppContext } from "@/app/utilities/contexts/AppContext";
import Dropup from "../modal/Dropup";
import Switch from "../switch/Switch";
import FilterPanel from "../panel/FilterPanel";
import HorizontalFilterOptions from "../filters/HorizontalFilterOptions";
import Map from "../map/Map";
import { useClientMediaQuery } from "@/app/utilities/hooks/useMediaQuery";

const S = {
  Wrapper: styled.div`
    margin-top: 64px;
    padding: 80px 0;
    display: flex;
    align-items: flex-start;

    @media (max-width: 768px) {
      margin-top: 36px;
      padding: 24px 0;
    }
  `,
  FilterResultPanel: styled.div`
    flex: 1;
  `,
  PanelTitle: styled.div`
    padding: 30px;
    width: 100%;

    @media (max-width: 768px) {
      padding: 0;
    }
  `,
  Title: styled.h3`
    margin: 0;
    font-size: 48px;
    width: 100%;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  `,
  Description: styled.p`
    font-size: 32px;
    color: ${COLOR.GRAY_NAME};
    margin: 0;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  `,
  ActionGroup: styled.div`
    border: 1px solid ${COLOR.GRAY_BORDER};
    border-radius: 8px;
    overflow: hidden;
    display: none;
    margin-top: 12px;

    & > button {
      flex: 1;
      font-size: 12px;
      font-weight: 500;
      color: ${COLOR.BLACK};
      padding: 8px;
      border: none;
      cursor: pointer;
      gap: 4px;
      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        content: "";
        background: url(/assets/icons/filter.svg) center center no-repeat;
        background-size: contain;
        width: 12px;
        height: 12px;
        display: block;
      }

      &.brown {
        color: ${COLOR.BROWN};

        &::before {
          background: url(/assets/icons/filter_brown.svg) center center
            no-repeat;
        }
      }
    }

    & > button:not(:first-child) {
      border-left: 1px solid ${COLOR.GRAY_BORDER};

      &::before {
        background: url(/assets/icons/sort.svg) center center no-repeat;
      }

      &.brown {
        color: ${COLOR.BROWN};

        &::before {
          background: url(/assets/icons/sort_brown.svg) center center no-repeat;
        }
      }
    }

    @media (max-width: 768px) {
      display: flex;
    }
  `,
  PanelContents: styled.div`
    display: flex;
    gap: 36px;
  `,
  DishesPanel: styled.div`
    width: 620px;
    max-width: 100%;
    padding: 30px;

    @media (max-width: 768px) {
      padding: 0;
      width: 100%;
    }
  `,
  SortButtonGroup: styled.div`
    border: 1px solid ${COLOR.GRAY_BORDER};
    border-radius: 8px;
    display: flex;
    overflow: hidden;

    & > button {
      flex: 1;
      font-size: 16px;
      font-weight: 500;
      color: ${COLOR.BLACK_DESCRIPTION};
      padding: 8px;
      border: none;
      cursor: pointer;

      &.active {
        background-color: ${COLOR.BROWN};
        color: ${COLOR.WHITE};
        border-left: 1px solid ${COLOR.BROWN};
      }
    }

    & > button:not(:first-child) {
      border-left: 1px solid ${COLOR.GRAY_BORDER};
    }

    @media (max-width: 768px) {
      display: none;
    }
  `,
  DishContents: styled.div`
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: relative;
    overflow: hidden;
  `,
  BestDishs: styled.div`
    @media (max-width: 768px) {
      width: calc(100vw - 6px);
      margin: 0 -16px;
    }
  `,
  Map: styled.div`
    flex: 1;
    height: 1000px;
    border: 1px solid ${COLOR.GRAY_BORDER};
    margin-right: -70px;

    @media (max-width: 768px) {
      display: none;
    }
  `,
  MapMobile: styled.div<{ $opened: boolean }>`
    display: none;
    border: 1px solid ${COLOR.GRAY_BORDER};
    position: absolute;
    left: 100%;
    top: 0;
    bottom: 0;
    padding: 16px;
    gap: 32px;
    background: ${COLOR.WHITE};
    z-index: 1;
    width: 100%;
    overflow-y: auto;
    transform: translateX(${({ $opened }) => ($opened ? "-100%" : "0")});
    transition: transform 0.3s ease-in-out;

    @media (max-width: 768px) {
      display: block;
    }
  `,
};

const FilterBanner = () => {
  const {
    setFilterOpened,
    mapOpened,
    setDropupOpened,
    filterOptions,
    sortOption,
  } = useAppContext();

  const [sort, setSort] = useState(0);
  const [selectedDishIndex, setSelectedDishIndex] = useState(-1);
  const [selectedBestDishIndex, setSelectedBestDishIndex] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const [switchEnabled, setSwitchEnabled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const enableSwitch = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      setSwitchEnabled(
        window.scrollY >= rect.top + 100 && window.scrollY <= rect.bottom
      );
    };

    window.addEventListener("scroll", enableSwitch);

    return () => {
      window.removeEventListener("scroll", enableSwitch);
    };
  }, []);

  const totalPages = 10;

  const sortOptions = [
    "Sort by price",
    "Sort by distance",
    "Sort by rating",
    "Sort by cuisine",
  ];

  const isMobile = useClientMediaQuery("(max-width: 768px)");

  return (
    <S.Wrapper>
      <FilterPanel />
      <S.FilterResultPanel>
        <S.PanelTitle>
          <S.Title>
            <span className="brown">158</span> Lamb shoulder meals in Melbourne
          </S.Title>
          <S.Description>Add filters to narrow the selection</S.Description>
        </S.PanelTitle>
        <S.ActionGroup>
          <button
            onClick={() => setFilterOpened(true)}
            className={
              filterOptions.cookingStyle.filter((c) => c.checked).length > 0 ||
              filterOptions.lifeStyle.filter((l) => l.checked).length > 0
                ? "brown"
                : ""
            }
          >
            Filter
          </button>
          <button
            onClick={() => setDropupOpened(true)}
            className={sortOption ? "brown" : ""}
          >
            {sortOption ? sortOption : "Sort"}
          </button>
        </S.ActionGroup>
        {(filterOptions.cookingStyle.length > 0 ||
          filterOptions.lifeStyle.length > 0) && <HorizontalFilterOptions />}
        <S.PanelContents>
          <S.DishesPanel ref={ref}>
            <S.SortButtonGroup>
              {sortOptions.map((option, index) => (
                <button
                  key={index}
                  className={`${index == sort ? "active" : ""}`}
                  onClick={() => setSort(index)}
                >
                  {option}
                </button>
              ))}
            </S.SortButtonGroup>
            <S.DishContents>
              <S.MapMobile $opened={mapOpened}>
                {isMobile && <Map />}
              </S.MapMobile>
              {mockMenuList1.map((m, index) => (
                <DishCardLg
                  menu={m}
                  key={index}
                  isSelected={selectedDishIndex == index}
                  onClick={() => setSelectedDishIndex(index)}
                />
              ))}
            </S.DishContents>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              selectPage={setCurrentPage}
            />
            <S.BestDishs>
              <Carousel title="The best dishes in Melbourne" size="small">
                {mockMenuList1.map((m, index) => (
                  <DishCardSm
                    menu={m}
                    key={index}
                    isSelected={selectedBestDishIndex == index}
                    onClick={() => setSelectedBestDishIndex(index)}
                  />
                ))}
              </Carousel>
            </S.BestDishs>
          </S.DishesPanel>
          <S.Map>{!isMobile && <Map />}</S.Map>
          {switchEnabled && <Switch />}
          <Dropup />
        </S.PanelContents>
      </S.FilterResultPanel>
    </S.Wrapper>
  );
};

export default FilterBanner;
