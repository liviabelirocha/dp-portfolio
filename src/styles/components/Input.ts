import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    height: 5rem;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme.colors.text};
    background: transparent;
    transition: 0.2s;
    color: ${(props) => props.theme.colors.text};
    font: 500 24px Poppins;

    @media (max-width: 428px) {
      font-size: 16px;
    }

    :focus {
      outline: none;
      border-color: ${(props) => props.theme.colors.backgroundPrimary};
    }

    :focus + .placeholder-text .text {
      font-size: 14px;
      color: ${(props) => props.theme.colors.backgroundPrimary};
      transform: translate(0, -130%);
    }

    :focus + .placeholder-text .text,
    :not(input[value=""]) + .placeholder-text .text {
      font-size: 14px;
      color: ${(props) => props.theme.colors.backgroundPrimary};
      transform: translate(0, -130%);
    }
  }

  .placeholder-text {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 3px solid transparent;
    background-color: transparent;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .text {
    font-size: 24px;
    padding: 0 0.5rem;
    background-color: transparent;
    transform: translate(0);
    transition: transform 0.15s ease-out, font-size 0.15s ease-out;

    @media (max-width: 428px) {
      font-size: 16px;
    }
  }
`;
