import styled from "styled-components";
import { applyPadding } from "../global";

export const Container = styled(applyPadding)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 180px;

  .title {
    margin-bottom: 50px;
  }

  .work {
    max-width: 805px;
    margin-top: 20px;
    font: 300 18px Poppins;
  }

  @media (max-width: 1048px) {
    .work {
      font-size: 14px;
    }

    margin-top: 64px;
  }
`;

export const Content = styled.div``;
