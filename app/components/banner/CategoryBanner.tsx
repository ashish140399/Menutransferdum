import { COLOR } from "@/app/utilities/constants/colors";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 24px;
    gap: 10px;
    width: 100%;

    @media (max-width: 768px) {
      gap: 6px;
    }
  `,
  CategoryPanel: styled.div`
    border: 1px solid ${COLOR.GRAY_BORDER};
    border-radius: 10px;

    &.panel1 {
      grid-area: 1 / 1 / 3 / 2;
    }

    @media (max-width: 768px) {
      border-radius: 6px;

      &.panel1 {
        grid-area: 2 / 1 / 3 / 2;
      }
    }
  `,
  PanelTitle: styled.div<{ $icon: string }>`
    padding: 20px;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;

    &::before {
      content: "";
      display: block;
      width: 25px;
      height: 25px;
      background: url(${({ $icon }) => $icon}) no-repeat center center;
      background-size: contain;
    }

    @media (max-width: 1024px) {
      font-size: 16px;
      padding: 16px;

      &::before {
        width: 18px;
        height: 18px;
      }
    }

    @media (max-width: 768px) {
      font-size: 10px;
      padding: 12px 2px;

      &::before {
        width: 12px;
        height: 12px;
      }
    }
  `,
  PanelContent: styled.div<{ $maxheight: number }>`
    border-top: 1px solid ${COLOR.GRAY_BORDER};
    padding: 4px;
    overflow-y: auto;
    color: ${COLOR.BLACK};
    max-height: ${({ $maxheight }) => $maxheight}px;

    @media (max-width: 768px) {
      max-height: 110px;
    }
  `,
  ContentItem: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 10px;

    & span {
      margin: 0 4px;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      font-size: 10px;
      padding: 6px 2px;
    }
  `,
  TotalPanel: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    grid-area: 1 / 2 / 2 / 4;

    @media (max-width: 768px) {
      grid-area: 1 / 1 / 2 / 4;
      gap: 6px;
    }
  `,
  Sum: styled.div<{ $unit: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: 46px;
    font-weight: 700;
    border: 1px solid ${COLOR.GRAY_BORDER};
    border-radius: 16px;
    padding: 16px;
    overflow: hidden;
    text-overflow: ellipsis;

    &::before {
      content: "+";
      font-size: 30px;
      font-weight: 700;
      color: ${COLOR.BROWN};
    }

    &::after {
      content: "${({ $unit }) => $unit}";
      font-size: 24px;
      font-weight: 700;
      margin-left: 12px;
    }

    @media (max-width: 1024px) {
      font-size: 24px;
      padding: 12px;

      &::before {
        font-size: 18px;
      }

      &::after {
        font-size: 16px;
      }
    }

    @media (max-width: 768px) {
      font-size: 20px;
      padding: 8px;
      border-radius: 6px;

      &::before {
        font-size: 13px;
      }

      &::after {
        font-size: 10px;
      }
    }
  `,
};

const CategoryBanner = () => {
  const commonPreparationList: CategoryItem[] = [
    { name: "Smoked", value: 150 },
    { name: "Grilled", value: 120 },
    { name: "Roasted", value: 90 },
    { name: "Boiled", value: 88 },
    { name: "Braised", value: 70 },
    { name: "Fried", value: 50 },
    { name: "Steamed", value: 30 },
    { name: "Boiled", value: 20 },
    { name: "Braised", value: 15 },
    { name: "Fried", value: 10 },
    { name: "Steamed", value: 8 },
  ];

  const totalPreparationValue = commonPreparationList.reduce(
    (acc, item) => acc + item.value,
    0
  );

  const localOriginsList: CategoryItem[] = [
    { name: "Belgium", value: 24 },
    { name: "Australia", value: 19 },
    { name: "France", value: 18 },
    { name: "Portugal", value: 8 },
    { name: "Italy", value: 5 },
    { name: "German", value: 4 },
    { name: "China", value: 4 },
    { name: "Japan", value: 2 },
  ];

  const totalOriginValue = localOriginsList.reduce(
    (acc, item) => acc + item.value,
    0
  );

  const dietaryMentions: CategoryItem[] = [
    { name: "Grass fed", value: 14 },
    { name: "Organic", value: 11 },
    { name: "Gluten free", value: 8 },
    { name: "Paleo", value: 5 },
    { name: "Keto", value: 5 },
    { name: "Jeto", value: 3 },
    { name: "Meto", value: 1 },
    { name: "Peto", value: 1 },
  ];

  const totalDietaryValue = dietaryMentions.reduce(
    (acc, item) => acc + item.value,
    0
  );

  return (
    <S.Wrapper>
      <S.CategoryPanel className="panel1">
        <S.PanelTitle $icon="/assets/icons/preparation.svg">
          Common preparation
        </S.PanelTitle>
        <S.PanelContent $maxheight={280}>
          {commonPreparationList.map((preparation, index) => (
            <S.ContentItem key={index}>
              <span>
                {preparation.name}
                <span className="gray">({preparation.value})</span>
              </span>
              <span className="brown">
                {Math.floor((preparation.value / totalPreparationValue) * 100)}%
              </span>
            </S.ContentItem>
          ))}
        </S.PanelContent>
      </S.CategoryPanel>
      <S.TotalPanel>
        <S.Sum $unit="Mains">120</S.Sum>
        <S.Sum $unit="Entrees">54</S.Sum>
        <S.Sum $unit="Sides">40</S.Sum>
      </S.TotalPanel>
      <S.CategoryPanel className="panel2">
        <S.PanelTitle $icon="/assets/icons/location_black.svg">
          Local origins
        </S.PanelTitle>
        <S.PanelContent $maxheight={180}>
          {localOriginsList.map((origin, index) => (
            <S.ContentItem key={index}>
              <span>
                {origin.name}
                <span className="gray">({origin.value})</span>
              </span>
              <span className="brown">
                {Math.floor((origin.value / totalOriginValue) * 100)}%
              </span>
            </S.ContentItem>
          ))}
        </S.PanelContent>
      </S.CategoryPanel>
      <S.CategoryPanel className="panel3">
        <S.PanelTitle $icon="/assets/icons/diet.svg">
          Dietary mentions
        </S.PanelTitle>
        <S.PanelContent $maxheight={180}>
          {dietaryMentions.map((mention, index) => (
            <S.ContentItem key={index}>
              <span>
                {mention.name}
                <span className="gray">({mention.value})</span>
              </span>
              <span className="brown">
                {Math.floor((mention.value / totalDietaryValue) * 100)}%
              </span>
            </S.ContentItem>
          ))}
        </S.PanelContent>
      </S.CategoryPanel>
    </S.Wrapper>
  );
};

export default CategoryBanner;
