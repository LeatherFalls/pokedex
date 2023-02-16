import { createContext } from "react";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

type Theme = typeof light | typeof dark;

type ThemeGlobalContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeGlobalContext = createContext({
  theme: light,
  toggleTheme: () => {},
  searchPokemon: "",
  setSearchPokemon: (pokemon: any) => {},
  handleSearchPokemon: (pokemon: any) => {},
});