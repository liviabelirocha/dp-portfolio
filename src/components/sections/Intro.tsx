import { Container, Texts } from "../../styles/components/Intro";

import Title from "../Title";
import Divider from "../Divider";

import useTranslation from "../../hooks/useTranslation";

export default function Intro() {
  const { t, setLocale } = useTranslation();

  function handleLocaleChange(language: string) {
    if (!window) return;

    localStorage.setItem("lang", language);
    setLocale(language);
  }

  return (
    <Container>
      <Texts>
        <p className="hello">{t("hello")}</p>
        <Title main="DOMINIC" sub="PERSAUD" defaultStyle={true} />
        <p className="from below">{t("freela")}</p>
        <p className="from">{t("from")}</p>
        <Divider />
      </Texts>
      <img src="mu.jpg" />
    </Container>
  );
}
