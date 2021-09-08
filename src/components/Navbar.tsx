import { useState } from "react";
import {
  Container,
  Nav,
  NavLinkContainer,
  NavLink,
  Selected,
} from "../styles/components/Navbar";

import { animateScroll as scroll } from "react-scroll";

import LogoSVG from "../assets/extendedLogo.svg";

import useTranslation from "../hooks/useTranslation";

export default function Navbar() {
  const { t } = useTranslation();

  const [selected, setSelected] = useState(0);

  const links = [
    { title: "header1", to: "intro" },
    { title: "header2", to: "about" },
    { title: "header3", to: "projects" },
    { title: "header4", to: "tools" },
    { title: "header5", to: "contact" },
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
            offset={-30}
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
