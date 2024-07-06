import { COLOR } from "@/app/utilities/constants/colors";
import { useAppContext } from "@/app/utilities/contexts/AppContext";
import styled from "styled-components";

const S = {
  Overlay: styled.div<{ $opened: boolean }>`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: ${COLOR.BLACK_OVERLAY};
    visibility: hidden;
    overflow: hidden;
    transition: visibility 0.3s linear, opacity 0.3s linear;
    z-index: 13;
    visibility: ${({ $opened }) => ($opened ? "visible" : "hidden")};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `,
  Dropup: styled.div<{ $opened: boolean }>`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    background: ${COLOR.WHITE};
    transform: translateY(${({ $opened }) => ($opened ? 0 : "100%")});
    transition: transform 0.3s ease-in-out;
  `,
  TitlePanel: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
  `,
  BtnClose: styled.button`
    border: none;
    width: 12px;
    height: 12px;
    background: url(/assets/icons/close_black.svg) no-repeat center center;
    background-size: contain;
    display: block;
  `,
  BtnClear: styled.button`
    border: none;
    font-size: 14;
  `,
  SortPanel: styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
  `,
  SortItem: styled.div`
    font-size: 16px;
    color: ${COLOR.BLACK_LINK};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      font-weight: 600;
    }
  `,
  Check: styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${COLOR.BROWN};

    &::before {
      content: "";
      width: 4px;
      height: 8px;
      display: block;
      border-width: 0 2px 2px 0;
      border-color: ${COLOR.WHITE};
      border-style: solid;
      transform: rotate(45deg);
      margin-left: 7px;
      margin-top: 4px;
    }
  `,
};

const Dropup = () => {
  const { dropupOpened, setDropupOpened, sortOption, setSortOption } =
    useAppContext();

  const sortOptions = [
    "Nearest",
    "Highest price",
    "Lowest price",
    "Highest rating",
  ];

  return (
    <S.Overlay $opened={dropupOpened} onClick={() => setDropupOpened(false)}>
      <S.Dropup
        $opened={dropupOpened}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <S.TitlePanel>
          <S.BtnClose onClick={() => setDropupOpened(false)} />
          Sort
          <S.BtnClear onClick={() => setSortOption("")}>Clear</S.BtnClear>
        </S.TitlePanel>
        <S.SortPanel>
          {sortOptions.map((s, index) => (
            <S.SortItem key={index} onClick={() => setSortOption(s)}>
              {s}
              {s === sortOption && <S.Check />}
            </S.SortItem>
          ))}
        </S.SortPanel>
      </S.Dropup>
    </S.Overlay>
  );
};

export default Dropup;
