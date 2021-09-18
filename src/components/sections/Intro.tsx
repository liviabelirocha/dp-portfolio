import { Container, Texts, Flags } from "../../styles/components/Intro";

import Title from "../Title";
import Divider from "../Divider";

import useTranslation from "../../hooks/useTranslation";

import { SectionInterface } from "../../interfaces/Section";

import BrFlag from "../../assets/br.svg";
import EnFlag from "../../assets/brit.svg";

export default function Intro({ id }: SectionInterface) {
  const { t, setLocale } = useTranslation();

  function handleLocaleChange(language: string) {
    if (!window) return;

    localStorage.setItem("lang", language);
    setLocale(language);
  }

  return (
    <Container id={id}>
      <Texts>
        <div>
          <p className="hello">{t("hello")}</p>
          <Title main="DOMINIC" sub="PERSAUD" defaultStyle={true} />
          <p className="from below">{t("freela")}</p>
          <p className="from">{t("from")}</p>
          <Divider />
        </div>
        <Flags>
          <BrFlag className="flag" onClick={() => handleLocaleChange("pt")} />
          <EnFlag className="flag" onClick={() => handleLocaleChange("en")} />
        </Flags>
      </Texts>
      <img src="cube.gif" />
    </Container>
  );
}
