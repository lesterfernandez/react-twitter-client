import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body { 
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: background 0.2s ease-in, color 0.2s ease-in;
}

* {
  box-sizing: border-box;
}

`;

export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
};
export const darkTheme = {
  body: "#121620",
  text: "#f1f1f1",
};

export default GlobalStyle;
