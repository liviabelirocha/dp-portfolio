import { Container, Texts } from "../../styles/components/About";

import Title from "../Title";

import useTranslation from "../../hooks/useTranslation";

export default function About() {
  const { t } = useTranslation();

  return (
    <Container>
      <img src="mu.jpg" />

      <Texts>
        <Title
          main={t("aboutTitle1")}
          sub={t("aboutTitle2")}
          defaultStyle={false}
        />
        <p className="about">{t("about")}</p>
      </Texts>
    </Container>
  );
}
