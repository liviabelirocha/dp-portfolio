import {
  Container,
  ImagesGrid,
  ImageColumn,
  TextButton,
} from "../../styles/components/Projects";

import Title from "../Title";

import useTranslation from "../../hooks/useTranslation";

import { BsArrowRight } from "react-icons/bs";
import ArrowSvg from "../../assets/Arrow.svg";

export default function Intro() {
  const { t } = useTranslation();

  return (
    <Container>
      <Title
        main={t("projectsTitle")}
        sub=""
        defaultStyle={false}
        className="title"
      />
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
    </Container>
  );
}
