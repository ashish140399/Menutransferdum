import { COLOR } from "@/app/utilities/constants/colors";
import { useAppContext } from "@/app/utilities/contexts/AppContext";
import styled, { css } from "styled-components";

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  Title: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;

    & > button {
      font-size: 14px;
      color: ${COLOR.GRAY_FILTER};
      text-decoration: underline;
      border: none;
      cursor: pointer;
    }
  `,
  Contents: styled.div`
    display: flex;
    gap: 16px;
  `,
  StarGroup: styled.div`
    display: flex;
    gap: 8px;
  `,
  Star: styled.span<{ $isActive?: boolean }>`
    width: 20px;
    height: 20px;
    ${({ $isActive }) => {
      return $isActive
        ? css`
            background-image: url(/assets/icons/rate_brown.svg);
          `
        : css`
            background-image: url(/assets/icons/rate_blank.svg);
          `;
    }}
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
  `,
  Description: styled.div`
    font-size: 14px;
    color: ${COLOR.GRAY_FILTER};
  `,
};

const StarRatingFilter = () => {
  const { filterOptions, setFilterOptions } = useAppContext();

  return (
    <S.Wrapper>
      <S.Title>
        Star rating <button>Clear</button>
      </S.Title>
      <S.Contents>
        <S.StarGroup>
          {[1, 2, 3, 4, 5].map((r, i) => (
            <S.Star
              $isActive={filterOptions.rating > i}
              key={i}
              onClick={() =>
                setFilterOptions({ ...filterOptions, rating: i + 1 })
              }
            />
          ))}
        </S.StarGroup>
        <S.Description>{filterOptions.rating} stars & up</S.Description>
      </S.Contents>
    </S.Wrapper>
  );
};

export default StarRatingFilter;
