import {
  Container,
  ImagesGrid,
  ImageColumn,
  TextButton,
  Content,
} from "../../styles/components/Projects";

import Title from "../Title";

import useTranslation from "../../hooks/useTranslation";

import { SectionInterface } from "../../interfaces/Section";

import ArrowSvg from "../../assets/Arrow.svg";

export default function Projects({ id }: SectionInterface) {
  const { t } = useTranslation();

  return (
    <Container id={id}>
      <Title
        main={t("projectsTitle1")}
        sub={t("projectsTitle2")}
        defaultStyle={false}
        className="title"
      />
      <Content>
        <ImagesGrid>
          <img src="mu.jpg" />
          <ImageColumn>
            <img src="mu.jpg" />
            <img src="mu.jpg" />
          </ImageColumn>
        </ImagesGrid>

        <TextButton
          href="https://www.behance.net/dominicpersaud"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{t("seeMore")}</p>
          <ArrowSvg />
        </TextButton>
      </Content>
    </Container>
  );
}
