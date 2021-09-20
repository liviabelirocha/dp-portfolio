import { useState } from "react";
import {
  Container,
  Nav,
  NavLinkContainer,
  NavLink,
  Selected,
} from "../styles/components/Navbar";

import LogoSVG from "../assets/extendedLogo.svg";

import useTranslation from "../hooks/useTranslation";

export default function Navbar() {
  const { t } = useTranslation();

  const [selected, setSelected] = useState(0);

  const links = [
    { title: "header1", to: "intro" },
    { title: "header2", to: "about" },
    { title: "header3", to: "projects", offset: 170 },
    { title: "header4", to: "tools", offset: 30 },
    { title: "header5", to: "contact", offset: -50 },
  ];

  return (
    <Container>
      <LogoSVG />

      <Nav>
        {links.map((link, index) => (
          <NavLinkContainer
            onClick={() => setSelected(index)}
            key={index}
            to={link.to}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={link.offset || -30}
            duration={500}
          >
            <Selected activeTab={selected == index}></Selected>
            <NavLink>{t(link.title)}</NavLink>
          </NavLinkContainer>
        ))}
      </Nav>
    </Container>
  );
}
