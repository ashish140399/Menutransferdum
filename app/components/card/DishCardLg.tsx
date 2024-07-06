import { COLOR } from "@/app/utilities/constants/colors";
import { useState } from "react";
import styled, { css } from "styled-components";

const S = {
  Card: styled.div<{ $selected: boolean }>`
    cursor: pointer;
    border-radius: 16px;
    border: 1px solid
      ${({ $selected }) => ($selected ? COLOR.BROWN : COLOR.GRAY_BORDER)};
    padding: 16px;
    display: flex;
    gap: 16px;

    @media (max-width: 768px) {
      border-radius: 12px;
      padding: 12px;
    }
  `,
  Image: styled.div<{ src: string }>`
    width: 200px;
    background: url(${({ src }) => src}) no-repeat center center;
    background-size: cover;
    border-radius: 8px;
    position: relative;

    @media (max-width: 768px) {
      width: 135px;
      border-radius: 6px;
    }
  `,
  CompanyPanel: styled.div`
    padding: 8px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 25.29%,
      #000000cc 100%
    );
    color: ${COLOR.WHITE};
    height: 70px;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: flex-end;
    border-radius: 0 0 8px 8px;
    gap: 8px;

    @media (max-width: 768px) {
    }
  `,
  CompanyLogo: styled.div<{ src: string }>`
    width: 34px;
    height: 34px;
    background: url(${({ src }) => src}) no-repeat center center;
    background-size: cover;
    border-radius: 6px;

    @media (max-width: 768px) {
      width: 24px;
      height: 24px;
      border-radius: 4px;
    }
  `,
  CompanyInfo: styled.div`
    flex: 1;
  `,
  CompanyName: styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${COLOR.WHITE};

    @media (max-width: 768px) {
      font-size: 12px;
    }
  `,
  CompanyAddress: styled.div`
    font-size: 9px;
    font-weight: 500;
    color: ${COLOR.WHITE};

    @media (max-width: 768px) {
      font-size: 6px;
    }
  `,
  Content: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  ContentTop: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Tags: styled.div`
    display: flex;
    gap: 16px;

    @media (max-width: 768px) {
      gap: 6px;
    }
  `,
  Tag: styled.div<{ $color: string }>`
    font-size: 10px;
    color: ${({ $color }) => $color};

    @media (max-width: 768px) {
      font-size: 8px;
    }
  `,
  Like: styled.div<{ $active?: boolean }>`
    width: 18px;
    height: 18px;
    display: block;
    ${({ $active }) => {
      return $active
        ? css`
            background: url(/assets/icons/heart_brown.svg) no-repeat center
              center;
          `
        : css`
            background: url(/assets/icons/heart_empty.svg) no-repeat center
              center;
          `;
    }}
    background-size: contain;

    @media (max-width: 768px) {
      width: 12px;
      height: 12px;
    }
  `,
  NamePanel: styled.div`
    min-height: 90px;

    @media (max-width: 768px) {
      min-height: 65px;
    }
  `,
  Name: styled.div`
    font-size: 22px;
    font-weight: 500;
    color: ${COLOR.BLACK_TITLE};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  `,
  Description: styled.div`
    font-size: 14px;
    color: ${COLOR.GRAY_NAME};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  `,
  CardBottom: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,
  RestaurantPanel: styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    gap: 8px;
    color: ${COLOR.BLACK_TITLE};
    margin-top: 8px;

    & > div {
      letter-spacing: 0;
      max-width: 100px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: flex;
      align-items: center;
      gap: 4px;

      &::before {
        width: 12px;
        height: 10px;
        content: "";
        display: block;
        background-size: contain;
      }
    }

    @media (max-width: 768px) {
      font-size: 10px;
      line-height: normal;
      gap: 4px;

      & > div {
        gap: 2px;
        &::before {
          width: 9px;
          height: 8px;
        }
      }
    }
  `,
  LocalOrigin: styled.div`
    &::before {
      background: url(/assets/icons/origin.svg) no-repeat center center;
    }

    @media (max-width: 380px) {
      display: none !important;
    }
  `,
  Distance: styled.div`
    &::before {
      background: url(/assets/icons/distance.svg) no-repeat center center;
    }
  `,
  Rate: styled.div`
    &::before {
      background: url(/assets/icons/rate.svg) no-repeat center center;
    }
  `,
  Price: styled.div`
    font-size: 20px;
    font-weight: 500;
    color: ${COLOR.BLACK_PRICE};

    @media (max-width: 768px) {
      font-size: 14px;
    }
  `,
  ButtonGroup: styled.div`
    display: flex;
    justify-content: space-between;

    & > button {
      font-size: 15px;
      font-weight: 600;
      color: ${COLOR.WHITE};
      background: ${COLOR.BROWN};
      padding: 4px 8px;
      display: flex;
      gap: 4px;
      align-items: center;
      border: none;
      cursor: pointer;
      border-radius: 4px;

      &::before {
        content: "";
        width: 14px;
        height: 14px;
        background-size: contain;
      }

      &.website::before {
        background: url(/assets/icons/website.svg) no-repeat center center;
      }

      &.directions::before {
        background: url(/assets/icons/directions.svg) no-repeat center center;
      }

      &.call::before {
        background: url(/assets/icons/call.svg) no-repeat center center;
      }

      @media (max-width: 768px) {
        font-size: 11px;

        &::before {
          width: 10px;
          height: 10px;
        }
      }
    }
  `,
};

interface DishCardLdProps {
  menu: Menu;
  isSelected: boolean;
  onClick: () => void;
}

const DishCardLg = ({ menu, isSelected, onClick }: DishCardLdProps) => {
  return (
    <S.Card $selected={isSelected} onClick={onClick}>
      <S.Image src={menu.image}>
        {/* {menu.is_featured && <S.Featured />} */}
        <S.CompanyPanel>
          <S.CompanyLogo src={menu.restaurant.image} />
          <S.CompanyInfo>
            <S.CompanyName>{menu.restaurant.name}</S.CompanyName>
            {menu.restaurant.geometry.address && (
              <S.CompanyAddress>
                {menu.restaurant.geometry.address}
              </S.CompanyAddress>
            )}
          </S.CompanyInfo>
        </S.CompanyPanel>
      </S.Image>
      <S.Content>
        <S.ContentTop>
          <S.Tags>
            {menu.tags?.map((tag, index) => (
              <S.Tag $color={tag.color} key={index}>
                {tag.name}
              </S.Tag>
            ))}
          </S.Tags>
          <S.Like $active={menu.like} />
        </S.ContentTop>
        <S.NamePanel>
          <S.Name>{menu.dish_name}</S.Name>
          <S.Description>{menu.description}</S.Description>
        </S.NamePanel>
        <S.CardBottom>
          <S.RestaurantPanel>
            <S.LocalOrigin>{menu.local_origin}</S.LocalOrigin>
            <S.Distance>18min</S.Distance>
            <S.Rate>{menu.rate}</S.Rate>
          </S.RestaurantPanel>
          <S.Price>${menu.price}</S.Price>
        </S.CardBottom>
        {isSelected && (
          <S.ButtonGroup>
            <button className="website">Website</button>
            <button className="directions">Directions</button>
            <button className="call">Call</button>
          </S.ButtonGroup>
        )}
      </S.Content>
    </S.Card>
  );
};

export default DishCardLg;
