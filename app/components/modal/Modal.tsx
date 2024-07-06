import { COLOR } from "@/app/utilities/constants/colors";
import { ReactNode } from "react";
import styled from "styled-components";

const S = {
  Overlay: styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: ${COLOR.BROWN_OVERLAY};
    backdrop-filter: blur(10px);
    z-index: 9;

    @media (max-width: 768px) {
      top: 92px;
    }
  `,
  Modal: styled.div`
    display: flex;
    width: 66vw;
    background: ${COLOR.WHITE};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 24px;
    overflow: hidden;

    @media (max-width: 768px) {
      border-radius: 0;
      width: 100vw;
      height: calc(100vh - 92px);
    }
  `,
  ModalBody: styled.div`
    width: 50%;
    padding: 32px 40px 90px;

    @media (max-width: 768px) {
      width: 100%;
    }
  `,
  ModalTitle: styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  `,
  Logo: styled.span`
    font-family: "Satisfy";
    font-size: 32px;
    font-weight: 400;
    line-height: 60px;
  `,
  Brown: styled.span`
    font-family: "Satisfy";
    color: ${COLOR.BROWN};
  `,
  RMark: styled.span`
    font-family: "Rubik";
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  `,
  Contents: styled.div`
    margin-top: 40px;

    @media (max-width: 768px) {
      margin-top: 0;
    }
  `,
  ImagePanel: styled.div`
    width: 50%;
    background: url(/assets/background/bg_modal.jpg) no-repeat center center;
    background-size: cover;

    @media (max-width: 768px) {
      display: none;
    }
  `,
  Close: styled.button`
    border: none;
    width: 32px;
    height: 32px;
    background: url(/assets/icons/close.svg) no-repeat center center;
    background-size: contain;
    position: absolute;
    top: 16px;
    right: 16px;

    @media (max-width: 768px) {
      background: url(/assets/icons/close_black.svg) no-repeat center center;
    }
  `,
};

interface ModalProps {
  children?: ReactNode | ReactNode[];
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <S.Overlay onClick={onClose}>
      <S.Modal
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <S.ModalBody>
          <S.ModalTitle>
            <S.Logo>
              Menu<S.Brown>Trender</S.Brown>
            </S.Logo>
            <S.RMark>®</S.RMark>
          </S.ModalTitle>
          <S.Contents>{children}</S.Contents>
        </S.ModalBody>
        <S.ImagePanel />
        <S.Close onClick={onClose} />
      </S.Modal>
    </S.Overlay>
  );
};

export default Modal;
