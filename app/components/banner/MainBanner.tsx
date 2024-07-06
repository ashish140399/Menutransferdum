import { COLOR } from "@/app/utilities/constants/colors";
import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "../button/buttons";
import { MouseEventHandler } from "react";

const S = {
  Wrapper: styled.div`
    padding: 96px 0 0;
    background: url(/assets/background/meal.png) no-repeat 900px 40px;
    background-size: contain;
    position: relative;

    @media (max-width: 768px) {
      padding: 70px 0 0;
      background: url(/assets/background/meal_mobile.png) no-repeat 55vw -20px;
    }
  `,
  Container: styled.div`
    padding: 0 70px;
    display: flex;
    flex-direction: column;
    max-width: 895px;

    @media (max-width: 768px) {
      padding: 0 16px;
      width: 62%;
      min-width: 250px;
      min-height: 400px;

      &.wide {
        width: 100%;
        min-height: 0;
      }
    }
  `,
  Hungry: styled.span`
    background-color: ${COLOR.BROWN_BG};
    color: ${COLOR.BROWN};
    font-weight: 700;
    font-size: 18px;
    padding: 8px 12px;
    border-radius: 12px;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 8px;
      border-radius: 6px;
      font-weight: 600;
    }
  `,
  PageTitle: styled.h1`
    font-size: 91px;
    font-weight: 700;
    line-height: 82px;
    letter-spacing: -3px;
    margin-bottom: 0;

    @media (max-width: 768px) {
      font-size: 48px;
      line-height: 50px;
    }
  `,
  Brown: styled.span`
    color: ${COLOR.BROWN};
  `,
  SubTitle: styled.p`
    font-size: 27px;
    font-weight: 600;
    line-height: 40px;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  `,
  SearchPanel: styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: space-between;
    border-radius: 16px;
    box-shadow: 0px 0px 14.5px 0px ${COLOR.BLACK_SHADOW};
    padding: 16px 12px;

    @media (max-width: 768px) {
      padding: 12px;
      border-radius: 12px;
    }
  `,
  SearchBox: styled.input`
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    padding: 16px;
    border: none;
    width: 100%;

    &:active,
    &:hover,
    &:focus-visible {
      border: none;
      outline: none;
    }

    &:placeholder-shown {
      text-overflow: ellipsis;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 12px;
      line-height: 18px;
    }
  `,
  ButtonGroup: styled.div`
    display: flex;
    gap: 8px;
  `,
  BtnLocateMe: styled(SecondaryButton)`
    @media (max-width: 768px) {
      font-size: 14px;
      padding: 14px 22px;

      & > span {
        display: none;
      }
    }
  `,
  BtnDiscover: styled(PrimaryButton)`
    @media (max-width: 768px) {
      font-size: 14px;
      padding: 14px 22px;
    }
  `,
  TrendPanel: styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
    margin: 2em 0 0;

    & > * {
      color: ${COLOR.GRAY};
      font-weight: 500;
      font-size: 18px;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  `,
  BtnTrend: styled.button`
    padding: 10px 18px;
    border: 1px solid ${COLOR.GRAY_BORDER};
    border-radius: 16px;
    cursor: pointer;

    &.active {
      background-color: ${COLOR.GRAY_BG};
    }

    @media (max-width: 768px) {
      padding: 8px 16px;
      border-radius: 12px;
    }
  `,
};

const trends = [
  "Avocado",
  "zucchini flower",
  "guanciale",
  "nduja",
  "radicchio",
  "camel milk",
  "sirloin",
  "a5 wagyu",
  "paneer",
  "harissa",
  "buffalo",
  "mozzarella",
];

export default function MainBanner() {
  const handleClickTrend: MouseEventHandler<HTMLButtonElement> = (e) => {
    const btn = e.target as HTMLButtonElement;
    btn.classList.toggle("active");
  };

  return (
    <S.Wrapper>
      <S.Container>
        <div>
          <S.Hungry>How Hungry Are You? 🤤</S.Hungry>
        </div>
        <S.PageTitle>
          AI-driven menu trends in <S.Brown>your city</S.Brown>
        </S.PageTitle>
        <S.SubTitle>
          Reverse search any ingredient or dish to analyze{" "}
          <S.Brown>thousands of restaurant menus</S.Brown> and find the
          restaurants serving your favorites.
        </S.SubTitle>
      </S.Container>
      <S.Container className="wide">
        <S.SearchPanel>
          <S.SearchBox placeholder="Type any ingredient or dish" />
          <S.ButtonGroup>
            <S.BtnLocateMe className="btn-locate">
              <span>Locate Me</span>
            </S.BtnLocateMe>
            <S.BtnDiscover>DISCOVER</S.BtnDiscover>
          </S.ButtonGroup>
        </S.SearchPanel>
        <S.TrendPanel>
          <span>Trending Today</span>
          {trends.map((t, index) => (
            <S.BtnTrend onClick={handleClickTrend} key={index}>
              {t}
            </S.BtnTrend>
          ))}
        </S.TrendPanel>
      </S.Container>
    </S.Wrapper>
  );
}
