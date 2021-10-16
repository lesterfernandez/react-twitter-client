import { useState } from "react";
import { darkTheme, lightTheme } from "../themes";

const useTheme = initialValue => {
  const [theme, setTheme] = useState(() =>
    initialValue === "light" ? lightTheme : darkTheme
  );
  const toggleTheme = () => {
    setTheme(c => (c.type === "light" ? darkTheme : lightTheme));
  };

  return [theme, toggleTheme];
};
export default useTheme;
