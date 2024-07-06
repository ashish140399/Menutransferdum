import { COLOR } from "@/app/utilities/constants/colors";
import { useAppContext } from "@/app/utilities/contexts/AppContext";
import styled from "styled-components";

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
  Selected: styled.div`
    font-size: 16px;
    color: ${COLOR.GRAY_FILTER};
  `,
  ButtonGroup: styled.div`
    margin-top: 8px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  `,
  Button: styled.button`
    font-size: 16px;
    color: ${COLOR.GRAY_DISABLE};
    border: 1px solid ${COLOR.GRAY_BORDER};
    padding: 0 10px;
    height: 30px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 4px;

    & > span {
      font-size: 12px;
    }

    &.active {
      color: ${COLOR.BROWN};
      border: 1px solid ${COLOR.BROWN};

      &::before {
        content: "";
        display: block;
        width: 4px;
        height: 6px;
        border: 2px solid ${COLOR.BROWN};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        margin-right: 2px;
      }
    }
  `,
  ViewMore: styled.div`
    font-size: 16px;
    color: ${COLOR.BROWN};
    border: none;
    cursor: pointer;
  `,
};

const CookingStyleFilter = () => {
  const { filterOptions, setFilterOptions } = useAppContext();

  const updateCookingStyleOptions = (id: number) => {
    const newOptions: FilterOptions = {
      ...filterOptions,
      cookingStyle: filterOptions.cookingStyle.map((l) => {
        let checked = l.checked;

        if (l.id === -1) {
          checked = false;
        } else if (l.id === id) {
          checked = !checked;
        }

        return {
          ...l,
          checked,
        };
      }),
    };

    setFilterOptions(newOptions);
  };

  return (
    <S.Wrapper>
      <S.Title>
        Cooking style
        <button onClick={() => updateCookingStyleOptions(-1)}>Clear</button>
      </S.Title>
      <S.Selected>
        Selected{" "}
        <span className="brown">
          {filterOptions.cookingStyle.filter((c) => c.checked)?.length || 0}
        </span>{" "}
        / {filterOptions.cookingStyle.length}
      </S.Selected>
      <S.ButtonGroup>
        {filterOptions.cookingStyle.map((c, i) => (
          <S.Button
            key={i}
            className={c.checked ? "active" : ""}
            onClick={() => updateCookingStyleOptions(c.id)}
          >
            {c.name} <span>({c.value})</span>
          </S.Button>
        ))}
      </S.ButtonGroup>
      <S.ViewMore>View more ...</S.ViewMore>
    </S.Wrapper>
  );
};

export default CookingStyleFilter;
