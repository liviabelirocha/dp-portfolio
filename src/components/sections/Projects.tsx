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
          <a
            href="https://www.behance.net/gallery/127093947/Developer-Portfolio-UI-Design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="projects/devPortfolio.png" />
          </a>
          <ImageColumn>
            <a
              href="https://www.behance.net/gallery/125069441/Food-Delivery-App-UIUX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="projects/food.jpg" />
            </a>
            <a
              href="https://www.behance.net/gallery/119747057/Plant-Daddy-App-UIUX-Webdesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="projects/plantDaddy.png" />
            </a>
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
