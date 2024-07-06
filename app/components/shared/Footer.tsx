"use client";

import { COLOR } from "@/app/utilities/constants/colors";
import styled from "styled-components";
import { PrimaryButton } from "../button/buttons";
import SocialButtons from "../button/SocialButtons";

const S = {
  Footer: styled.footer`
    padding: 40px 70px;
    display: flex;
    flex-direction: column;
    gap: 60px;

    & > div {
      display: flex;
      justify-content: space-between;
    }

    @media (max-width: 768px) {
      padding: 20px 16px;
      gap: 40px;

      & > div {
        flex-direction: column;
        gap: 20px;
      }
    }
  `,
  FooterTop: styled.div``,
  LogoWrapper: styled.div`
    width: 300px;
  `,
  LogoPanel: styled.div`
    display: flex;
    align-items: center;
  `,
  Logo: styled.span`
    font-family: "Satisfy";
    font-size: 48px;
    font-weight: 400;
    line-height: 60px;

    @media (max-width: 768px) {
      font-size: 36px;
      line-height: 40px;
    }
  `,
  Brown: styled.span`
    font-family: "Satisfy";
    color: ${COLOR.BROWN};
  `,
  RMark: styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  `,
  LogoDescription: styled.div`
    font-size: 18px;
    line-height: 24px;
    margin-top: 20px;
    color: ${COLOR.BLACK_DESCRIPTION};

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 18px;
    }
  `,
  NewsletterPanel: styled.div`
    max-width: 100%;
    width: 440px;

    @media (max-width: 768px) {
      order: 2;
    }
  `,
  PanelTitle: styled.h5`
    font-size: 22px;
    font-weight: 600;
    margin: 0 0 18px;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 18px;
    }
  `,
  EmailPanel: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Email: styled.input`
    font-size: 18px;
    line-height: 18px;
    padding: 16px;
    border: none;
    width: 100%;

    &:active,
    &:hover,
    &:focus-visible {
      border: none;
      outline: none;
    }

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 14px;
      width: auto;
    }
  `,
  Subscribe: styled(PrimaryButton)`
    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 14px;
      padding: 14px 18px;
    }
  `,
  SocialPanel: styled.div`
    @media (max-width: 768px) {
      order: 1;
      display: flex;
      justify-content: flex-start;

      & > h5 {
        display: none;
      }
    }
  `,
  FooterBottom: styled.div`
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,
  CopyRight: styled.p`
    font-size: 20px;
    color: ${COLOR.GRAY};
    margin: 0;

    @media (max-width: 768px) {
      font-size: 14px;
      order: 2;
    }
  `,
  LinkGroup: styled.div`
    display: flex;
    gap: 20px;
  `,
  Link: styled.a`
    font-size: 16px;
    line-height: 24px;
    color: ${COLOR.BLACK_LINK};
    text-decoration: none;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  `,
};

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterTop>
        <S.LogoWrapper>
          <S.LogoPanel>
            <S.Logo>
              Menu<S.Brown>Trender</S.Brown>
            </S.Logo>
            <S.RMark>®</S.RMark>
          </S.LogoPanel>
          <S.LogoDescription>
            Discover, explore, and analyze your favorite foods, anywhere.
          </S.LogoDescription>
        </S.LogoWrapper>
        <S.NewsletterPanel>
          <S.PanelTitle>Subscribe to our newsletter</S.PanelTitle>
          <S.EmailPanel>
            <S.Email placeholder="Enter your email address" />
            <S.Subscribe>Subscribe</S.Subscribe>
          </S.EmailPanel>
        </S.NewsletterPanel>
        <S.SocialPanel>
          <S.PanelTitle>Follow us</S.PanelTitle>
          <SocialButtons />
        </S.SocialPanel>
      </S.FooterTop>
      <S.FooterBottom>
        <S.CopyRight>
          Copyright © 2024 MenuTrender | All Rights Reserved
        </S.CopyRight>
        <S.LinkGroup>
          <S.Link href="/about">About</S.Link>
          <S.Link href="/contact">Contact</S.Link>
          <S.Link href="/faq">FAQ</S.Link>
        </S.LinkGroup>
      </S.FooterBottom>
    </S.Footer>
  );
};

export default Footer;
