import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
        background: ${(props) => props.theme.colors.backgroundSecondary};
		color: ${(props) => props.theme.colors.text};
        font: 400 18px 'Poppins', sans-serif;
	}

  p {
    font: 300 18px Poppins;

    @media (max-width: 1280px) {
      font-size: 14px
    }
  }

  img {
    width: 680px;
    height: 680px;

    /* @media (max-width: 1280px) {
      width: 424px;
      height: 424px;
    }

    @media (max-width: 864px) {
      width: 338px;
      height: 338px;
    } */
  }
`;

export const applyPadding = styled.div`
  padding: 0 300px;

  @media (max-width: 1680px) {
    padding: 0 200px;
  }

  @media (max-width: 1440px) {
    padding: 0 50px;
  }

  @media (max-width: 1366px) {
    padding: 0 20px;
  }
`;
