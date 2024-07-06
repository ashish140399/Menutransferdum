import { COLOR } from "@/app/utilities/constants/colors";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    user-select: none;
    position: relative;
  `,
  SliderContainer: styled.div`
    position: relative;
    height: 24px;
    display: flex;
    align-items: center;
    touch-action: none;
  `,
  SliderRail: styled.div<{ $minPercent: number; $maxPercent: number }>`
    display: flex;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: ${COLOR.BROWN};
    justify-content: space-between;

    &::before,
    &::after {
      content: "";
      display: block;
      height: 8px;
      border-radius: 4px;
      background: ${COLOR.GRAY_BG};
    }

    &::before {
      width: ${({ $minPercent }) => $minPercent}%;
    }

    &::after {
      width: ${({ $maxPercent }) => 100 - $maxPercent}%;
    }
  `,
  Thumb: styled.span<{ $percent: number }>`
    width: 24px;
    height: 24px;
    background: ${COLOR.WHITE};
    border-radius: 50%;
    border: 1px solid ${COLOR.BROWN};
    position: absolute;
    left: ${({ $percent }) => $percent}%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  `,
  LabelPanel: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-top: 16px;

    & > div {
      flex: 1;
      padding: 6px 12px;
      font-size: 14px;
      color: ${COLOR.GRAY_FILTER};
      border-radius: 8px;
      border: 1px solid ${COLOR.GRAY_BORDER};

      & div {
        display: flex;
        align-items: center;
      }

      & span {
        font-size: 18px;
        color: ${COLOR.GRAY_NAME};
      }
    }
  `,
};

interface RangeSliderProps {
  min?: number;
  max?: number;
  minValue?: number;
  setMinValue: (value: number) => void;
  maxValue?: number;
  setMaxValue: (value: number) => void;
}

const RangeSlider = ({
  min = 0,
  max = 100,
  minValue = 10,
  setMinValue,
  maxValue = 30,
  setMaxValue,
}: RangeSliderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeThumbIndex, setActiveThumbIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove: EventListener = (e) => {
      if (activeThumbIndex == 0 || !ref.current) return;

      const bounds = ref.current.getBoundingClientRect();
      const x = Math.max((e as MouseEvent).clientX - bounds.left, 0);
      const percent = Math.min(Math.floor((x / bounds.width) * 100), 100);

      if (activeThumbIndex === 1) {
        const newValue = Math.min(
          Math.floor((max - min) * (percent / 100)) + min,
          maxValue - 1
        );

        setMinValue(newValue);
      } else {
        const newValue = Math.max(
          Math.floor((max - min) * (percent / 100)) + min,
          minValue + 1
        );

        setMaxValue(newValue);
      }
    };

    document.addEventListener("pointermove", handleMouseMove);
    document.addEventListener("pointerup", () => setActiveThumbIndex(0));
    document.addEventListener("pointerleave", () => setActiveThumbIndex(0));

    return () => {
      document.removeEventListener("pointermove", handleMouseMove);
      document.removeEventListener("pointerup", () => setActiveThumbIndex(0));
      document.removeEventListener("pointerleave", () =>
        setActiveThumbIndex(0)
      );
    };
  }, [
    activeThumbIndex,
    max,
    maxValue,
    min,
    minValue,
    setMaxValue,
    setMinValue,
  ]);

  return (
    <S.Wrapper>
      <S.SliderContainer ref={ref}>
        <S.SliderRail
          $minPercent={Math.floor((minValue / (max - min)) * 100)}
          $maxPercent={Math.floor((maxValue / (max - min)) * 100)}
        />
        <S.Thumb
          $percent={Math.floor((minValue / (max - min)) * 100)}
          onPointerDown={(e) => {
            if (!ref.current) return;

            setActiveThumbIndex(1);

            const bounds = ref.current.getBoundingClientRect();
            const x = Math.max(e.clientX - bounds.left, 0);
            const percent = Math.min(Math.floor((x / bounds.width) * 100), 100);
            const newValue = Math.min(
              Math.floor((max - min) * (percent / 100)) + min,
              maxValue - 1
            );

            setMinValue(newValue);
          }}
          onPointerMove={(e) => {
            if (activeThumbIndex !== 1 || !ref.current) return;

            const bounds = ref.current.getBoundingClientRect();
            const x = Math.max(e.clientX - bounds.left, 0);
            const percent = Math.min(Math.floor((x / bounds.width) * 100), 100);
            const newValue = Math.min(
              Math.floor((max - min) * (percent / 100)) + min,
              maxValue - 1
            );

            setMinValue(newValue);
          }}
        />
        <S.Thumb
          $percent={Math.floor((maxValue / (max - min)) * 100)}
          onPointerDown={(e) => {
            if (!ref.current) return;

            setActiveThumbIndex(2);

            const bounds = ref.current.getBoundingClientRect();
            const x = Math.max(e.clientX - bounds.left, 0);
            const percent = Math.min(Math.floor((x / bounds.width) * 100), 100);
            const newValue = Math.max(
              Math.floor((max - min) * (percent / 100)) + min,
              minValue + 1
            );

            setMaxValue(newValue);
          }}
          onPointerMove={(e) => {
            if (activeThumbIndex !== 2 || !ref.current) return;

            const bounds = ref.current.getBoundingClientRect();
            const x = Math.max(e.clientX - bounds.left, 0);
            const percent = Math.min(Math.floor((x / bounds.width) * 100), 100);
            const newValue = Math.max(
              Math.floor((max - min) * (percent / 100)) + min,
              minValue + 1
            );

            setMaxValue(newValue);
          }}
        />
      </S.SliderContainer>
      <S.LabelPanel>
        <div>
          <div>Minimum Price</div>
          <div>
            $<span>{minValue}</span>
          </div>
        </div>
        <div>
          <div>Maximum Price</div>
          <div>
            $<span>{maxValue}</span>
          </div>
        </div>
      </S.LabelPanel>
    </S.Wrapper>
  );
};

export default RangeSlider;
