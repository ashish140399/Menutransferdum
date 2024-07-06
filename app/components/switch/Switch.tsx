import { COLOR } from "@/app/utilities/constants/colors";
import { useAppContext } from "@/app/utilities/contexts/AppContext";
import styled, { css } from "styled-components";

const S = {
  Switch: styled.span`
    padding: 4px;
    overflow: hidden;
    width: 76px;
    height: 30px;
    position: fixed;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid ${COLOR.BLACK};
    border-radius: 20px;
    cursor: pointer;
    z-index: 12;
    background: ${COLOR.WHITE};
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  `,
  SwitchInner: styled.span<{ $opened: boolean }>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    left: ${({ $opened }) => ($opened ? "11px" : "-33px")};
    top: 3px;
    transition: left 0.3s ease-in-out;
  `,
  Thumb: styled.span<{ $opened: boolean }>`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${COLOR.BLACK};
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: "";
      width: 12px;
      height: 12px;
      display: block;
      ${({ $opened }) =>
        $opened
          ? css`
              background: url(/assets/icons/list.svg) no-repeat center center;
            `
          : css`
              background: url(/assets/icons/map.svg) no-repeat center center;
            `};
      background-size: contain;
    }
  `,
  Label: styled.label`
    font-size: 14px;
    color: ${COLOR.BLACK};
    font-weight: 500;
    cursor: pointer;
    user-select: none;
  `,
};

const Switch = () => {
  const { mapOpened, setMapOpened } = useAppContext();

  return (
    <S.Switch onClick={() => setMapOpened(!mapOpened)}>
      <S.SwitchInner $opened={mapOpened}>
        <S.Label>List</S.Label>
        <S.Thumb $opened={mapOpened} />
        <S.Label>Map</S.Label>
      </S.SwitchInner>
    </S.Switch>
  );
};

export default Switch;
