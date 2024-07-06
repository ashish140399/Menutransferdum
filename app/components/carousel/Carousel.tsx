"use client";

import { COLOR } from "@/app/utilities/constants/colors";
import { useRef } from "react";
import styled, { css } from "styled-components";

const S = {
  Wrapper: styled.div<{ $size: "normal" | "small" }>`
    margin-top: 84px;
    display: block;
    width: 100%;
    ${({ $size }) =>
      $size === "normal"
        ? css`
            background: linear-gradient(
              180deg,
              rgba(251, 138, 34, 0.1) 16%,
              rgba(201, 167, 100, 0.1) 45%,
              rgba(251, 138, 34, 0.1) 70%
            );
          `
        : css``}

    @media (max-width: 768px) {
      margin-top: 60px;
    }
  `,
  CarouselHeader: styled.div<{ $size: "normal" | "small" }>`
    padding: ${({ $size }) => ($size === "normal" ? "0 100px" : "0")};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      padding: 0 16px;
    }
  `,
  Title: styled.h3<{ $icon?: string }>`
    font-size: 24px;
    font-weight: 800;
    line-height: 36px;
    letter-spacing: 0.01em;
    color: ${COLOR.BROWN};
    display: flex;
    align-items: center;
    gap: 16px;

    ${({ $icon }) => {
      if ($icon) {
        return css`
          &::before {
            content: "";
            display: block;
            background: url(${$icon}) no-repeat center center;
            background-size: contain;
            width: 29px;
            height: 29px;

            @media (max-width: 768px) {
              width: 20px;
              height: 20px;
            }
          }
        `;
      }

      return css``;
    }}

    @media (max-width: 768px) {
      font-size: 18px;
      gap: 8px;
    }
  `,
  CarouselControllerPanel: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    & > button {
      width: 32px;
      height: 32px;
      background: ${COLOR.BROWN};
      border-radius: 50%;
      border: none;
      cursor: pointer;

      &::before {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        border-width: 0 3px 3px 0;
        border-style: solid;
        border-color: ${COLOR.WHITE};
      }

      &.left::before {
        transform: rotate(135deg);
        margin-left: 6px;
      }

      &.right::before {
        transform: rotate(-45deg);
        margin-left: 2px;
      }

      &.disabled {
        opacity: 0.5;
        cursor: default;
      }

      @media (max-width: 768px) {
        width: 24px;
        height: 24px;

        &::before {
          width: 6px;
          height: 6px;
          border-width: 0 2px 2px 0;
        }

        &.left::before {
          transform: rotate(135deg);
          margin-left: 4px;
        }

        &.right::before {
          transform: rotate(-45deg);
          margin-left: 0px;
        }
      }
    }
  `,
  Container: styled.div`
    width: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 0 !important;
      background: transparent !important;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      border: none;
    }
  `,
  InnerContainer: styled.div<{ $size: "normal" | "small" }>`
    display: flex;
    gap: ${({ $size }) => ($size === "normal" ? "30px" : "12px")};
    padding: ${({ $size }) => ($size === "normal" ? "5px 70px" : "0")};
    flex-wrap: nowrap;
    width: max-content;

    @media (max-width: 768px) {
      padding: ${({ $size }) => ($size === "normal" ? "5px 16px" : "0 16px")};
    }
  `,
};

interface CarouselProps {
  title: string;
  icon?: string;
  children: React.ReactNode[];
  size?: "normal" | "small";
}

const Carousel = ({
  title,
  icon,
  children,
  size = "normal",
}: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLButtonElement>(null);
  const rightRef = useRef<HTMLButtonElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    requestAnimationFrame(() => {
      if (!containerRef.current || !innerRef.current) return;

      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const innerWidth = innerRef.current.getBoundingClientRect().width;

      const itemWidth = parseInt(
        getComputedStyle(innerRef.current.children[0]).width
      );

      let scrollTo = 0;

      if (direction === "left") {
        scrollTo = Math.max(containerRef.current.scrollLeft - itemWidth, 0);
      } else {
        scrollTo = Math.min(
          containerRef.current.scrollLeft + itemWidth,
          innerWidth - containerWidth
        );
      }

      containerRef.current.scrollLeft = scrollTo;

      if (scrollTo <= 0) {
        leftRef.current?.classList.add("disabled");
      } else {
        leftRef.current?.classList.remove("disabled");
      }

      if (scrollTo >= innerWidth - containerWidth) {
        rightRef.current?.classList.add("disabled");
      } else {
        rightRef.current?.classList.remove("disabled");
      }
    });
  };

  return (
    <S.Wrapper $size={size}>
      <S.CarouselHeader $size={size}>
        <S.Title $icon={icon}>{title}</S.Title>
        <S.CarouselControllerPanel>
          <button
            className="left disabled"
            onClick={() => handleScroll("left")}
            ref={leftRef}
          />
          <button
            className="right"
            onClick={() => handleScroll("right")}
            ref={rightRef}
          />
        </S.CarouselControllerPanel>
      </S.CarouselHeader>
      <S.Container ref={containerRef}>
        <S.InnerContainer ref={innerRef} $size={size}>
          {children}
        </S.InnerContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default Carousel;
