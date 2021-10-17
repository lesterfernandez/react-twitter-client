import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body { 
  margin: 0;
  font-family: "Montserrat", -apple-system, 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Droid Sans', 'Helvetica Neue', sans-serif;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: background 0.2s ease-in, color 0.2s ease-in;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

* {
  box-sizing: border-box;
}

:root {
  --primary-main: #aaccff;
}

`;

export default GlobalStyle;
