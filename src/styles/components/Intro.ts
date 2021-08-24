import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 180px;

  img {
    width: 680px;
    height: 680px;
    margin-left: 64px;
  }
`;

export const Texts = styled.div`
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
