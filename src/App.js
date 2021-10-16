import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import GlobalStyles, {
  darkTheme,
  lightTheme,
} from "./components/styled/GlobalStyles";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(c => !c);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Nav toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
