import { COLOR } from "@/app/utilities/constants/colors";
import { useAppContext } from "@/app/utilities/contexts/AppContext";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
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
  List: styled.div`
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  Item: styled.div`
    font-size: 16px;
    height: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 4px;

    & > span.check {
      width: 20px;
      height: 20px;
      border: 1px solid ${COLOR.GRAY_BORDER};
      border-radius: 2px;
    }

    & > span.name {
      flex: 1;
      color: ${COLOR.GRAY_NAME};
    }

    & > span.value {
      color: ${COLOR.GRAY_DISABLE};
      font-size: 12px;
    }

    &.active {
      color: ${COLOR.BROWN};

      & > span.check {
        border: 1px solid ${COLOR.BROWN};
        background: ${COLOR.BROWN};

        &::before {
          content: "";
          display: block;
          width: 4px;
          height: 8px;
          margin-left: 6px;
          margin-top: 2px;
          border: 2px solid ${COLOR.WHITE};
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
          margin-right: 2px;
        }
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

const LifeStyleFilter = () => {
  const { filterOptions, setFilterOptions } = useAppContext();

  const updateLifeStyleOptions = (id: number) => {
    const newOptions: FilterOptions = {
      ...filterOptions,
      lifeStyle: filterOptions.lifeStyle.map((l) => {
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
        Lifestyle{" "}
        <button onClick={() => updateLifeStyleOptions(-1)}>Clear</button>
      </S.Title>
      <S.List>
        {filterOptions.lifeStyle.map((l, i) => (
          <S.Item
            key={i}
            className={l.checked ? "active" : ""}
            onClick={() => updateLifeStyleOptions(l.id)}
          >
            <span className="check" />
            <span className="name">{l.name}</span>
            <span className="value">({l.value})</span>
          </S.Item>
        ))}
      </S.List>
      <S.ViewMore>View more ...</S.ViewMore>
    </S.Wrapper>
  );
};

export default LifeStyleFilter;
