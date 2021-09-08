import styled from "styled-components";
import { Link } from "react-scroll";

import { applyPadding } from "../global";

export const Container = styled(applyPadding)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Nav = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
`;

export const NavLinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`;

export const NavLink = styled.p`
  margin: 22px 12.5px;
  font-size: 16px;
`;

export const Selected = styled.div<{ activeTab: boolean }>`
  width: 100%;
  height: 5px;
  background: ${(props) =>
    props.activeTab ? props.theme.colors.backgroundPrimary : ""};
`;
