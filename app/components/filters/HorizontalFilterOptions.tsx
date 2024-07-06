import { COLOR } from "@/app/utilities/constants/colors";
import { useAppContext } from "@/app/utilities/contexts/AppContext";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    display: none;
    margin-top: 12px;
    width: 92vw;
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 0 !important;
      background: transparent !important;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      border: none;
    }

    @media (max-width: 768px) {
      display: block;
    }
  `,
  InnerContainer: styled.div`
    display: flex;
    gap: 4px;
    flex-wrap: nowrap;
    align-items: center;
    padding: 0;
  `,
  Item: styled.button`
    border: none;
    color: ${COLOR.BROWN};
    font-size: 14px;
    padding: 2px 10px;
    white-space: nowrap;

    & > span {
      font-size: 12px;
    }

    &::after {
      content: url(/assets/icons/x_brown.svg);
      width: 6px;
      height: 6px;
      margin-left: 4px;
    }
  `,
};

const HorizontalFilterOptions = () => {
  const { filterOptions, setFilterOptions } = useAppContext();

  const uncheckLifeStyle = (id: number) => {
    const newOptions: FilterOptions = {
      ...filterOptions,
      lifeStyle: filterOptions.lifeStyle.map((l) => ({
        ...l,
        checked: l.id === id ? false : l.checked,
      })),
    };

    setFilterOptions(newOptions);
  };

  const uncheckCookingStyle = (id: number) => {
    const newOptions: FilterOptions = {
      ...filterOptions,
      cookingStyle: filterOptions.cookingStyle.map((c) => ({
        ...c,
        checked: c.id === id ? false : c.checked,
      })),
    };

    setFilterOptions(newOptions);
  };

  return (
    <S.Wrapper>
      <S.InnerContainer>
        {filterOptions.cookingStyle
          .filter((c) => c.checked)
          .map((c, i) => (
            <S.Item key={`c-${i}`} onClick={() => uncheckCookingStyle(c.id)}>
              {c.name} <span>({c.value})</span>
            </S.Item>
          ))}
        {filterOptions.lifeStyle
          .filter((l) => l.checked)
          .map((l, i) => (
            <S.Item key={`l-${i}`} onClick={() => uncheckLifeStyle(l.id)}>
              {l.name} <span>({l.value})</span>
            </S.Item>
          ))}
      </S.InnerContainer>
    </S.Wrapper>
  );
};

export default HorizontalFilterOptions;
