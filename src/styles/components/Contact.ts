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

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  .title {
    margin-bottom: 80px;
  }
`;

export const SubmitButton = styled.button<{ $loading: boolean }>`
  color: ${(props) => props.theme.colors.text};
  font: 500 24px Poppins;
  padding: 26px 48px;
  background: ${(props) =>
    props.$loading
      ? props.theme.colors.backgroundTertiary
      : props.theme.colors.backgroundPrimary};
  margin-top: 40px;
  border: 0;
  cursor: pointer;
  transition: 0.3s;
  width: 80%;
  align-self: center;

  :hover {
    background: ${(props) => props.theme.colors.backgroundTertiary};
  }
`;
