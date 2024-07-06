import { useAppContext } from "@/app/utilities/contexts/AppContext";
import { useState } from "react";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    width: 19px;
    height: 19px;
    position: relative;
    cursor: pointer;
    display: none;

    @media (max-width: 768px) {
      display: block;
    }

    & span {
      display: flex;
      width: 19px;
      height: 2px;
      position: absolute;
      background: #000000;
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        opacity 0.55s ease;
      top: 9px;
    }
    & span:first-child {
      top: 4px;
    }
    & span:nth-last-child(2) {
      top: 14px;
    }

    &.opened span {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, 3px);
    }
    &.opened span:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }
    &.opened span:nth-last-child(2) {
      transform: rotate(-45deg) translate(1px, -6px);
    }
  `,
};

const Hamburger = () => {
  const { dropdownOpened, setDropdownOpened } = useAppContext();

  return (
    <S.Wrapper
      className={dropdownOpened ? "opened" : ""}
      onClick={() => setDropdownOpened(!dropdownOpened)}
    >
      <span />
      <span />
      <span />
    </S.Wrapper>
  );
};

export default Hamburger;
