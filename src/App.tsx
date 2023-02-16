import React, { useEffect } from 'react';
import { GlobalStyle } from './styles/global';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/home/Home';
import { ThemeContextProvider } from './context/ThemeContextProvider';
import { ThemeGlobalContext } from './context/ThemeGlobalContext';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import PokemonDetails from './pages/details/PokemonDetails';
import { ToastContainer } from 'react-toastify';

function App() {
  const { theme } = React.useContext(ThemeGlobalContext);

  const isDarkTheme = theme.title === 'dark';

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={ isDarkTheme ? dark : light }>
        <BrowserRouter>
          <ToastContainer />
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:name" element={<PokemonDetails />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContextProvider>   
  )
}

export default App
