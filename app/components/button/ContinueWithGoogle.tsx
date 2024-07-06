import { COLOR } from "@/app/utilities/constants/colors";
import styled from "styled-components";

const S = {
  Button: styled.button`
    font-size: 16px;
    font-weight: 500;
    border: 1px solid ${COLOR.GRAY_BORDER};
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    &::before {
      content: "";
      display: block;
      width: 18px;
      height: 18px;
      background: url(/assets/icons/google_color.svg) center center no-repeat;
      background-size: contain;
    }
  `,
};

const ContinueWithGoogle = () => {
  return <S.Button>Continue with Google</S.Button>;
};

export default ContinueWithGoogle;
