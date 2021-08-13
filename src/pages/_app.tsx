import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { LanguageProvider } from "../contexts/LanguageContext";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </LanguageProvider>
  );
}
export default MyApp;
