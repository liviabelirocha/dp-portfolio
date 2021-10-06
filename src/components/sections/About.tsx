import { Container, Texts } from "../../styles/components/About";

import Title from "../Title";

import useTranslation from "../../hooks/useTranslation";

import { SectionInterface } from "../../interfaces/Section";

export default function About({ id }: SectionInterface) {
  const { t } = useTranslation();

  return (
    <Container id={id}>
      <img src="illustration1.png" />

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
