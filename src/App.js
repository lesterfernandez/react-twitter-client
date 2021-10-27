import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ModalContext from "./components/ModalContext";
import SignedInApp from "./components/SignedInApp";
import Signup from "./components/Signup";
import StyledApp from "./components/styled/App.styled";
import GlobalStyles from "./components/styled/GlobalStyles";
import useTheme from "./hooks/useTheme.jsx";
import { UserContext } from "./UserContext";

const DEFAULT_THEME = "dark";

function App() {
  const [theme, toggleTheme] = useTheme(DEFAULT_THEME);
  const user = useContext(UserContext);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <StyledApp>
          {user.loggedIn === null ? (
            ""
          ) : user.loggedIn ? (
            <ModalContext>
              <SignedInApp toggleTheme={toggleTheme} />
            </ModalContext>
          ) : (
            <Signup />
          )}
        </StyledApp>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
