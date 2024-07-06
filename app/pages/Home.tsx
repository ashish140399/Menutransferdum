"use client";

import styled, { css } from "styled-components";
import MainBanner from "../components/banner/MainBanner";
import MenuSlider from "../components/banner/MenuSlider";
import IngredientSlider from "../components/banner/IngredientSlider";
import UsedBy from "../components/banner/UsedBy";
import AsSeenOn from "../components/banner/AsSeenOn";
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
};

const Home = () => {
  const { modalOpened, filterOpened, dropdownOpened } = useAppContext();

  return (
    <S.Main $opened={modalOpened || filterOpened || dropdownOpened}>
      <MainBanner />
      <MenuSlider />
      <IngredientSlider />
      <UsedBy />
      <AsSeenOn />
    </S.Main>
  );
};

export default Home;
