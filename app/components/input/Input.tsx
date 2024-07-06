import { COLOR } from "@/app/utilities/constants/colors";
import { useState } from "react";
import styled, { css } from "styled-components";

const S = {
  Wrapper: styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  `,
  Label: styled.div<{ $required?: boolean }>`
    font-size: 14px;
    color: ${COLOR.BLACK_DESCRIPTION};

    ${({ $required }) =>
      $required &&
      css`
        &::after {
          content: "*";
          color: ${COLOR.BROWN};
          margin-left: 4px;
        }
      `}
  `,
  InputWrapper: styled.div`
    position: relative;
  `,
  Input: styled.input`
    width: 100%;
    font-size: 14px;
    padding: 12px 16px;
    border: 1px solid ${COLOR.GRAY_BORDER};
    border-radius: 8px;
    outline: none;

    &:active,
    &:focus,
    &:focus-visible {
      border-color: ${COLOR.BROWN};
    }
  `,
  ShowPassword: styled.button<{ $showType: "text" | "password" }>`
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 16px;
    height: 16px;
    display: block;
    border: none;
    ${({ $showType }) =>
      $showType == "text"
        ? css`
            background: url(/assets/icons/eye_open.svg) no-repeat center center;
          `
        : css`
            background: url(/assets/icons/eye_close.svg) no-repeat center center;
          `}
  `,
  Error: styled.p``,
};

interface InputProps {
  label?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password";
}

const Input = ({
  label,
  required,
  error,
  value,
  onChange,
  type = "text",
}: InputProps) => {
  const [showType, setShowType] = useState<"text" | "password">(type);

  return (
    <S.Wrapper>
      {label && <S.Label $required={required}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input type={showType} value={value} onChange={onChange} />
        {type === "password" && (
          <S.ShowPassword
            $showType={showType}
            onClick={() =>
              setShowType(showType == "password" ? "text" : "password")
            }
          />
        )}
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default Input;
