import { COLOR } from "@/app/utilities/constants/colors";
import styled, { css } from "styled-components";

export const PrimaryButton = styled.button<{
  size?: "lg" | "md" | "sm";
}>`
  border-radius: 16px;
  background-color: ${COLOR.BROWN};
  color: ${COLOR.WHITE};
  border: none;
  cursor: pointer;
  font-weight: 700;
  transition: 0.5s background-color;

  ${({ size }) => {
    if (size == "lg" || !size) {
      return css`
        padding: 18px 24px;
        font-size: 18px;
      `;
    } else if (size == "md") {
      return css`
        padding: 12px 18px;
        font-size: 14px;
      `;
    } else {
      return css`
        padding: 8px 12px;
        font-size: 12px;
      `;
    }
  }}

  &:hover {
    background-color: ${COLOR.BROWN_HOVER};
  }
`;

export const SecondaryButton = styled.button<{
  size?: "lg" | "md" | "sm";
}>`
  border-radius: 16px;
  background-color: transparent;
  border: 2px solid transparent;
  cursor: pointer;
  font-weight: 700;
  transition: 0.5s border-color;

  ${({ size }) => {
    if (size == "lg" || !size) {
      return css`
        padding: 16px 24px;
        font-size: 18px;
      `;
    } else if (size == "md") {
      return css`
        padding: 10px 18px;
        font-size: 14px;
      `;
    } else {
      return css`
        padding: 6px 12px;
        font-size: 12px;
      `;
    }
  }}

  &.btn-login {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${COLOR.BLACK};

    &:hover {
      border-color: ${COLOR.BLACK};
    }

    &::before {
      content: "";
      display: block;
      width: 16px;
      height: 18px;
      background: url(/assets/icons/lock.svg) center center no-repeat;
      background-size: contain;
    }
  }

  &.btn-locate {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${COLOR.BROWN};

    &:hover {
      border-color: ${COLOR.BROWN};
    }

    &::before {
      content: "";
      display: block;
      width: 16px;
      height: 18px;
      background: url(/assets/icons/locate.svg) center center no-repeat;
      background-size: contain;
    }
  }
`;
