import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.backgroundTertiary};
  border-radius: 0 0 230px 230px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: 850px;
  padding-top: 105px;

  img {
    width: 680px;
    height: 680px;
    margin-top: 180px;
  }
`;

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  column-gap: 50px;
  margin-top: 100px;

  img {
    width: 100px;
    height: 100px;
    margin-top: 0;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 110px;
`;