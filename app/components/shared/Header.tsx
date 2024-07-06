"use client";

import { COLOR } from "@/app/utilities/constants/colors";
import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "../button/buttons";
import { useEffect, useState } from "react";
import LoginModal from "../modal/LoginModal";
import SignupModal from "../modal/SignupModal";
import ForgotModal from "../modal/ForgotModal";
import Hamburger from "../button/Hamburger";
import Dropdown from "../modal/Dropdown";
import { useAppContext } from "@/app/utilities/contexts/AppContext";
import { useClientMediaQuery } from "@/app/utilities/hooks/useMediaQuery";

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 24px 70px;
    align-items: center;
    z-index: 10;
    position: fixed;
    top: 0;
    width: 100vw;
    background: ${COLOR.WHITE};
    gap: 16px;

    @media (max-width: 768px) {
      padding: 16px 32px;
    }
  `,
  LogoPanel: styled.a`
    display: flex;
    align-items: center;
    color: ${COLOR.BLACK_LOGO};
    text-decoration: none;
  `,
  Logo: styled.span`
    font-family: "Satisfy";
    font-size: 43.4px;
    font-weight: 400;
    line-height: 60px;

    @media (max-width: 768px) {
      font-size: 35px;
    }
  `,
  Brown: styled.span`
    font-family: "Satisfy";
    color: ${COLOR.BROWN};
  `,
  RMark: styled.span`
    font-family: "Rubik";
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  `,
  ButtonGroup: styled.div`
    display: flex;
    gap: 12px;

    @media (max-width: 768px) {
      display: none;
    }
  `,
  SearchPanel: styled.div`
    flex: 1;
    border: 1px solid ${COLOR.GRAY_BORDER};
    border-radius: 5px;
    padding: 4px 16px;
    display: flex;
    align-items: center;

    &::before {
      width: 16px;
      height: 16px;
      content: "";
      background: url(/assets/icons/search.svg) no-repeat center center;
      background-size: contain;
      display: block;
    }
  `,
  SearchBox: styled.input`
    font-size: 10px;
    line-height: 10px;
    font-weight: 500;
    color: ${COLOR.BLACK_LOGO};
    border: none;
    outline: none;
  `,
};

const Header = () => {
  const { modalOpened, setModalOpened } = useAppContext();
  const [currentModal, setCurrentModal] = useState<
    "login" | "signup" | "forgot"
  >("signup");
  const [headerType, setHeaderType] = useState(false);

  const openForgotModal = () => {
    setCurrentModal("forgot");
    setModalOpened(true);
  };

  const openSignupModal = () => {
    setCurrentModal("signup");
    setModalOpened(true);
  };

  const openLoginModal = () => {
    setCurrentModal("login");
    setModalOpened(true);
  };

  useEffect(() => {
    const setHeaderTypeByScrolling = () => {
      setHeaderType(window.scrollY > 200);
    };

    window.addEventListener("scroll", setHeaderTypeByScrolling);

    return () => {
      window.removeEventListener("scroll", setHeaderTypeByScrolling);
    };
  }, []);

  const isMobile = useClientMediaQuery("(max-width: 768px)");

  return (
    <S.Wrapper>
      <S.LogoPanel href="/">
        <S.Logo>
          {headerType && isMobile ? "M" : "Menu"}
          <S.Brown>{headerType && isMobile ? "T" : "Trender"}</S.Brown>
        </S.Logo>
        <S.RMark>®</S.RMark>
      </S.LogoPanel>
      {headerType && isMobile && (
        <S.SearchPanel>
          <S.SearchBox placeholder="Type any ingredient..." />
        </S.SearchPanel>
      )}
      <S.ButtonGroup>
        <SecondaryButton className="btn-login" onClick={openLoginModal}>
          Login
        </SecondaryButton>
        <PrimaryButton onClick={openSignupModal}>Sign Up</PrimaryButton>
      </S.ButtonGroup>
      {modalOpened && (
        <>
          {currentModal === "login" && (
            <LoginModal
              onClose={() => setModalOpened(false)}
              openForgotModal={openForgotModal}
              openSignupModal={openSignupModal}
            />
          )}
          {currentModal === "signup" && (
            <SignupModal
              onClose={() => setModalOpened(false)}
              openLoginModal={openLoginModal}
            />
          )}
          {currentModal === "forgot" && (
            <ForgotModal onClose={() => setModalOpened(false)} />
          )}
        </>
      )}
      <Hamburger />
      <Dropdown
        openLoginModal={openLoginModal}
        openSignupModal={openSignupModal}
      />
    </S.Wrapper>
  );
};

export default Header;
