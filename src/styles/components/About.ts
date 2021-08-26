import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 220px;

  img {
    width: 680px;
    height: 680px;
  }
`;

export const Texts = styled.div`
  margin-left: 50px;
  margin-top: 87px;

  .about {
    margin-top: 50px;
    max-width: 450px;
    font-size: 18px;
  }
`;
