import React from 'react';
import { GlobalStyle } from './styles/global';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/home/Home';
import { ThemeContextProvider } from './context/ThemeContextProvider';
import { ThemeGlobalContext } from './context/ThemeGlobalContext';
import PokemonDetails from './pages/details/PokemonDetails';
import { ToastContainer } from 'react-toastify';

function App() {
  const { theme } = React.useContext(ThemeGlobalContext);

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={ theme }>
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
