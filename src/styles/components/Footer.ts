import styled from "styled-components";
import { Link } from "react-scroll";

import { applyPadding } from "../global";

export const Container = styled(applyPadding)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-top: 180px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 130px;
  width: 80%;
`;

export const NavLink = styled(Link)`
  margin-right: 40px;
  font-size: 16px;
  cursor: pointer;
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 35px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;

  > * {
    margin-left: 15px;
    cursor: pointer;
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
`;
