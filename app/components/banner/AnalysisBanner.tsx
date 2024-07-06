import styled, { css } from "styled-components";
import PieChart from "../piechart/PieChart";
import { mockChartItemList } from "@/app/utilities/constants/mock";
import { COLOR } from "@/app/utilities/constants/colors";

const S = {
  Wrapper: styled.div`
    background: url(/assets/background/lamb_shoulder.jpg) no-repeat center right;
    background-size: contain;
    position: relative;

    @media (max-width: 768px) {
      background: transparent;
    }
  `,
  AnalysisPanel: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 700px;
    border: 1px solid ${COLOR.BROWN_TRANS};
    border-radius: 20px;
    padding: 20px;
    background: #fffb;
    max-width: 100%;

    @media (max-width: 768px) {
      padding: 12px;
      gap: 6px;
      border-radius: 12px;
    }
  `,
  LineChartPanel: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
      gap: 6px;
    }
  `,
  LineChart: styled.div`
    display: block;
    flex: 1;
    height: 200px;
    border: 1px solid ${COLOR.BROWN_TRANS};
    border-radius: 8px;
    background: ${COLOR.WHITE};

    @media (max-width: 768px) {
      height: 125px;
      border-radius: 6px;
    }
  `,
  LineChartTitle: styled.h4<{ $type: "search" | "menu" }>`
    margin: 18px 0 0;
    font-size: 16px;
    font-weight: 600;
    color: ${COLOR.BROWN};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    &::before {
      content: "";
      width: 14px;
      height: 14px;
      display: block;

      ${({ $type }) =>
        $type === "search"
          ? css`
              background: url(/assets/icons/search_trend.svg) no-repeat center
                center;
            `
          : css`
              background: url(/assets/icons/menu_trend.svg) no-repeat center
                center;
            `};
      background-size: contain;
    }

    @media (max-width: 768px) {
      font-size: 10px;

      &::before {
        width: 8px;
        height: 8px;
      }
    }
  `,
  LineChartDescription: styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: ${COLOR.BLACK};
    text-align: center;

    @media (max-width: 768px) {
      font-size: 11px;
    }
  `,
  PieChartPanel: styled.div`
    border: 1px solid ${COLOR.BROWN_TRANS};
    background: ${COLOR.WHITE};
    border-radius: 8px;
    padding: 20px 0;

    @media (max-width: 768px) {
      border-radius: 6px;
    }
  `,
  PanelTitle: styled.h4`
    color: ${COLOR.BROWN};
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 0;

    &::before {
      width: 24px;
      height: 16px;
      content: "";
      display: block;
      background: url(/assets/icons/accompaniments.svg) center center no-repeat;
      background-size: contain;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      gap: 4px;

      &::before {
        width: 15px;
        height: 9px;
      }
    }
  `,
  PanelDescription: styled.p`
    font-size: 24px;
    font-weight: 700;
    color: ${COLOR.BLACK};
    text-align: center;
    margin: 4px 0;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  `,
  PriceRange: styled.div`
    border-radius: 20px;
    position: absolute;
    right: 0;
    bottom: 0;
    background: ${COLOR.WHITE};
    border: 1px solid ${COLOR.BROWN_TRANS};
    padding: 16px 24px;
    text-align: center;

    @media (max-width: 1024px) {
      display: none;
    }
  `,
  PriceRangeTitle: styled.div`
    font-size: 22px;
    font-weight: 500;
    color: ${COLOR.BLACK};
  `,
  Price: styled.div`
    font-size: 34px;
    font-weight: 700;
    color: ${COLOR.BROWN};
  `,
};

interface AnalysisBannerProps {
  dishName: string;
}

const AnalysisBanner = ({ dishName }: AnalysisBannerProps) => {
  return (
    <S.Wrapper>
      <S.AnalysisPanel>
        <S.LineChartPanel>
          <S.LineChart>
            <S.LineChartTitle $type="search">Search Trends</S.LineChartTitle>
            <S.LineChartDescription>
              Searches for {dishName}
            </S.LineChartDescription>
          </S.LineChart>
          <S.LineChart>
            <S.LineChartTitle $type="menu">Menu Trends</S.LineChartTitle>
            <S.LineChartDescription>
              Menus featuring {dishName}
            </S.LineChartDescription>
          </S.LineChart>
        </S.LineChartPanel>
        <S.PieChartPanel>
          <S.PanelTitle>Accompaniments</S.PanelTitle>
          <S.PanelDescription>
            {dishName} is frequently served with
          </S.PanelDescription>
          <PieChart itemList={mockChartItemList} />
        </S.PieChartPanel>
      </S.AnalysisPanel>
      <S.PriceRange>
        <S.PriceRangeTitle>Price Range</S.PriceRangeTitle>
        <S.Price>$20 - $40</S.Price>
      </S.PriceRange>
    </S.Wrapper>
  );
};

export default AnalysisBanner;
