import styled from "styled-components";
import { Link } from "react-scroll";

import { applyPadding } from "../global";

export const Container = styled(applyPadding)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .hamburger {
    cursor: pointer;
  }

  @media (min-width: 948px) {
    .hamburger {
      display: none;
    }
  }
`;

export const Nav = styled.ul<{ $isOpen: boolean }>`
  list-style-type: none;
  display: flex;
  flex-direction: row;

  @media (max-width: 948px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.$isOpen ? "24rem" : "0")};
    transition: max-height 0.3s ease-in;
  }
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
