import styled from "styled-components";

export const Container = styled.div`
  width: 80px;
  height: 0;
  border: 2px solid ${(props) => props.theme.colors.backgroundPrimary};
  border-radius: 10px;
  margin-top: 20px;
`;
