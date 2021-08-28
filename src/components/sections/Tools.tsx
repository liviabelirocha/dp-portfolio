import { Container, ImagesGrid, Col } from "../../styles/components/Tools";

import Title from "../Title";

import useTranslation from "../../hooks/useTranslation";

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

export default function Tools() {
  const { t } = useTranslation();

  return (
    <Container>
      <Col>
        <Title
          main={t("toolsTitle1")}
          sub={t("toolsTitle2")}
          defaultStyle={false}
          className="title"
        />
        <ImagesGrid>
          {tools.map((tool) => (
            <img src={tool.img} title={tool.name} />
          ))}
        </ImagesGrid>
      </Col>
      <img src="mu.jpg" />
    </Container>
  );
}
