import { COLOR } from "@/app/utilities/constants/colors";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    gap: 4px;

    & > button {
      font-size: 14px;
      border-radius: 8px;
      height: 36px;
      padding: 8px 12px;
      display: flex;
      align-items: center;
      gap: 4px;
      border: 1px solid ${COLOR.GRAY_BORDER};
      color: ${COLOR.GRAY_FILTER};
    }

    @media (max-width: 768px) {
      margin-top: 16px;

      & > button {
        font-size: 10px;
        border-radius: 6px;
      }
    }

    @media (max-width: 480px) {
      & > button > span {
        display: none;
      }
    }
  `,
  BtnLeft: styled.button`
    &::before {
      content: "";
      width: 20px;
      height: 20px;
      background: url(/assets/icons/arrow_left.svg) no-repeat center center;
      display: block;

      @media (max-width: 768px) {
        width: 12px;
        height: 12px;
      }
    }
  `,
  BtnRight: styled.button`
    &::after {
      content: "";
      width: 20px;
      height: 20px;
      background: url(/assets/icons/arrow_right.svg) no-repeat center center;
      display: block;

      @media (max-width: 768px) {
        width: 12px;
        height: 12px;
      }
    }
  `,
  PageNumbers: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
  `,
  PageNumber: styled.button<{ $active: boolean }>`
    color: ${({ $active }) => ($active ? COLOR.BROWN : COLOR.GRAY_FILTER)};
    font-size: 14px;
    font-weight: 400;
    width: 40px;
    height: 40px;
    border: none;

    @media (max-width: 768px) {
      font-size: 10px;

      &:disabled {
        width: auto;
      }
    }

    @media (max-width: 400px) {
      width: 30px;
    }
  `,
};

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  selectPage: (page: number) => void;
}

const Pagination = ({
  totalPages,
  currentPage,
  selectPage,
}: PaginationProps) => {
  const generatePageNumbers = () => {
    const numbers: number[] = [];

    numbers.push(1);

    if (currentPage < 4 || currentPage > totalPages - 3) {
      numbers.push(2);
      numbers.push(3);
      numbers.push(-1); // ...
      numbers.push(totalPages - 2);
      numbers.push(totalPages - 1);
    } else {
      numbers.push(-1); // ...
      numbers.push(currentPage - 1);
      numbers.push(currentPage);
      numbers.push(currentPage + 1);
      numbers.push(-1); // ...
    }

    numbers.push(totalPages);

    return numbers;
  };

  return (
    <S.Wrapper>
      <S.BtnLeft onClick={() => selectPage(Math.max(currentPage - 1, 1))}>
        <span>Previous</span>
      </S.BtnLeft>
      <S.PageNumbers>
        {generatePageNumbers().map((number, index) => (
          <S.PageNumber
            $active={number == currentPage}
            key={index}
            disabled={number === -1}
            onClick={() => selectPage(number)}
          >
            {number === -1 ? "..." : number}
          </S.PageNumber>
        ))}
      </S.PageNumbers>
      <S.BtnRight
        onClick={() => selectPage(Math.min(currentPage + 1, totalPages))}
      >
        <span>Next</span>
      </S.BtnRight>
    </S.Wrapper>
  );
};

export default Pagination;
