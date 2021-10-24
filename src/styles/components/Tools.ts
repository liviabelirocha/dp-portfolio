import styled from "styled-components";
import { applyPadding } from "../global";

export const Container = styled(applyPadding)`
  width: 100%;
  background: ${(props) => props.theme.colors.backgroundTertiary};
  border-radius: 0 0 0 230px;
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

    @media (max-width: 1440px) {
      margin-left: 40px;
    }
  }

  @media (max-width: 1550px) {
    img {
      width: 425px !important;
      height: 425px !important;
    }
  }

  @media (max-width: 1048px) {
    flex-direction: column;
    align-items: center;
    height: auto;

    img {
      margin-top: 64px;
      margin-bottom: 135px;
      margin-left: 0;
      width: 300px !important;
      height: 300px !important;
    }
  }
`;

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  column-gap: 50px;
  margin-top: 100px;

  img {
    width: 100px !important;
    height: 100px !important;
    margin-top: 0;
    margin-left: 0;
    margin-bottom: 0;
  }

  @media (max-width: 1048px) {
    column-gap: 30px;
    img {
      width: 60px !important;
      height: 60px !important;
    }
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
