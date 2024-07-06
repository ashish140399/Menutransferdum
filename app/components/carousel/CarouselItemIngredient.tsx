import { COLOR } from "@/app/utilities/constants/colors";
import styled from "styled-components";

const S = {
  Card: styled.div<{ src: string }>`
    min-width: 300px;
    height: 200px;
    border-radius: 20px;
    box-shadow: 0px 2px 8px 0px #0000002e;
    background: url(${({ src }) => src}) no-repeat center center;
    background-size: cover;
    position: relative;

    @media (max-width: 768px) {
      min-width: 225px;
      height: 155px;
    }
  `,
  Content: styled.div`
    padding: 16px 24px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 25.29%, #000000 100%);
    color: ${COLOR.WHITE};
    height: 115px;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column-reverse;
    border-radius: 0 0 20px 20px;
  `,
  Name: styled.div`
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: normal;
    }
  `,
  Description: styled.div`
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
      font-size: 11px;
      line-height: normal;
    }
  `,
};

interface CardProps {
  ingredient: Ingredient;
}

const CarouselItemIngredient = ({ ingredient }: CardProps) => {
  return (
    <S.Card src={ingredient.image}>
      <S.Content>
        <S.Description>{ingredient.description}</S.Description>
        <S.Name>{ingredient.name}</S.Name>
      </S.Content>
    </S.Card>
  );
};

export default CarouselItemIngredient;
