import styled from "styled-components";
import { applyPadding } from "../global";

export const Container = styled(applyPadding)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 180px;

  img {
    width: 680px;
    height: 680px;
    margin-left: 64px;
  }
`;

export const Texts = styled.div`
  margin-top: 87px;

  .hello {
    font-size: 18px;
    margin-bottom: -10px;
  }

  .from {
    font-size: 24px;
  }

  .below {
    margin-top: 60px;
  }
`;
