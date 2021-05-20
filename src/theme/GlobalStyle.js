import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 16px;
    font-family: 'Josefin Sans', sans-serif;
    background-color: white;
    color: black;
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
    color: var(--gray-dark);
    background-color: var(--yellow);
  }

  :root {
    --gray: #939597;
    --gray-dark: #808080;
    --yellow: #F5DF4D;
  }
`;

export default GlobalStyle;
