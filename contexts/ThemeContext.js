import { createContext, useContext, useState, useReducer } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import palettes from '../styles/catppucin';

const {
  variants: { frappe, latte, macchiato, mocha },
} = palettes;

const ThemeContext = createContext();

function useThemes() {
  const context = useContext(ThemeContext);
  if (context !== undefined) {
    return context;
  }
  return new Error('Não existe o contexto Theme');
}

function reducer(state, action) {
  if (action.type === 'frappe') {
    return frappe;
  }
  if (action.type === 'latte') {
    return latte;
  }
  if (action.type === 'macchiato') {
    return macchiato;
  }
  if (action.type === 'mocha') {
    return mocha;
  }
}

function ThemesProvider({ children }) {
  //const [theme, setTheme] = useState(frappe);

  const [theme, dispatch] = useReducer(reducer, frappe);

  function handleChange(type) {
    dispatch({ type });
  }
  return (
    <ThemeContext.Provider value={{ theme, handleChange }}>
      <ThemeProvider theme={{ ...theme }}>
        <Global />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

const Global = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
} 
 
body {
  background-color: ${(props) => props.theme.crust.hex} ;
  margin: 0;
}

a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}

h1,h2,h3, h4,h5, h6 {
    color: ${(props) => props.theme.text.hex};
}

`;

export { ThemesProvider, useThemes };