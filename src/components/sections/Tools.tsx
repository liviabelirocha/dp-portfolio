import { Container, ImagesGrid, Col } from "../../styles/components/Tools";

import Title from "../Title";

import useTranslation from "../../hooks/useTranslation";

import { SectionInterface } from "../../interfaces/Section";

const tools = [
  {
    key: 1,
    name: "Yuh",
    img: "1-Figma.svg",
  },
  {
    key: 2,
    name: "Yuh",
    img: "2-Adobe_XD.svg",
  },
  {
    key: 3,
    name: "Yuh",
    img: "3-Photoshop.svg",
  },
  {
    key: 4,
    name: "Yuh",
    img: "4-Illustrator.svg",
  },
  {
    key: 5,
    name: "Yuh",
    img: "5-After_Effects.svg",
  },
  {
    key: 6,
    name: "Yuh",
    img: "6-Premiere_Pro.png",
  },
  {
    key: 7,
    name: "Yuh",
    img: "7-CSS3.svg",
  },
  {
    key: 8,
    name: "Yuh",
    img: "8-HTML5.svg",
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
