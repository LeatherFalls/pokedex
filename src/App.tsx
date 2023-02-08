import { GlobalStyle } from './styles/global';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={ light }>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/:id" element={<h1>Pokemon</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
  )
}

export default App
