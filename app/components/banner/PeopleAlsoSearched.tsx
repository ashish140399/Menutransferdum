import { COLOR } from "@/app/utilities/constants/colors";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    margin-top: 0;
  `,
  Title: styled.h4`
    font-size: 32px;
    font-weight: 700;
    color: ${COLOR.BROWN};
    margin: 0;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  `,
  Keywords: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 30px;
  `,
  Keyword: styled.button`
    font-size: 18px;
    font-weight: 500px;
    padding: 10px 18px;
    color: ${COLOR.GRAY};
    border: 1px solid ${COLOR.GRAY_BORDER};
    border-radius: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
      border-radius: 12px;
      padding: 8px 14px;
    }
  `,
};

const PeopleAlsoSearched = () => {
  const keywords = [
    "Trending today",
    "avocado",
    "zucchini flower",
    "guanciale",
    "nduja",
    "radicchio",
    "camel milk",
    "sirloin",
    "a5 wagyu",
    "paneer",
    "harissa",
    "buffalo",
    "mozzarella",
    "mozzarella",
    "mozzarella",
    "mozzarella",
    "mozzarella",
    "mozzarella",
    "mozzarella",
    "mozzarella",
    "mozzarella",
    "mozzarella",
    "mozzarella",
    "mozzarella",
    "mozzarella",
    "mozzarella",
    "mozzarella",
    "mozzarella",
    "mozzarella",
  ];
  return (
    <S.Wrapper>
      <S.Title>PEOPLE ALSO SEARCHED</S.Title>
      <S.Keywords>
        {keywords.map((k, i) => (
          <S.Keyword key={i}>{k}</S.Keyword>
        ))}
      </S.Keywords>
    </S.Wrapper>
  );
};

export default PeopleAlsoSearched;
