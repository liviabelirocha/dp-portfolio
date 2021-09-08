import { Container, ImagesGrid, Col } from "../../styles/components/Tools";

import Title from "../Title";

import useTranslation from "../../hooks/useTranslation";

import { SectionInterface } from "../../interfaces/Section";

const tools = [
  {
    key: 1,
    name: "Yuh",
    img: "mu.jpg",
  },
  {
    key: 2,
    name: "Yuh",
    img: "mu.jpg",
  },
  {
    key: 3,
    name: "Yuh",
    img: "mu.jpg",
  },
  {
    key: 4,
    name: "Yuh",
    img: "mu.jpg",
  },
  {
    key: 5,
    name: "Yuh",
    img: "mu.jpg",
  },
  {
    key: 6,
    name: "Yuh",
    img: "mu.jpg",
  },
  {
    key: 7,
    name: "Yuh",
    img: "mu.jpg",
  },
  {
    key: 8,
    name: "Yuh",
    img: "mu.jpg",
  },
];

export default function Tools({ id }: SectionInterface) {
  const { t } = useTranslation();

  return (
    <Container id={id}>
      <Col>
        <Title
          main={t("toolsTitle1")}
          sub={t("toolsTitle2")}
          defaultStyle={false}
          className="title"
        />
        <ImagesGrid>
          {tools.map((tool) => (
            <img src={tool.img} title={tool.name} key={tool.key} />
          ))}
        </ImagesGrid>
      </Col>
      <img src="mu.jpg" />
    </Container>
  );
}
