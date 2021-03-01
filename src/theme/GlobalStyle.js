import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;700&display=swap');

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
    color: var(--gray);
    background-color: var(--yellow);
  }

  :root {
    --main-blue: #1976d2;
    --gray: #939597;
    --gray-dark: #808080;
    --yellow: #F5DF4D;
  }
`;

export default GlobalStyle;
