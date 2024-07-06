import { COLOR } from "@/app/utilities/constants/colors";
import { useAppContext } from "@/app/utilities/contexts/AppContext";
import styled from "styled-components";
import SocialButtons from "../button/SocialButtons";
import { PrimaryButton, SecondaryButton } from "../button/buttons";

const S = {
  Overlay: styled.div<{ $opened: boolean }>`
    position: fixed;
    left: 0;
    top: 108px;
    right: 0;
    bottom: 0;
    background: ${COLOR.BLACK_OVERLAY};
    visibility: hidden;
    overflow: hidden;
    transition: visibility 0.3s linear, opacity 0.3s linear;
    z-index: 10;

    @media (max-width: 768px) {
      top: 92px;
      visibility: ${({ $opened }) => ($opened ? "visible" : "hidden")};
    }
  `,
  Dropdown: styled.div<{ $opened: boolean }>`
    padding: 35px 25px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    background: ${COLOR.WHITE};
    transform: translateY(${({ $opened }) => ($opened ? 0 : "-100%")});
    transition: transform 0.3s ease-in-out;
  `,
  Menu: styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
  `,
  MenuItem: styled.a`
    font-size: 18px;
    color: ${COLOR.BLACK_LINK};
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;

    &::after {
      content: "";
      width: 8px;
      height: 8px;
      display: block;
      border-width: 0 2px 2px 0;
      border-color: ${COLOR.BLACK_LINK};
      border-style: solid;
      transform: rotate(-45deg);
    }
  `,
  LoginPanel: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  BtnLogin: styled(SecondaryButton)`
    justify-content: center;
    padding: 10px;
    border-radius: 12px;
  `,
  BtnSignup: styled(PrimaryButton)`
    padding: 10px;
    border-radius: 12px;
  `,
};

interface DropdownProps {
  openLoginModal: () => void;
  openSignupModal: () => void;
}

const Dropdown = ({ openLoginModal, openSignupModal }: DropdownProps) => {
  const { dropdownOpened, setDropdownOpened } = useAppContext();

  return (
    <S.Overlay
      $opened={dropdownOpened}
      onClick={() => setDropdownOpened(false)}
    >
      <S.Dropdown $opened={dropdownOpened}>
        <S.Menu>
          <S.MenuItem href="/about">About</S.MenuItem>
          <S.MenuItem href="/contact">Contact</S.MenuItem>
          <S.MenuItem href="/faq">FAQ</S.MenuItem>
        </S.Menu>
        <S.LoginPanel>
          <S.BtnLogin className="btn-login" onClick={openLoginModal}>
            Login
          </S.BtnLogin>
          <S.BtnSignup onClick={openSignupModal}>Sign Up</S.BtnSignup>
        </S.LoginPanel>
        <SocialButtons />
      </S.Dropdown>
    </S.Overlay>
  );
};

export default Dropdown;
