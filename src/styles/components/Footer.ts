import styled from "styled-components";
import { Link } from "react-scroll";

import { applyPadding } from "../global";

export const Container = styled(applyPadding)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;

  margin-top: 180px;

  @media (max-width: 968px) {
    margin-top: 140px;

    .logo {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 130px;
  width: 80%;

  @media (max-width: 968px) {
    margin-left: 0;
    width: 100%;
    margin-right: 1.5rem;
  }
`;

export const NavLink = styled(Link)`
  margin-right: 40px;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 1048px) {
    font-size: 14px;
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

export const ContentSection = styled.div<{ $footer: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  margin-top: 35px;

  .small-logo {
    display: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
  }

  @media (max-width: 968px) {
    flex-direction: ${(props) => (props.$footer ? "column" : "row")};
    align-items: ${(props) => (props.$footer ? "flex-end" : "center")};
    margin-top: ${(props) => (props.$footer ? "-2rem" : "0")};

    justify-content: space-between;

    .small-logo {
      transform: scale(0.5, 0.5);
      display: block;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;

  > * {
    margin-left: 15px;
    cursor: pointer;
  }

  @media (max-width: 1048px) {
    .social-icon {
      width: 20px;
    }
  }
`;

export const Copyright = styled.p`
  font-size: 10px;
`;

export const Credits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    font-size: 10px;
  }

  .upperLine {
    margin-bottom: 7px;
    width: 120%;
    border: 1px solid ${(props) => props.theme.colors.backgroundPrimary};
  }

  @media (max-width: 968px) {
    margin-top: 1rem;
  }
`;
