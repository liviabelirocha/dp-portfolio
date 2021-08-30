import styled from "styled-components";
import { applyPadding } from "../global";

export const Container = styled(applyPadding)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 220px;

  img {
    width: 680px;
    height: 680px;
  }
`;

export const Texts = styled.div`
  margin-left: 50px;
  margin-top: 87px;
  font: 300 18px Poppins;

  .about {
    margin-top: 50px;
    max-width: 450px;
    font-size: 18px;
  }
`;
