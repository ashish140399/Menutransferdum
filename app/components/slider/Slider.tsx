import { COLOR } from "@/app/utilities/constants/colors";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    user-select: none;
  `,
  SliderContainer: styled.div`
    position: relative;
    cursor: pointer;
    touch-action: none;
  `,
  SliderRail: styled.div<{ $percent: number }>`
    display: block;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: ${COLOR.GRAY_BG};

    &::before {
      content: "";
      display: block;
      width: ${({ $percent }) => $percent}%;
      height: 8px;
      border-radius: 4px;
      background: ${COLOR.BROWN};
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
  `,
  ToolTip: styled.span`
    position: absolute;
    font-size: 12px;
    font-weight: 600;
    box-shadow: 0px 0px 10px 0px ${COLOR.BLACK_SHADOW};
    /* border: 1px solid ${COLOR.BROWN}; */
    background: ${COLOR.WHITE};
    border-radius: 4px;
    padding: 8px 12px;
    left: 50%;
    top: -40px;
    transform: translateX(-50%);

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 8px;
      border-color: ${COLOR.WHITE} #00000010 #00000010 #00000010;
      position: absolute;
      left: 50%;
      bottom: -16px;
      transform: translateX(-50%);
    }
  `,
  LabelPanel: styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    align-items: center;
    color: ${COLOR.GRAY_FILTER};
  `,
};

interface SliderProps {
  min?: number;
  max?: number;
  value?: number;
  setValue: (value: number) => void;
  unit?: string;
}

const Slider = ({
  min = 0,
  max = 100,
  value = 10,
  setValue,
  unit = "km",
}: SliderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMoving, setIsMoving] = useState(false);

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e: {
    clientX: number;
  }) => {
    if (!ref.current) return;

    setIsMoving(true);

    const bounds = ref.current.getBoundingClientRect();
    const x = Math.max(e.clientX - bounds.left, 0);
    const percent = Math.min(Math.floor((x / bounds.width) * 100), 100);

    const newValue = Math.floor((max - min) * (percent / 100)) + min;

    setValue(newValue);
  };

  useEffect(() => {
    const handleMouseMove: EventListener = (e) => {
      if (!isMoving || !ref.current) return;

      const bounds = ref.current.getBoundingClientRect();
      const x = Math.max((e as MouseEvent).clientX - bounds.left, 0);
      const percent = Math.min(Math.floor((x / bounds.width) * 100), 100);

      const newValue = Math.floor((max - min) * (percent / 100)) + min;

      setValue(newValue);
    };

    const handleMouseUp = () => {
      setIsMoving(false);
    };

    document.addEventListener("pointermove", handleMouseMove);
    document.addEventListener("pointerup", handleMouseUp);
    document.addEventListener("pointerleave", handleMouseUp);

    return () => {
      document.removeEventListener("pointermove", handleMouseMove);
      document.removeEventListener("pointerup", handleMouseUp);
      document.removeEventListener("pointerleave", handleMouseUp);
    };
  }, [isMoving, max, min, setValue]);

  return (
    <S.Wrapper>
      <S.SliderContainer ref={ref} onPointerDown={handleMouseDown}>
        <S.SliderRail $percent={Math.floor((value / (max - min)) * 100)} />
        <S.Thumb $percent={Math.floor((value / (max - min)) * 100)}>
          <S.ToolTip>
            {value}
            {unit}
          </S.ToolTip>
        </S.Thumb>
      </S.SliderContainer>
      <S.LabelPanel>
        <span>
          {min}
          {unit}
        </span>
        <span>
          {max}
          {unit}
        </span>
      </S.LabelPanel>
    </S.Wrapper>
  );
};

export default Slider;
