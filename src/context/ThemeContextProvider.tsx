import { useState } from "react";
import { ThemeGlobalContext } from "./ThemeGlobalContext";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

interface IThemeProps {
  children: React.ReactNode;
}

export const ThemeContextProvider = ({ children }: IThemeProps) => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    theme.title === "light" ? setTheme(dark) : setTheme(light);
    console.log(theme);
  };

  return (
    <ThemeGlobalContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeGlobalContext.Provider>
  );
};