import styled from "styled-components";
import { applyPadding } from "../global";

export const Container = styled(applyPadding)`
  background: ${(props) => props.theme.colors.backgroundTertiary};
  border-radius: 0 230px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: -100px;
  padding-top: 200px !important;

  @media (max-width: 1048px) {
    align-items: center;
    margin-top: 64px;
    padding-top: 92px !important;
  }

  img {
    width: 500px;
    height: 500px;
    border: 2px solid ${(props) => props.theme.colors.backgroundSecondary};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -100px;

  @media (max-width: 1048px) {
    margin-top: 72px;
    align-items: flex-start;
  }
`;

export const ImagesGrid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1048px) {
    flex-direction: column;
  }
`;

export const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextButton = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;

  margin-top: -130px;
  margin-right: 740px;
  margin-bottom: 130px;

  p {
    font: 700 24px "Noto Sans";
    margin-right: 40px;
    letter-spacing: 0.085em;
    color: ${(props) => props.theme.colors.text};
    transition: 0.2s;
  }

  @media (max-width: 1048px) {
    margin-top: 32px;
    margin-right: 0;
    margin-bottom: 0;

    p {
      margin-right: 20px;
    }
  }

  :hover {
    p {
      color: ${(props) => props.theme.colors.backgroundPrimary};
    }
  }
`;
