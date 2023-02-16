import { useState } from "react";
import { ThemeGlobalContext } from "./ThemeGlobalContext";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { getPokemon } from "../services/api";

interface IThemeProps {
  children: React.ReactNode;
}

export const ThemeContextProvider = ({ children }: IThemeProps) => {
  const [theme, setTheme] = useState(light);
  const [searchPokemon, setSearchPokemon] = useState("");

  const toggleTheme = () => {
    theme.title === "light" ? setTheme(dark) : setTheme(light);
    console.log(theme);

    return theme;
  };

  const handleSearchPokemon = async (name: string) => {
    const response = await getPokemon(name);
    setSearchPokemon(name);

    return response;
  };

  return (
    <ThemeGlobalContext.Provider value={{
      theme,
      toggleTheme,
      searchPokemon,
      setSearchPokemon,
      handleSearchPokemon,
    }}>
      {children}
    </ThemeGlobalContext.Provider>
  );
};