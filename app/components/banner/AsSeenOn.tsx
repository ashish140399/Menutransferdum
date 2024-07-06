import { COLOR } from "@/app/utilities/constants/colors";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    display: flex;
    margin: 50px 0;
    padding: 0 70px;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      margin: 30px 0;
      padding: 0 16px;
    }
  `,
  BannerTitle: styled.h4`
    font-size: 24px;
    font-weight: 700;
    color: ${COLOR.BLACK};

    @media (max-width: 768px) {
      font-size: 20px;
    }
  `,
  BannerItems: styled.div`
    display: flex;
    gap: 16px;
    align-items: center;

    max-width: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 0 !important;
      background: transparent !important;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      border: none;
    }
  `,
  BannerItem: styled.div<{ src: string }>`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 24px;
    font-weight: 600;
    color: ${COLOR.BLACK_TITLE};

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 36px;
      background: url(${({ src }) => src}) no-repeat center;
      background-size: contain;
    }

    @media (max-width: 768px) {
      font-size: 20px;

      &::before {
        width: 29px;
        height: 29px;
      }
    }
  `,
};

const AsSeenOn = () => {
  const items = [
    { img: "boltshift.svg", title: "Boltshift" },
    { img: "lightbox.svg", title: "Lightbox" },
    { img: "featherdev.svg", title: "FeatherDev" },
    { img: "spherule.svg", title: "Spherule" },
    { img: "globalbank.svg", title: "GlobalBank" },
  ];
  return (
    <S.Wrapper>
      <S.BannerTitle>As seen on</S.BannerTitle>
      <S.BannerItems>
        {items.map((item, index) => (
          <S.BannerItem src={`/assets/icons/${item.img}`} key={index}>
            {item.title}
          </S.BannerItem>
        ))}
      </S.BannerItems>
    </S.Wrapper>
  );
};

export default AsSeenOn;
