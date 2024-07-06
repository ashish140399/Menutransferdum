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
  Login: styled.button`
    color: ${COLOR.BROWN};
    border: none;
    cursor: pointer;
  `,
  Form: styled.form`
    min-height: 300px;
  `,
  NamePanel: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  `,
  ButtonGroup: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 32px;

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

    &:disabled {
      background: ${COLOR.GRAY_LIGHT};
      cursor: default;
    }
  `,
};

interface ModalProps {
  onClose: () => void;
  openLoginModal: () => void;
}

const SignupModal = ({ onClose, openLoginModal }: ModalProps) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <Modal onClose={onClose}>
      <S.Title>Create an account</S.Title>
      <S.Description>
        Already have an account?{" "}
        <S.Login onClick={openLoginModal}>Login</S.Login>
      </S.Description>
      <S.Form>
        <S.NamePanel>
          <Input
            label="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <Input
            label="City"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            required
          />
        </S.NamePanel>
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
        <S.ButtonGroup>
          <S.Button onClick={handleSubmit}>Create an account</S.Button>
          <ContinueWithGoogle />
        </S.ButtonGroup>
      </S.Form>
    </Modal>
  );
};

export default SignupModal;
