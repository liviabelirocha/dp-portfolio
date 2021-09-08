import styled from "styled-components";
import { applyPadding } from "../global";

export const Container = styled(applyPadding)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 127px;

  img {
    width: 680px;
    height: 680px;
    margin-left: 64px;
  }
`;

export const Texts = styled.div`
  margin-top: 87px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

export const Flags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5rem;

  .flag {
    width: 83.3px;
    cursor: pointer;
    margin: 0.5rem;
  }
`;
