import styled from "styled-components";
import Carousel from "../carousel/Carousel";
import { mockIngredientList } from "@/app/utilities/constants/mock";
import CarouselItemIngredient from "../carousel/CarouselItemIngredient";

const S = {
  Wrapper: styled.div``,
};

export default function IngredientSlider() {
  return (
    <S.Wrapper>
      <Carousel
        title="Ingredients of the week"
        icon="/assets/icons/ingredient.svg"
      >
        {mockIngredientList.map((i, index) => (
          <CarouselItemIngredient
            ingredient={i}
            key={index}
          ></CarouselItemIngredient>
        ))}
      </Carousel>
    </S.Wrapper>
  );
}
