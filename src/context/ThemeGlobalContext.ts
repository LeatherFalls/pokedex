import { createContext } from "react";
import light from "../styles/themes/light";


export const ThemeGlobalContext = createContext({
  theme: light,
  toggleTheme: () => {},
});