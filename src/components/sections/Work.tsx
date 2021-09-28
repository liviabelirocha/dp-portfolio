import { Container } from "../../styles/components/Work";

import Title from "../Title";

import { SectionInterface } from "../../interfaces/Section";

import useTranslation from "../../hooks/useTranslation";

export default function Work({ id }: SectionInterface) {
  const { t } = useTranslation();

  return (
    <Container id={id}>
      <Title
        main={t("workTitle1")}
        sub={t("workTitle2")}
        defaultStyle={false}
        className="title"
      />
      <p className="work">{t("workText1")}</p>
      <p className="work">{t("workText2")}</p>
    </Container>
  );
}
