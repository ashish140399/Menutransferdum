import styled from "styled-components";
import Carousel from "../carousel/Carousel";
import { mockMenuList } from "@/app/utilities/constants/mock";
import CarouselItemMeal from "../carousel/CarouselItemMeal";

const S = {
  Wrapper: styled.div`
    @media (max-width: 768px) {
    }
  `,
};

export default function MenuSlider() {
  return (
    <S.Wrapper>
      <Carousel title="Meals of the week" icon="/assets/icons/meal.svg">
        {mockMenuList.map((m, index) => (
          <CarouselItemMeal menu={m} key={index}></CarouselItemMeal>
        ))}
      </Carousel>
    </S.Wrapper>
  );
}
