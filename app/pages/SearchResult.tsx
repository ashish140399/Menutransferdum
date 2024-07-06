"use client";

import styled, { css } from "styled-components";
import { mockTagList } from "../utilities/constants/mock";
import { PrimaryButton, SecondaryButton } from "../components/button/buttons";
import { COLOR } from "../utilities/constants/colors";
import AnalysisBanner from "../components/banner/AnalysisBanner";
import CategoryBanner from "../components/banner/CategoryBanner";
import FilterBanner from "../components/banner/FilterBanner";
import PeopleAlsoSearched from "../components/banner/PeopleAlsoSearched";
import { useAppContext } from "../utilities/contexts/AppContext";

const S = {
  Main: styled.main<{ $opened: boolean }>`
    ${({ $opened }) =>
      $opened &&
      css`
        height: calc(100vh - 108px);
        overflow-y: hidden;

        @media (max-width: 768px) {
          height: calc(100vh - 92px);
        }
      `}
  `,
  MainWrapper: styled.div`
    padding: 70px;

    @media (max-width: 768px) {
      padding: 32px 16px;
      background: url(/assets/background/lamb_shoulder_mobile.png) no-repeat
        55vw 70px;
      background-size: 40vw;
    }
  `,
  TagPanel: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  TagGroup: styled.div`
    display: flex;
    gap: 8px;
  `,
  Tag: styled.span<{ color: string }>`
    padding: 8px 12px;
    color: ${({ color }) => color};
    white-space: nowrap;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 8px;
      padding: 8px 4px;
    }
  `,
  ButtonGroup: styled.div`
    display: flex;
    gap: 16px;
  `,
  BtnSaved: styled(PrimaryButton)`
    display: flex;
    gap: 8px;
    align-items: center;

    &::before {
      width: 16px;
      height: 16px;
      content: "";
      display: block;
      background: url(/assets/icons/heart.svg) center center no-repeat;
      background-size: contain;
    }

    @media (max-width: 768px) {
      gap: 4px;
      font-size: 8px;
      padding: 6px;
      border-radius: 6px;

      &::before {
        width: 10px;
        height: 10px;
      }
    }
  `,
  BtnShare: styled(SecondaryButton)`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${COLOR.BROWN};
    border-radius: 6px;

    &:hover {
      border-color: ${COLOR.BROWN};
    }

    &::before {
      content: "";
      display: block;
      width: 16px;
      height: 16px;
      background: url(/assets/icons/share.svg) center center no-repeat;
      background-size: contain;
    }

    @media (max-width: 768px) {
      gap: 4px;
      font-size: 8px;
      padding: 6px;

      &::before {
        width: 10px;
        height: 10px;
      }
    }
  `,
  TitlePanel: styled.div`
    margin: 16px 0;
    @media (max-width: 768px) {
      margin: 12px 0;
      width: 55%;
      min-height: 150px;
    }
  `,
  PageTitle: styled.h1`
    font-size: 92px;
    font-weight: 700;
    color: ${COLOR.BROWN};
    line-height: 96px;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 48px;
      line-height: 50px;
    }
  `,
  PageDescription: styled.p`
    font-size: 28px;
    font-weight: 600;
    color: ${COLOR.BLACK_DESCRIPTION};
    margin: 8px 0;

    & > span {
      color: ${COLOR.BROWN};
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }
  `,
};

interface SearchResultProps {
  dishName: string;
}

const SearchResult = ({ dishName }: SearchResultProps) => {
  const { modalOpened, filterOpened, dropdownOpened } = useAppContext();

  return (
    <S.Main $opened={modalOpened || dropdownOpened}>
      <S.MainWrapper>
        <S.TagPanel>
          <S.TagGroup>
            {mockTagList.map((tag, index) => (
              <S.Tag key={index} color={tag.color}>
                {tag.name}
              </S.Tag>
            ))}
          </S.TagGroup>
          <S.ButtonGroup>
            <S.BtnSaved size="md">Saved</S.BtnSaved>
            <S.BtnShare size="md">Share</S.BtnShare>
          </S.ButtonGroup>
        </S.TagPanel>
        <S.TitlePanel>
          <S.PageTitle>{dishName}</S.PageTitle>
          <S.PageDescription>
            We analyzed <span>532</span> menus in <span>Melbourne</span>{" "}
            featuring <span>{dishName}</span>
          </S.PageDescription>
        </S.TitlePanel>
        <AnalysisBanner dishName={dishName} />
        <CategoryBanner />
        <FilterBanner />
        <PeopleAlsoSearched />
      </S.MainWrapper>
    </S.Main>
  );
};

export default SearchResult;
