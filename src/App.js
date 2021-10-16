import { ThemeProvider } from "styled-components";
// import Nav from "./components/Nav";
import Signup from "./components/Signup";
import StyledApp from "./components/styled/App.styled";
import GlobalStyles from "./components/styled/GlobalStyles";
import useTheme from "./hooks/useTheme.jsx";

const DEFAULT_THEME = "dark";

function App() {
  const [theme, toggleTheme] = useTheme(DEFAULT_THEME);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <StyledApp>
        {/* <Nav toggleTheme={toggleTheme} /> */}
        <Signup />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
