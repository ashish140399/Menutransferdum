import styled from "styled-components";
import Modal from "./Modal";
import { COLOR } from "@/app/utilities/constants/colors";
import Input from "../input/Input";
import { useState } from "react";
import ContinueWithGoogle from "../button/ContinueWithGoogle";

const S = {
  Title: styled.div`
    font-size: 32px;
    font-weight: 500;
    color: ${COLOR.BLACK_PRICE};
    margin: 0;
  `,
  Description: styled.p`
    font-size: 14px;
    color: ${COLOR.GRAY_NAME};
    padding: 12px 0;
    margin: 0;
  `,
  Form: styled.form``,
  BottomPanel: styled.div`
    margin: 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  CheckBox: styled.span`
    font-size: 12px;
    height: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 4px;

    & > span.check {
      width: 10px;
      height: 10px;
      border: 1px solid ${COLOR.GRAY_BORDER};
      border-radius: 2px;
    }

    & > span.name {
      flex: 1;
      color: ${COLOR.GRAY_NAME};
    }

    &.active {
      color: ${COLOR.BROWN};

      & > span.check {
        border: 1px solid ${COLOR.BROWN};
        background: ${COLOR.BROWN};

        &::before {
          content: "";
          display: block;
          width: 2px;
          height: 4px;
          margin-left: 2px;
          border: 2px solid ${COLOR.WHITE};
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
          margin-right: 2px;
        }
      }
    }
  `,
  ForgotPassword: styled.button`
    font-size: 12px;
    color: ${COLOR.BROWN};
    border: none;
    cursor: pointer;
  `,
  ButtonGroup: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 16px;

    & > button {
      width: 100%;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
  Button: styled.button`
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    color: ${COLOR.WHITE};
    background: ${COLOR.BROWN};
  `,
  SignupPanel: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    font-size: 12px;
    margin-top: 24px;
  `,
  SignupNow: styled.button`
    color: ${COLOR.BROWN};
    border: none;
    cursor: pointer;
  `,
};

interface ModalProps {
  onClose: () => void;
  openForgotModal: () => void;
  openSignupModal: () => void;
}

const LoginModal = ({
  onClose,
  openForgotModal,
  openSignupModal,
}: ModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = () => {};

  return (
    <Modal onClose={onClose}>
      <S.Title>Login to your account</S.Title>
      <S.Description>
        Welcome back! Please enter your credentials.
      </S.Description>
      <S.Form>
        <Input
          label="Email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <Input
          label="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          required
        />
        <S.BottomPanel>
          <S.CheckBox
            className={`${checked ? "active" : ""}`}
            onClick={() => {
              setChecked(!checked);
            }}
          >
            <span className="check" />
            <span className="name">Remember me</span>
          </S.CheckBox>
          <S.ForgotPassword onClick={openForgotModal}>
            Forgot password?
          </S.ForgotPassword>
        </S.BottomPanel>
        <S.ButtonGroup>
          <S.Button onClick={handleSubmit}>Sign in</S.Button>
          <ContinueWithGoogle />
        </S.ButtonGroup>
      </S.Form>
      <S.SignupPanel>
        Dont have an account?{" "}
        <S.SignupNow onClick={openSignupModal}>Sign up now</S.SignupNow>
      </S.SignupPanel>
    </Modal>
  );
};

export default LoginModal;
