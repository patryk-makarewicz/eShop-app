import React from 'react';

import GlobalStyle from '../theme/GlobalStyle';

import logo from '../assets/logo.svg';
import react from '../assets/logo-react.svg';
import ts from '../assets/logo-typescript.png';
import js from '../assets/logo-js.png';
import html from '../assets/logo-html5.png';
import css from '../assets/logo-css3.png';
import sass from '../assets/logo-sass.svg';
import eslint from '../assets/logo-eslint.svg';
import prettier from '../assets/logo-prettier.png';
import netlify from '../assets/logo-netlify.svg';
import './App.scss';

const App = () => (
  <>
    <GlobalStyle />
    <div className="app">
      <header className="app__header">
        <p className="app__paragraph">My template for React-App with TypeScript.</p>
        <img src={logo} className="app__logo" alt="logo" />
        <div className="icon">
          <img src={react} className="icon__react" alt="logo React" title="React.js" />
          <img src={ts} className="icon__ts" alt="logo TypeScript" title="TypeScript" />
          <img src={js} className="icon__js" alt="logo JavaScript" title="JavaScript" />
          <img src={html} className="icon__html" alt="logo Html" title="HTML5" />
          <img src={css} className="icon__css" alt="logo Css" title="CSS3" />
          <img src={sass} className="icon__sass" alt="logo Sass" title="Sass" />
          <img src={eslint} className="icon__eslint" alt="logo ESlint" title="ESlint" />
          <img src={prettier} className="icon__prettier" alt="logo Prettier" title="Prettier" />
          <img src={netlify} className="icon__netlify" alt="logo Netlify" title="Netlify" />
        </div>
      </header>
    </div>
  </>
);

export default App;
