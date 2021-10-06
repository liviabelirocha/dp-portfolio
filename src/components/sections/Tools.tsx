import { Container, ImagesGrid, Col } from "../../styles/components/Tools";

import Title from "../Title";

import useTranslation from "../../hooks/useTranslation";

const tools = [
  {
    key: 1,
    name: "Yuh",
    img: "tools/1-Figma.svg",
  },
  {
    key: 2,
    name: "Yuh",
    img: "tools/2-Adobe_XD.svg",
  },
  {
    key: 3,
    name: "Yuh",
    img: "tools/3-Photoshop.svg",
  },
  {
    key: 4,
    name: "Yuh",
    img: "tools/4-Illustrator.svg",
  },
  {
    key: 5,
    name: "Yuh",
    img: "tools/5-After_Effects.svg",
  },
  {
    key: 6,
    name: "Yuh",
    img: "tools/6-Premiere_Pro.png",
  },
  {
    key: 7,
    name: "Yuh",
    img: "tools/7-CSS3.svg",
  },
  {
    key: 8,
    name: "Yuh",
    img: "tools/8-HTML5.svg",
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
            <img src={tool.img} title={tool.name} key={tool.key} />
          ))}
        </ImagesGrid>
      </Col>
      <img src="mu.jpg" />
    </Container>
  );
}
