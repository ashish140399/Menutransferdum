import { COLOR } from "@/app/utilities/constants/colors";
import styled from "styled-components";

const S = {
  SocialButtonGroup: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 16px;
    @media (max-width: 768px) {
      gap: 12px;
    }
  `,
  SocialButton: styled.button<{ src: string }>`
    width: 40px;
    height: 40px;
    cursor: pointer;
    background: url(${({ src }) => src}) no-repeat center;
    background-size: contain;
    border: 2px solid transparent;
    border-radius: 8px;

    &.border:hover,
    &.border:active {
      border-color: ${COLOR.BROWN};
    }

    @media (max-width: 768px) {
      width: 30px;
      height: 30px;
    }
  `,
};

const SocialButtons = () => {
  const socialButtons = [
    "facebook.svg",
    "twitter.svg",
    "instagram.svg",
    "linkedin.svg",
    "youtube.svg",
  ];

  return (
    <S.SocialButtonGroup>
      {socialButtons.map((s, index) => (
        <S.SocialButton
          src={`/assets/icons/${s}`}
          className={index == 0 ? "" : "border"}
          key={index}
        />
      ))}
    </S.SocialButtonGroup>
  );
};

export default SocialButtons;
