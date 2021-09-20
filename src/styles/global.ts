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
`;

export const applyPadding = styled.div`
  padding: 0 300px;

  @media (max-width: 1680px) {
    padding: 0 200px;
  }

  @media (max-width: 1440px) {
    padding: 0 50px;
  }
`;
