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
  Form: styled.form`
    min-height: 300px;
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
      font-size: 16px;
      font-weight: 500;
      border: none;
      border-radius: 8px;
      color: ${COLOR.WHITE};
    }
  `,
  BtnOkay: styled.button`
    background: ${COLOR.BROWN};
  `,
  BtnCancel: styled.button`
    background: ${COLOR.GRAY_LIGHT};
  `,
};

interface ModalProps {
  onClose: () => void;
}

const ForgotModal = ({ onClose }: ModalProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {};

  return (
    <Modal onClose={onClose}>
      <S.Title>Forgot your password?</S.Title>
      <S.Description>We&apos;ll email you a link to reset it.</S.Description>
      <S.Form>
        <Input
          label="Email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <S.ButtonGroup>
          <S.BtnOkay onClick={handleSubmit}>
            Send me a link to reset my password
          </S.BtnOkay>
          <S.BtnCancel onClick={onClose}>Cancel</S.BtnCancel>
        </S.ButtonGroup>
      </S.Form>
    </Modal>
  );
};

export default ForgotModal;
