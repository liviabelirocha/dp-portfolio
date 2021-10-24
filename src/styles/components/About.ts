import styled from "styled-components";
import { applyPadding } from "../global";

export const Container = styled(applyPadding)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 220px;

  @media (max-width: 968px) {
    align-items: center;
    flex-direction: column-reverse;
    margin-top: 0;
  }
`;

export const Texts = styled.div`
  margin-left: 50px;
  margin-top: 87px;
  font: 300 18px Poppins;

  .about {
    margin-top: 50px;
    max-width: 450px;
  }

  @media (max-width: 968px) {
    font: 300 14px Poppins;
    margin-bottom: 32px;
    margin-left: 0;
  }
`;
