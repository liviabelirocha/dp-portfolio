import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Main = styled.p<{ mainStyle: boolean }>`
  font: 700 96px "Noto Sans";

  opacity: ${(props) => (props.mainStyle ? 1 : 0.5)};
`;

export const Sub = styled.p<{ mainStyle: boolean }>`
  position: absolute;
  margin-top: 120px;
  font: 700 96px "Noto Sans";
  opacity: ${(props) => (props.mainStyle ? 0.5 : 0.1)};
`;
