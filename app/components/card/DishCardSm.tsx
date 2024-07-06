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
    flex-direction: column;
    gap: 8px;
    width: 180px;
    height: max-content;
  `,
  Tags: styled.div`
    display: flex;
    gap: 8px;
  `,
  Tag: styled.div<{ $color: string }>`
    font-size: 8px;
    color: ${({ $color }) => $color};
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  `,
  Image: styled.div<{ src: string }>`
    height: 110px;
    background: url(${({ src }) => src}) no-repeat center center;
    background-size: cover;
    border-radius: 8px;
    position: relative;
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
  `,
  CompanyLogo: styled.div<{ src: string }>`
    width: 34px;
    height: 34px;
    background: url(${({ src }) => src}) no-repeat center center;
    background-size: cover;
    border-radius: 6px;
  `,
  CompanyInfo: styled.div`
    flex: 1;
  `,
  CompanyName: styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${COLOR.WHITE};
  `,
  CompanyAddress: styled.div`
    font-size: 9px;
    font-weight: 500;
    color: ${COLOR.WHITE};
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  Price: styled.div`
    font-size: 12px;
    font-weight: 700;
    color: ${COLOR.BROWN};
  `,
  Name: styled.div`
    font-size: 15px;
    font-weight: 500;
    color: ${COLOR.BLACK_TITLE};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,
  CardBottom: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  RestaurantPanel: styled.div`
    display: flex;
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    gap: 8px;
    color: ${COLOR.BLACK_TITLE};
    margin-top: 8px;

    & > div {
      display: block;
      letter-spacing: 0;
      max-width: 100px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      &::before {
        width: 10px;
        height: 10px;
        margin-right: 4px;
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

  ButtonGroup: styled.div`
    display: flex;
    justify-content: space-between;

    & > button {
      font-size: 11px;
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

      &.call::before {
        background: url(/assets/icons/call.svg) no-repeat center center;
      }
    }
  `,
};

interface DishCardLdProps {
  menu: Menu;
  isSelected: boolean;
  onClick: () => void;
}

const DishCardSm = ({ menu, isSelected, onClick }: DishCardLdProps) => {
  return (
    <S.Card $selected={isSelected} onClick={onClick}>
      <S.Tags>
        {menu.tags?.map((tag, index) => (
          <S.Tag $color={tag.color} key={index}>
            {tag.name}
          </S.Tag>
        ))}
      </S.Tags>
      <S.Image src={menu.image}>
        <S.Like $active={menu.like} />
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
        <S.Price>${menu.price}</S.Price>
        <S.Name>{menu.dish_name}</S.Name>
        <S.CardBottom>
          <S.RestaurantPanel>
            <S.LocalOrigin>{menu.local_origin}</S.LocalOrigin>
            <S.Distance>18min</S.Distance>
            <S.Rate>{menu.rate}</S.Rate>
          </S.RestaurantPanel>
        </S.CardBottom>
        {isSelected && (
          <S.ButtonGroup>
            <button className="website">Website</button>
            <button className="call">Call</button>
          </S.ButtonGroup>
        )}
      </S.Content>
    </S.Card>
  );
};

export default DishCardSm;
