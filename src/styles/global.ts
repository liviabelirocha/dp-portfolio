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
    margin: 0;
	}

  p {
    @media (max-width: 1280px) {
      font-size: 14px;
    }
  }

  img {
    width: 680px;
    height: 680px;

   @media (max-width: 1366px) {
      width: 425px !important;
      height: 425px !important;
    }
 
    @media (max-width: 968px) {
      width: 338px !important;
      height: 338px !important;
    }

    @media (max-width: 768px) {
      width: 300px !important;
      height: 300px !important;
    }
  }
`;

export const applyPadding = styled.div`
  padding: 0 300px;

  @media (max-width: 1680px) {
    padding: 0 200px;
  }

  @media (max-width: 1440px) {
    padding: 0 60px;
  }

  @media (max-width: 1080px) {
    padding: 0 20px;
  }
`;
