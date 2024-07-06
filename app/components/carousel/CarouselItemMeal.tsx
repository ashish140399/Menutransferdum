import { COLOR } from "@/app/utilities/constants/colors";
import styled from "styled-components";

const S = {
  Card: styled.div`
    min-width: 370px;
    border-radius: 20px;
    box-shadow: 0px 2px 8px 0px #0000002e;
    overflow: hidden;

    @media (max-width: 768px) {
      min-width: 280px;
    }
  `,
  Image: styled.div<{ src: string }>`
    height: 165px;
    background: url(${({ src }) => src}) no-repeat center center;
    background-size: cover;
    position: relative;

    @media (max-width: 768px) {
      height: 125px;
    }
  `,
  Featured: styled.div`
    width: 35px;
    height: 35px;
    display: block;
    position: absolute;
    top: 10px;
    right: 14px;
    background: url(/assets/icons/megaphone.svg) no-repeat center center;
    background-size: contain;
  `,
  CompanyLogo: styled.div<{ src: string }>`
    width: 92px;
    height: 92px;
    background: url(${({ src }) => src}) no-repeat center center;
    background-size: contain;
    border-radius: 50% 50%;
    position: absolute;
    right: 16px;
    bottom: 0;
    transform: translateY(50%);

    @media (max-width: 768px) {
      width: 70px;
      height: 70px;
    }
  `,
  Content: styled.div`
    padding: 16px 24px;
  `,
  Name: styled.div`
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    color: ${COLOR.BLACK_TITLE};

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: normal;
    }
  `,
  Description: styled.div`
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    color: ${COLOR.BLACK_TITLE};

    @media (max-width: 768px) {
      font-size: 11px;
      line-height: normal;
    }
  `,
  CardBottom: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  RestaurantPanel: styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    gap: 12px;
    color: ${COLOR.BLACK_TITLE};
    margin-top: 8px;

    & > div {
      display: flex;
      gap: 4px;

      &::before {
        width: 12px;
        height: 10px;
      }
    }

    @media (max-width: 768px) {
      font-size: 10px;
      line-height: normal;

      & > div {
        &::before {
          width: 10px;
          height: 8px;
        }
      }
    }
  `,
  LocalOrigin: styled.div`
    &::before {
      content: url(/assets/icons/origin.svg);
    }
  `,
  Distance: styled.div`
    &::before {
      content: url(/assets/icons/distance.svg);
    }
  `,
  Rate: styled.div`
    &::before {
      content: url(/assets/icons/rate.svg);
    }
  `,
  Price: styled.div`
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    color: ${COLOR.BLACK_PRICE};

    @media (max-width: 768px) {
      font-size: 14px;
    }
  `,
};

const CarouselItemMeal = ({ menu }: { menu: Menu }) => {
  return (
    <S.Card>
      <S.Image src={menu.image}>
        {menu.is_featured && <S.Featured />}
        <S.CompanyLogo src={menu.restaurant.image} />
      </S.Image>
      <S.Content>
        <S.Name>{menu.dish_name}</S.Name>
        <S.Description>{menu.description}</S.Description>
        <S.CardBottom>
          <S.RestaurantPanel>
            <S.LocalOrigin>{menu.local_origin}</S.LocalOrigin>
            <S.Distance>18min</S.Distance>
            <S.Rate>{menu.rate}</S.Rate>
          </S.RestaurantPanel>
          <S.Price>${menu.price}</S.Price>
        </S.CardBottom>
      </S.Content>
    </S.Card>
  );
};

export default CarouselItemMeal;
