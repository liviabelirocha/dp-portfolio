import {
  AiFillLinkedin,
  AiOutlineDribbble,
  AiOutlineBehance,
  AiFillHeart,
  AiFillGithub,
} from "react-icons/ai";

import {
  Container,
  Content,
  NavLink,
  ContentSection,
  Icons,
  Copyright,
  Credits,
} from "../styles/components/Footer";

import LogoSVG from "../assets/mainLogo.svg";

import useTranslation from "../hooks/useTranslation";

export default function Footer() {
  const { t } = useTranslation();

  const links = [
    { title: "header1", to: "intro" },
    { title: "header2", to: "about" },
    { title: "header3", to: "projects" },
    { title: "header4", to: "work" },
    { title: "header5", to: "contact" },
  ];

  return (
    <Container>
      <LogoSVG className="logo" />

      <Content>
        <ContentSection $footer={false}>
          <LogoSVG className="small-logo" />

          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-30}
              isDynamic={true}
              duration={500}
            >
              {t(link.title)}
            </NavLink>
          ))}

          <Icons>
            <a
              href="https://www.linkedin.com/in/dominic-persaud-670857212/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="social-icon" size="25px" />
            </a>
            <a
              href="https://dribbble.com/DomPersaud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineDribbble className="social-icon" size="25px" />
            </a>
            <a
              href="https://www.behance.net/dominicpersaud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineBehance className="social-icon" size="25px" />
            </a>
          </Icons>
        </ContentSection>
        <ContentSection $footer={true}>
          <Copyright>
            {t("rightsText1")}
            <br />
            {t("rightsText2")}
          </Copyright>
          <Credits>
            <div className="upperLine"></div>
            <p>
              {t("devMordunne1")} <AiFillHeart size="8" /> {t("devMordunne2")}{" "}
              <a
                href="https://github.com/liviabelirocha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size="8" />
              </a>
            </p>
          </Credits>
        </ContentSection>
      </Content>
    </Container>
  );
}
