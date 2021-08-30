import styled from "styled-components";
import { applyPadding } from "../global";

export const Container = styled(applyPadding)`
  width: 100%;
  background: ${(props) => props.theme.colors.backgroundTertiary};
  border-radius: 0 0 230px 230px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: 850px;
  padding-top: 105px !important;

  img {
    width: 680px;
    height: 680px;
    margin-top: 180px;
    margin-left: 94px;
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
    margin-left: 0;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
