import { COLOR } from "@/app/utilities/constants/colors";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    margin-top: 120px;
    padding: 0 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 32px;

    @media (max-width: 768px) {
      margin-top: 70px;
      padding: 0 16px;
      flex-direction: column;
    }
  `,
  BannerTitle: styled.h4`
    font-size: 24px;
    font-weight: 700;
    color: ${COLOR.BLACK};
    align-self: flex-start;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  `,
  BannerContents: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 36px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 32px;
    }
  `,
  Item: styled.div<{ src: string }>`
    background: url(${({ src }) => src}) no-repeat center;
    background-size: contain;
    width: 338px;
    height: 190px;
    display: block;
  `,
};

const UsedBy = () => {
  const items = ["foodies.jpg", "home_cooks.jpg", "restauranteurs.jpg"];
  return (
    <S.Wrapper>
      <S.BannerTitle>Used by</S.BannerTitle>
      <S.BannerContents>
        {items.map((item, index) => (
          <S.Item src={`/assets/background/${item}`} key={index} />
        ))}
      </S.BannerContents>
    </S.Wrapper>
  );
};

export default UsedBy;
