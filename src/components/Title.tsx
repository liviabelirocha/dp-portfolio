import { Container, Main, Sub } from "../styles/components/Title";

import { TitleInterface } from "../interfaces/Title";

export default function Title({
  main,
  sub,
  defaultStyle,
  className,
}: TitleInterface) {
  return (
    <Container className={className}>
      <Main mainStyle={defaultStyle}>{main}</Main>
      <Sub mainStyle={defaultStyle}>{sub}</Sub>
    </Container>
  );
}
